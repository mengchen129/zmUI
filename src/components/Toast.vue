<template>
    <transition name="zm-toast">
        <div class="zm-toast" :class="{'with-icon': withIcon}" v-show="showing">
            <div class="zm-toast-wrap">
                <div class="zm-toast-icon" v-show="withIcon"></div>
                <div class="zm-toast-text">{{ text }}</div>
            </div>
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
                withIcon: false,
                timer: null
            };
        },
        mounted: function() {
            Api.toast = {
                show: this.show
            };
        },
        methods: {
            show: function(text, duration, withIcon) {
                this.text = text;
                this.withIcon = withIcon;
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