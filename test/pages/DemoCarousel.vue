<template>
    <div class="demo-page no-lr-padding">
        <zm-header :back="true">Carousel</zm-header>

        <zm-carousel :list="imgList" :auto="2000" @carousel-click="onCarouselClick"></zm-carousel>
        <div style="padding: 10px;">
            <p>同时支持PC鼠标和移动手势的滑动操作，支持滑动灵敏度配置</p>
            <p>PS：点击第1/3/5张图片跳转链接；点击第2/4张弹出alert</p>
        </div>
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
                ].map((url, index) => {
                    if (index % 2 === 0) {
                        return {url: url, href: 'http://m.baidu.com'};
                    } else {
                        return {url: url, index: index + 1};
                    }
                }),
            }
        },
        methods: {
            onCarouselClick(item) {
                alert('你点击了第' + item.index + '张图片');
            }
        }
    }
</script>

<style>
</style>