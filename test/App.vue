<template>
    <div class="demo-container">
        <zm-header>Hello, zmUI</zm-header>

        <button class="" @click="showToast('LENGTH_SHORT')">Show Toast (short)</button>
        <button @click="showToast()">Show Toast (normal)</button>
        <button @click="showToast('LENGTH_LONG')">Show Toast (long)</button>


        <zm-toast></zm-toast>
    </div>
</template>

<script>
    import {Toast} from '../src/index';

    export default {
        data () {
            return {
            }
        },
        methods: {
            showToast(duration) {
                this.$toast.show('Hello, toast', Toast[duration]);
            }
        }
    }
</script>

<style>
    .demo-container {
        padding-top: 45px;
    }
</style>
