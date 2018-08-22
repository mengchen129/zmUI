<template>
    <div class="zm-image-uploader-container">
        <div class="zm-image-cube" v-for="image in value" @click="previewImage(image)" :style="{'background-image': 'url(' + image.url + ')'}">
            <div class="zm-image-cube-delete" @click.stop="deleteImage(image)"></div>
        </div>
        <div class="zm-image-cube empty" v-show="value.length < max">
            <div class="zm-image-cube-upload" @click="triggerFileClick">
                <div class="zm-upload-camera" @click.stop="triggerFileClick"></div>
                <div class="zm-upload-tip" @click.stop="triggerFileClick">{{ tip }}</div>
            </div>
        </div>
        <input type="file" ref="file" @change="fileChoose($event)" accept="image/png,image/jpg,image/jpeg" style="display: none;">
    </div>
</template>

<script>
    import ImageHandle from '../plugins/ImageHandle';

    export default {
        name: 'zm-image-uploader',
        props: {
            max: {                      // 最大上传的数量
                type: Number,
                default: 1
            },
            tip: {                      // 上传卡片文案
                type: String,
                default: '上传图片',
            },
            uploadUrl: {                // 上传 URL，必须
                type: String,
                require: true,
                validator: val => val
            },
            uploadKey: {                // 上传参数名，必须
                type: String,
                required: true,
                validator: val => val,
            },
            clipSizeLong: {             // 裁剪长边像素值
                type: [Number, String],
                default: 1280,
            },
            clipSizeShort: {            // 裁剪短边像素值
                type: [Number, String],
                default: 960,
            },
            jsonReader: {               // 上传成功后从响应数据解析出 url 部分的函数
                type: Function,
            },
            value: {                    // v-model 传入的响应式数据
                type: Array,
                default: []
            }
        },
        data() {
            return {
            }
        },
        mounted: function() {
            if ('ontouchstart' in window) {
                this.$refs.file.setAttribute('accept', 'image/*');      // 移动端需要设置为*,让安卓出现相机选项
            }
        },
        methods: {
            previewImage(image) {
                this.$emit('preview-image', image.url);
            },
            deleteImage(image) {
                this.$confirm('确定删除这张照片么?', (ok) => {
                    if (ok) {
                        this.value.splice(this.value.indexOf(image), 1);
                    }
                });
            },
            triggerFileClick() {
                this.$refs.file.click();
            },
            fileChoose(event) {
                if (event.target.value) {
                    let file = event.target.files[0];

                    new ImageHandle({
                        file: file,
                        uploadUrl: this.uploadUrl,
                        uploadKey: this.uploadKey,
                        clipSizeLong: parseInt(this.clipSizeLong),
                        clipSizeShort: parseInt(this.clipSizeShort),
                        jsonReader: this.jsonReader,
                        finishCallback: data => {
                            this.value.push({url: data});
                        }
                    }).doAll();
                }
            }
        }
    }
</script>