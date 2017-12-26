<template>
    <div>
        <div class="demo-nav">
            <div class="demo-logo"></div>
            <div class="demo-title">zmUI demos</div>
        </div>

        <div class="demo-list">
            <div class="demo-list-item" @click="link('/theme')">
                <div class="demo-list-item-icon icon-theme"></div> Switch Theme
            </div>
        </div>

        <div class="demo-list">
            <div class="demo-list-item" @click="link('/header')">
                <div class="demo-list-item-icon icon-header"></div> Header
            </div>
            <div class="demo-list-item" @click="link('/toast')">
                <div class="demo-list-item-icon icon-toast"></div> Toast
            </div>
            <div class="demo-list-item" @click="link('/loading')">
                <div class="demo-list-item-icon icon-loading"></div> Loading
            </div>
            <div class="demo-list-item" @click="link('/carousel')">
                <div class="demo-list-item-icon icon-slider"></div> Carousel
            </div>
            <div class="demo-list-item" @click="link('/keyboard')">
                <div class="demo-list-item-icon icon-keyboard"></div> Number Keyboard
            </div>
            <div class="demo-list-item" @click="link('/single-select')">
                <div class="demo-list-item-icon icon-single"></div> Single Select
            </div>
            <div class="demo-list-item" @click="link('/multiple-select')">
                <div class="demo-list-item-icon icon-multiple"></div> Multiple Select
            </div>
            <div class="demo-list-item" @click="link('/district-select')">
                <div class="demo-list-item-icon icon-district"></div> District Select
            </div>
            <div class="demo-list-item" @click="link('/navigation')">
                <div class="demo-list-item-icon icon-navigation"></div> Navigation
            </div>
            <div class="demo-list-item" @click="link('/modal')">
                <div class="demo-list-item-icon icon-modal"></div> Modal
            </div>
            <div class="demo-list-item" @click="link('/pulldown')">
                <div class="demo-list-item-icon icon-pulldown"></div> Pull Down
            </div>
            <div class="demo-list-item" @click="link('/scroll-loading')">
                <div class="demo-list-item-icon icon-scroll-loading"></div> Scroll Loading
            </div>
            <div class="demo-list-item" @click="link('/input')">
                <div class="demo-list-item-icon icon-input"></div> Input
            </div>
            <div class="demo-list-item" @click="link('/suggestion')">
                <div class="demo-list-item-icon icon-suggestion"></div> Suggestion
            </div>
        </div>

        <zm-toast></zm-toast>

        <router-view></router-view>
    </div>
</template>

<script>
    import {Toast} from '../src/index';

    export default {
        data () {
            return {
            }
        },
        methods: {
            link(path) {
                this.$router.push(path);
            }
        }
    }
</script>

<style>
    .demo-page {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        padding: 55px 10px 10px 10px;
        background-color: #fff;
        overflow: auto;
        z-index: 10;
    }

    .demo-page.no-lr-padding {
        padding-left: 0;
        padding-right: 0;
    }

    .demo-page.bg-gray {
        background-color: #f6f6f6;
    }

    .demo-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 0;
    }

    .demo-logo {
        width: 100px;
        height: 100px;
        background: url('../src/assets/icon.png') no-repeat center;
        background-size: contain;
    }

    .demo-title {
        font-size: 32px;
        color: #33c298;
        text-align: center;
        margin-top: 20px;
    }

    .demo-list {
        background-color: #fff;
        color: #333;
        border-top: 1px solid #d8d8d8;
        margin-bottom: 20px;
    }

    .demo-list-item {
        height: 50px;
        font-size: 16px;
        padding-left: 10px;
        border-bottom: 1px solid #d8d8d8;
        display: flex;
        align-items: center;
        background: url('../src/assets/demo/icon-arrow-right.png') no-repeat right 10px center;
        background-size: 16px 16px;
    }

    .demo-list-item-icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    .icon-header {
        background-image: url('../src/assets/demo/icon-header.png');
    }

    .icon-toast {
        background-image: url('../src/assets/demo/icon-toast.png');
    }

    .icon-loading {
        background-image: url('../src/assets/demo/icon-loading.png');
    }

    .icon-slider {
        background-image: url('../src/assets/demo/icon-slider.png');
    }

    .icon-keyboard {
        background-image: url('../src/assets/demo/icon-keyboard.png');
    }

    .icon-single {
        background-image: url('../src/assets/demo/icon-single.png');
    }

    .icon-multiple {
        background-image: url('../src/assets/demo/icon-multiple.png');
    }

    .icon-theme {
        background-image: url('../src/assets/demo/icon-theme.png');
    }

    .icon-district {
        background-image: url('../src/assets/demo/icon-district.png');
    }

    .icon-navigation {
        background-image: url('../src/assets/demo/icon-navigation.png');
    }

    .icon-modal {
        background-image: url('../src/assets/demo/icon-modal.png');
    }

    .icon-pulldown {
        background-image: url('../src/assets/demo/icon-pulldown.png');
    }

    .icon-scroll-loading {
        background-image: url('../src/assets/demo/icon-scroll-loading.png');
    }

    .icon-input {
        background-image: url('../src/assets/demo/icon-input.png');
    }

    .icon-suggestion {
        background-image: url('../src/assets/demo/icon-suggestion.png');
    }

    .demo-btn {
        padding: 10px 20px;
        display: block;
        margin-bottom: 10px;
        color: #333;
        font-size: 14px;
        border: 1px solid #999;
        background-color: #f8f8f8;
        outline: none;
    }

    .demo-btn:active {
        background-color: #d8d8d8;
    }

    .demo-checkbox {
        font-size: 14px;
    }

    .demo-checkbox input {
        vertical-align: middle;
    }

    .demo-navigation-parent {
        background-color: #f6f6f6;
        margin-top: 10px;
    }

    .demo-ul li {
        padding: 10px 0;
    }

    .demo-news-list {
        margin-top: -5px;
    }

    .demo-news-item {
        display: flex;
        padding: 5px;
        border-bottom: 1px solid #eeeeee;
    }

    .demo-news-item:active {
        background-color: #f6f6f6;
    }

    .demo-news-image {
        flex-shrink: 0;
        width: 120px;
        height: 90px;
    }

    .demo-new-main {
        flex: auto;
        padding-left: 10px;
    }

    .demo-news-title {
        font-size: 16px;
        color: #333;
    }

    .demo-news-sub {
        font-size: 12px;
        color: #999;
        margin-top: 5px;
    }

    .demo-flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
