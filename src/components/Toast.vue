<template>
    <transition name="zm-toast">
        <div class="zm-toast" v-show="showing">
            <div class="zm-toast-text">{{text}}</div>
        </div>
    </transition>
</template>

<script>
    import Api from '../plugins/GlobalApi';

    export default {

        LENGTH_SHORT: 1000,
        LENGTH_NORMAL: 3000,
        LENGTH_LONG: 5000,

        name: 'zm-toast',
        data() {
            return {
                text: '',
                showing: false,
                timer: null
            };
        },
        mounted: function() {
            Api.toast = {
                show: this.show
            };
        },
        methods: {
            show: function(text, duration) {
                this.text = text;
                this.showing = true;
                if (this.timer) {
                    clearInterval(this.timer);
                }
                this.timer = setTimeout(() => {
                    this.showing = false;
                }, duration || this.$options.LENGTH_NORMAL);
            }
        },
    }
</script>