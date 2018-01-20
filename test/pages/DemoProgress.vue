<template>
    <div class="demo-page">
        <zm-header :back="true" :transparent="true">Progress</zm-header>

        <p>路由切换时，页面顶部出现虚拟进度条，颜色为主题色。点击 Start 和 Done 按钮可以控制进度条开始和结束</p>

        <button class="demo-btn" @click="start">Start</button>
        <button class="demo-btn" @click="done">Done</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            start() {
                this.$progress().start();
            },
            done() {
                this.$progress().done();
            }
        }
    }
</script>

<style>
</style>