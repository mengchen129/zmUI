<template>
    <transition name="zm-progress">
        <div class="zm-progress" v-show="showing" :style="transformObj"></div>
    </transition>
</template>

<script>
    import Api from '../plugins/GlobalApi';

    export default {
        name: 'zm-progress',
        data() {
            return {
                x: 1,           // 偏移 x=1:translateX(-100%), x=0表示进度条处于原位置即视觉100%宽度)
                showing: false,
                timer: null,
            }
        },
        computed: {
            transformObj() {
                let xOffset = -1 * this.x * 100;
                let translate = `translate3d(${xOffset}%, 0, 0)`;
                return {
                    '-webkit-transform': translate,
                    'transform': translate,
                }
            }
        },
        methods: {
            start() {
                this.showing = true;
                this.x = 1;
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    this.x -= 0.1 * this.x;       // 进度条行进速度越来越慢， 最多到89%时停止
                    if (this.x <= 0.11) {
                        clearInterval(this.timer);
                    }
                }, 300);
            },
            done() {
                this.x = 0;
                this.showing = false;
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }
        },
        mounted() {
            Api.$progress = {
                start: this.start,
                done: this.done,
            };
        }
    }
</script>