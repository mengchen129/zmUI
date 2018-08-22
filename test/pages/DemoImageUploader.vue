<template>
    <div class="demo-page">
        <zm-header :back="true">Image Uploader</zm-header>

        <div style="margin-bottom: 10px;">最多可以上传 {{ maxImageCount }} 张照片</div>
        <zm-image-uploader
                ref="imageUploader"
                v-model="images"
                :max="maxImageCount"
                tip="上传照片"
                upload-url="http://test.api.shop.zhimazg.com/home/upload_img"
                upload-key="img_data"
                clip-size-long="100"
                clip-size-short="100"
                :json-reader="jsonReader"
                @preview-image="previewImage"
        ></zm-image-uploader>

        <div>已选图片：{{ images }}</div>

        <zm-image-preview ref="imagePreview"></zm-image-preview>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                maxImageCount: 5,
                images: [/*{
                    url: 'http://img.ishequ360.com/180822/7f0a9937c8f1816a080cd1e77370dc1a.jpg',
                },{
                    url: 'http://img.ishequ360.com/180822/141b9507b96c7aa22412f27e44d2e5a3.jpg',
                },{
                    url: 'http://img.ishequ360.com/180822/141b9507b96c7aa22412f27e44d2e5a3.jpg',
                },{
                    url: 'http://img.ishequ360.com/180822/141b9507b96c7aa22412f27e44d2e5a3.jpg',
                },{
                    url: 'http://img.ishequ360.com/180822/141b9507b96c7aa22412f27e44d2e5a3.jpg',
                }*/]
            }
        },
        methods: {
            jsonReader(data) {
                data = data.data;
                return data.prefix + data.uri;
            },
            previewImage(url) {
                this.$refs.imagePreview.previewImage(url);
            },
        }
    }
</script>