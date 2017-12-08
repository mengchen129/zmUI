<template>
    <div>
        
    </div>
</template>

<script>
    import throttle from 'lodash.throttle';

    export default {
        name: 'zm-scroll-loading',
        data() {
            return {
                el: null,           // 绑定的元素, 默认window
                loadingCallback: null,  // 加载回调
                loading: false,     // 是否正在加载中
                preloadHeight: 0,   // 预加载的高度
                eventHandler: null,
            }
        },
        methods: {
            bindElement(el = window, callback, options = {}) {
                this.el = el;
                this.loadingCallback = typeof callback === 'function' ? callback : function() {};
                this.preloadHeight = options.preloadHeight || 0;
                this.eventHandler = throttle(() => {
                    if (this.loading) {
                        //console.log('正在加载中, 不重复加载');
                        return;
                    }

                    let cond;

                    if (this.el === window) {
                        cond = (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - this.preloadHeight);
                    } else {
//                        console.log("滚动: ", this.el.scrollTop, this.el.offsetHeight, this.el.scrollHeight);
                        cond = (this.el.scrollTop + this.el.offsetHeight >= this.el.scrollHeight - this.preloadHeight);
                    }

                    if (cond) {
                        //console.log('加载下一页');

                        if (this.loadingCallback) {
                            this.loading = true;
                            this.loadingCallback().then(() => {
                                this.loading = false;
                            }).catch(() => {
                                this.loading = false;
                            });
                        }
                    }
                }, 200);

                this.el.addEventListener('scroll', this.eventHandler, false);
            }
        },
        beforeDestroy() {
            this.el.removeEventListener('scroll', this.eventHandler);
            //console.log('scroll loading 移除');
        }
    }
</script>
