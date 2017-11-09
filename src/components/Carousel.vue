<template>
    <div class="zm-carousel"
         @touchstart="swipeStart"
         @touchmove="swipeMove"
         @touchend="swipeEnd"

         @mousedown="swipeStartMouse"
         @mousemove="swipeMoveMouse"
         @mouseup="swipeEndMouse">

        <div class="zm-carousel-list" :style="transformObj">
            <div class="zm-carousel-img-wrap" v-for="item in list">
                <img class="zm-carousel-img" :src="item.url" alt="">
            </div>
        </div>

        <div class="zm-carousel-points">
            <div class="zm-carousel-point-wrap" v-for="i in list.length" @click.stop="sliderTo(i - 1)">
                <div class="zm-carousel-point"
                     :class="{highlight: page == i - 1}"></div>
            </div>
        </div>
    </div>
</template>

<script>
    const isMobile = 'ontouchstart' in window;

    function docTouchStart(e) {
        e.preventDefault();
    }

    function getClientX(e) {
        if (!isMobile) {
            return e.clientX;
        }
        if (!(e.touches || e.changedTouches)) return;
        return (e.touches[0] || e.changedTouches[0]).clientX;
    }

    function getClientY(e) {
        if (!isMobile) {
            return e.clientY;
        }
        if (!(e.touches || e.changedTouches)) return;
        return (e.touches[0] || e.changedTouches[0]).clientY;
    }

    export default {
        name: 'zm-carousel',
        props: {
            // 数据列表 {url-图片链接, href-跳转链接}
            list: {
                type: Array,
                default: []
            },
            // 自动播放间隔（单位：毫秒，0为不自动播放）
            auto: {
                type: Number,
                default: 0,
            }
        },
        data() {
            return {
                winWidth: window.innerWidth,        // 窗口宽度(即每张图片宽度)
                page: 0,            // 当前展示图的序号(从0开始)
                manualOffset: 0,    // 手动滑动引起的偏移值(px)
                startX: 0,          // 手动偏移初始X坐标(px)
                startY: 0,          // 手动偏移初始Y坐标(px)
                moveStartTime: 0,   // 手动偏移初始触发时间(timestamp)

                slideParams: {
                    startMoveDistance: 20,   // 最小触发滑动的滑动距离
                    minMoveDistance: 40,     // 最小触发滚屏的滑动距离 单位: 像素
                    minMoveSpeed: 150        // 最小触发滚屏滑动速度 单位: 像素/秒
                }
            }
        },
        computed: {
            transformObj: function() {
                let translateX = -1 * this.winWidth * this.page + this.manualOffset;
                let translateProp = `translate3d(${translateX}px, 0, 0)`;
                let obj = {
                    '-webkit-transform': translateProp,
                    'transform': translateProp,
                };
                if (this.manualOffset != 0) {
                    obj.transition = 'none';
                }
                return obj;
            }
        },
        methods: {
            slideNext() {
                if (this.page < this.list.length - 1) {
                    this.page ++;
                }
            },
            slidePrev() {
                if (this.page > 0) {
                    this.page --;
                }
            },
            sliderTo(page) {
                this.page = page;
            },
            swipeStartMouse(e) {
                if (isMobile) return;
                this.swipeStart(e);
            },
            swipeStart(e) {
                this.startX = getClientX(e);
                this.startY = getClientY(e);

                this.autoPlayPause();
            },
            swipeMoveMouse(e) {
                if (isMobile) return;
                this.swipeMove(e);
            },
            swipeMove(e) {
                if (!this.startX) return;       // PC: 如果直接mousemove则不做处理
                if (!isMobile) {
                    e.preventDefault();             // PC: 阻止默认行为, 防止产生拖拽图片; Mobile: 不阻止,否则竖向滚动将无法触发
                }
                var moveX = getClientX(e);
                var moveY = getClientY(e);
                var diffX = moveX - this.startX;
                var diffY = moveY - this.startY;
                var startMoveDistance = this.slideParams.startMoveDistance;

                // 最小滑动距离未达到或者纵向滑动的2倍高于横向滑动
                if (Math.abs(diffX) < startMoveDistance || Math.abs(diffX) < Math.abs(diffY) * 2) {
                    return;
                }

                // 手动滑动引起的偏移, 须减去最小滑动距离
                this.manualOffset = (diffX - startMoveDistance * (diffX / Math.abs(diffX)));

                if (!this.moveStartTime) {
                    this.moveStartTime = Date.now();
                }

                // 已经触发左右滑动后阻止默认行为, 防止出现上下滚动
                document.addEventListener('touchmove', docTouchStart);
            },
            swipeEndMouse(e) {
                if (isMobile) return;
                this.swipeEnd(e);
            },
            swipeEnd(e) {
                document.removeEventListener('touchmove', docTouchStart);
                var endX = getClientX(e);
                var moveDistance = endX - this.startX;
                var moveDistanceAbs = Math.abs(moveDistance);
                var moveDuration = Math.abs(Date.now() - this.moveStartTime);
                var moveSpeed = moveDistanceAbs / (moveDuration / 1000);

                if (this.manualOffset == 0) {       // 如果未引起左右偏移则尝试触发 click
                    this.carouselClick();
                }

                // 重置参数, 如果未达到翻页条件则复位
                this.manualOffset = 0;
                this.startX = 0;
                this.moveStartTime = 0;

                // 判断达到翻页条件并翻页
                if (moveDistanceAbs > this.slideParams.minMoveDistance && moveSpeed > this.slideParams.minMoveSpeed) {
                    moveDistance < 0 ? this.slideNext() : this.slidePrev();
                }

                this.autoPlay();
            },
            autoPlay() {       // 启动自动播放
                if (this.auto && !this.autoPlayTimer) {
                    this.autoPlayTimer = setInterval(() => {
                        this.page = (this.page + 1) % this.list.length;
                    }, parseInt(this.auto));
                }
            },
            autoPlayPause() {   // 暂停自动播放
                if (this.autoPlayTimer) {
                    clearInterval(this.autoPlayTimer);
                    this.autoPlayTimer = null;
                }
            },
            carouselClick() {      // 如果有 href 属性则跳转，否则 $emit 事件
                let item = this.list[this.page];
                if (item.href) {
                    location.href = item.href;
                } else {
                    this.$emit('carousel-click', item);
                }
            }
        },
        mounted() {
            this.autoPlay();

            // 窗口 resize 时保持宽度实时更新
            window.addEventListener('resize', () => {
                this.winWidth = window.innerWidth;
            });
        }
    }
</script>
