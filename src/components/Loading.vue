<template>
    <transition name="zm-loading">
    <div class="zm-loading" :class="{modal: isModal}" v-show="showing">
        <div class="zm-loading-main">
            <div class="zm-loading-icon"></div>
            <div class="zm-loading-text">{{ text }}</div>
        </div>
    </div>
    </transition>
</template>

<script>
    import Api from '../plugins/GlobalApi';

    export default {
        name: 'zm-loading',
        data() {
            return {
                text: '',
                showing: false,
                isModal: false,
            }
        },
        mounted() {
            Api.loading = {
                show: this.show,
                hide: this.hide,
            };
        },
        methods: {
            show(text, isModal = false) {
                this.text = text || '加载中';
                this.isModal = isModal;
                this.showing = true;
            },
            hide() {
                this.showing = false;
            }
        }
    }
</script>
