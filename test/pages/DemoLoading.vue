<template>
    <div class="demo-page">
        <zm-header :back="true">Loading</zm-header>

        <button class="demo-btn" @click="showLoading">展示 Loading</button>
        <button class="demo-btn" @click="hideLoading">隐藏 Loading</button>
        <button class="demo-btn" @click="showLoadingModal">展示 Loading(模态,2秒后自动关闭)</button>

        <zm-loading></zm-loading>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            showLoading() {
                this.$loading().show();
            },
            showLoadingModal() {
                this.$loading().show('提交中', true);
                setTimeout(() => {
                    this.hideLoading();
                }, 2000);
            },
            hideLoading() {
                this.$loading().hide();
            },
        }
    }
</script>

<style>
</style>