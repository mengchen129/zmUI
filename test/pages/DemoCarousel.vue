<template>
    <div class="demo-page no-lr-padding">
        <zm-header :back="true">Carousel</zm-header>

        <zm-carousel :list="imgList" :auto="2000" @carousel-click="onCarouselClick"></zm-carousel>
        <div style="padding: 10px;">
            <p>同时支持PC鼠标和移动手势的滑动操作，支持滑动灵敏度配置</p>
            <p>支持无缝滚动</p>
            <p>PS：点击第1/3/5张图片跳转链接；点击第2/4张弹出alert</p>
            <p>当滑动方向倾向上下时，触发默认滚动行为，而不触发左右轮播</p>
            <div>
                <ul class="demo-ul">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                    <li>Item 11</li>
                    <li>Item 12</li>
                    <li>Item 13</li>
                    <li>Item 14</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList: []
            }
        },
        methods: {
            onCarouselClick(item) {
                alert('你点击了第' + item.index + '张图片');
            }
        },
        mounted() {
            setTimeout(() => {
                this.imgList = [
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
                })
            }, 500);
        }
    }
</script>

<style>
</style>