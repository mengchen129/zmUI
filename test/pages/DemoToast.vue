<template>
    <div class="demo-page">
        <zm-header :back="true">Toast</zm-header>

        <button class="demo-btn" @click="showToast('LENGTH_SHORT')">展示 Toast (1s)</button>
        <button class="demo-btn" @click="showToast()">展示 Toast (3s 默认)</button>
        <button class="demo-btn" @click="showToast('LENGTH_LONG')">展示 Toast (5s)</button>

    </div>
</template>

<script>
    import {Toast} from '../../src/index';


    export default {
        data() {
            return {
                
            }
        },
        methods: {
            showToast(duration) {
                this.$toast().show('Hello, World', Toast[duration]);
            },
        }
    }
</script>

<style>
</style>