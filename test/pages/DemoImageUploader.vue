<template>
    <div class="demo-page">
        <zm-header :back="true">Image Uploader</zm-header>

        <div style="margin-bottom: 10px;">最多可以上传 {{ maxImageCount }} 张照片</div>
        <zm-image-uploader
                v-model="images"
                :ajax-obj-get-func="ajaxObjGetFunc"
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
    import axios from 'axios';
    import qs from 'qs';

    export default {
        data() {
            return {
                maxImageCount: 5,
                images: []
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
            ajaxObjGetFunc() {
                return {
                    axios,
                    qs,
                }
            }
        }
    }
</script>