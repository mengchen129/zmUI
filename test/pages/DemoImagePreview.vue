<template>
    <div class="demo-page">
        <zm-header :back="true">Image Preview</zm-header>

        <button class="demo-btn" @click="previewImage(0)">预览图片1</button>
        <button class="demo-btn" @click="previewImage(1)">预览图片2</button>

        <zm-image-preview ref="imagePreview"></zm-image-preview>
    </div>
</template>

<script>
    const IMAGE_URLS = [
        'https://raw.githubusercontent.com/mengchen129/mengchen129.github.io/master/images/cookie.jpg',
        'https://mengchen129.github.io/vue-modal/cake.jpg'
    ];

    export default {
        data() {
            return {
                
            }
        },
        methods: {
            previewImage(index) {
                this.$refs.imagePreview.previewImage(IMAGE_URLS[index]);
            }
        }
    }
</script>

<style>
</style>