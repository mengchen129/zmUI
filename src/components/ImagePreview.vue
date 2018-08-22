<template>
    <transition name="zm-shadow">
        <div class="zm-shadow image-preview" v-show="show" @click="closePreview">
            <img :src="url" class="zm-preview-image" alt="">
        </div>
    </transition>
</template>

<script>
    import ModalBack from '../plugins/ModalBack';

    export default {
        name: "zm-image-preview",
        mixins: [ModalBack],
        data() {
            return {
                show: false,
                url: ''
            }
        },
        methods: {
            previewImage(url) {
                this.show = true;
                this.url = url;
            },
            closePreview() {
                this.show = false;
            }
        }
    }
</script>