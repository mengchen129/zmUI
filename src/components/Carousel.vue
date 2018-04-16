<template>
    <div class="zm-carousel"
         @touchstart="swipeStart"
         @touchmove="swipeMove"
         @touchend="swipeEnd"

         @mousedown="swipeStartMouse"
         @mousemove="swipeMoveMouse"
         @mouseup="swipeEndMouse">

        <div class="zm-carousel-list" :class="{'no-transition': willLoopScroll}" :style="transformObj">
            <div class="zm-carousel-img-wrap" v-for="item in _list" @click.stop="carouselClick">
                <img class="zm-carousel-img" :src="item.url" alt="">
            </div>
        </div>

        <div class="zm-carousel-points">
            <div class="zm-carousel-point-wrap" v-for="i in _list.length">
                <div class="zm-carousel-point" v-if="i >= 2 && i <= _list.length - 1"
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
                page: 1,            // 当前展示图的序号(从1开始,首尾两个索引是复制的尾首元素，用于无缝滚动)
                manualOffset: 0,    // 手动滑动引起的偏移值(px)
                startX: 0,          // 手动偏移初始X坐标(px)
                startY: 0,          // 手动偏移初始Y坐标(px)
                diffX: 0,           // 实时偏移X坐标(px)
                diffY: 0,           // 实时偏移Y坐标(px)
                moveStartTime: 0,   // 手动偏移初始触发时间(timestamp)

                slideParams: {
                    startMoveDistance: 20,   // 最小触发滑动的滑动距离
                    minMoveDistance: 40,     // 最小触发滚屏的滑动距离 单位: 像素
                    minMoveSpeed: 150        // 最小触发滚屏滑动速度 单位: 像素/秒
                },

                willLoopScroll: false,       // 即将开始循环滚动
            }
        },
        computed: {
            _list: function() {
                let list = [].slice.call(this.list);
                list.unshift(list[list.length - 1]);        // 将 list 最后一个元素放在最前
                list.push(list[1]);                         // 将 list 第一个元素放在最后
                return list;
            },
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
                if (this.page < this._list.length - 1) {
                    this.page ++;

                    // 如果滚到最后一张(原 list 第一张的 copy)，则定位到这一张的图片的初始位置(index=1)，同时禁止动画，切换后恢复
                    if (this.page === this._list.length - 1) {
                        setTimeout(() => {
                            this.willLoopScroll =  true;
                            this.page = 1;
                            setTimeout(() => {
                                this.willLoopScroll = false;
                            }, 16);
                        }, 300);
                    }
                }
            },
            slidePrev() {
                if (this.page > 0) {
                    this.page --;

                    // 如果滚到第一张(原 list 最后一张的 copy)，则定位到这一张的图片的初始位置(index=length-2)，同时禁止动画，切换后恢复
                    if (this.page === 0) {
                        setTimeout(() => {
                            this.willLoopScroll = true;
                            this.page = this._list.length - 2;
                            setTimeout(() => {
                                this.willLoopScroll = false;
                            }, 16);
                        }, 300);
                    }
                }
            },
            swipeStartMouse(e) {
                if (isMobile) return;
                this.swipeStart(e);
            },
            swipeStart(e) {
                this.startX = getClientX(e);
                this.startY = getClientY(e);
                this.diffX = 0;
                this.diffY = 0;

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
                let moveX = getClientX(e);
                let moveY = getClientY(e);
                let diffX = moveX - this.startX;
                let diffY = moveY - this.startY;
                this.diffX = diffX;
                this.diffY = diffY;
                let startMoveDistance = this.slideParams.startMoveDistance;

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
                let endX = getClientX(e);
                let moveDistance = endX - this.startX;
                let moveDistanceAbs = Math.abs(moveDistance);
                let moveDuration = Math.abs(Date.now() - this.moveStartTime);
                let moveSpeed = moveDistanceAbs / (moveDuration / 1000);

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
                        this.slideNext();
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
                // PC 端在图片上滑动会始终触发 click，这里需要根据是否有滑动做屏蔽
                if (!isMobile && (this.diffX || this.diffY)) {
                    return;
                }

                let item = this._list[this.page];
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
