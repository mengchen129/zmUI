<template>
    <div class="demo-page">
        <zm-header :back="true">Toast</zm-header>

        <button class="demo-btn" @click="showToast('LENGTH_SHORT')">展示 Toast (1s)</button>
        <button class="demo-btn" @click="showToast('LENGTH_NORMAL')">展示 Toast (3s 默认)</button>
        <button class="demo-btn" @click="showToast('LENGTH_LONG')">展示 Toast (5s)</button>
        <button class="demo-btn" @click="showToastWithIcon">展示包含 Icon 的 Toast</button>
        <button class="demo-btn" @click="showToastByThis">this 触发</button>
        <button class="demo-btn" @click="showToastByVue">Vue 触发</button>

    </div>
</template>

<script>
    import {Toast} from '../../src/index';
    import Vue from 'vue';


    export default {
        data() {
            return {
                
            }
        },
        methods: {
            showToast(duration) {
                this.$toast().show(`Hello, World (${Toast[duration]}毫秒后消失)`, Toast[duration]);
            },
            showToastByThis() {
                this.$toast().show('通过 this.$toast() 触发');
            },
            showToastByVue() {
                Vue.$toast().show('通过 Vue.$toast() 触发');
            },
            showToastWithIcon() {
                this.$toast().show('手机号输入错误', Toast.LENGTH_NORMAL, true);
            }
        }
    }
</script>

<style>
</style>