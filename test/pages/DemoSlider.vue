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
                    "//img.ishequ360.com/images/test/banner1@1x.jpeg",
                    "//img.ishequ360.com/images/test/banner6@1x.jpeg",
                    "//img.ishequ360.com/images/test/banner3@1x.jpeg",
                    "//img.ishequ360.com/images/test/banner4@1x.jpeg",
                    "//img.ishequ360.com/images/test/banner5@1x.jpeg",
                ].map(url => ({url: url, href: 'http://m.baidu.com'})),
            }
        }
    }
</script>

<style>
</style>