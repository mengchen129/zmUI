<template>
    <div class="demo-container">
        <zm-header>Hello, zmUI</zm-header>

        <button class="" @click="showToast('LENGTH_SHORT')">Show Toast (short)</button>
        <button @click="showToast()">Show Toast (normal)</button>
        <button @click="showToast('LENGTH_LONG')">Show Toast (long)</button>

        <zm-slider :list="imgList" @slider-click="onSliderClick"></zm-slider>

        <zm-toast></zm-toast>
    </div>
</template>

<script>
    import {Toast} from '../src/index';

    export default {
        data () {
            return {
                imgList: [
                    "http://img.ishequ360.com/images/test/banner1@1x.jpeg",
                    "http://img.ishequ360.com/images/test/banner6@1x.jpeg",
                    "http://img.ishequ360.com/images/test/banner3@1x.jpeg",
                    "http://img.ishequ360.com/images/test/banner4@1x.jpeg",
                    "http://img.ishequ360.com/images/test/banner5@1x.jpeg",
                ].map(url => ({url: url, href: 'http://www.baidu.com'}))
            }
        },
        methods: {
            showToast(duration) {
                this.$toast.show('Hello, toast', Toast[duration]);
            },
            onSliderClick(slider) {
                console.log(slider);
            }
        }
    }
</script>

<style>
    .demo-container {
        padding-top: 45px;
    }
</style>
