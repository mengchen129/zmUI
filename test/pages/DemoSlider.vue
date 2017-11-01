<template>
    <div class="demo-page no-lr-padding">
        <zm-header>Slider</zm-header>

        <zm-slider :list="imgList" :auto="2000"></zm-slider>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList: [
                    "https://raw.githubusercontent.com/mengchen129/zmUI/master/src/assets/demo/slider-imgs/img1.jpeg",
                    "https://raw.githubusercontent.com/mengchen129/zmUI/master/src/assets/demo/slider-imgs/img2.jpeg",
                    "https://raw.githubusercontent.com/mengchen129/zmUI/master/src/assets/demo/slider-imgs/img3.jpeg",
                    "https://raw.githubusercontent.com/mengchen129/zmUI/master/src/assets/demo/slider-imgs/img4.jpeg",
                    "https://raw.githubusercontent.com/mengchen129/zmUI/master/src/assets/demo/slider-imgs/img5.jpeg",
                ].map(url => ({url: url, href: 'http://m.baidu.com'})),
            }
        }
    }
</script>

<style>
</style>