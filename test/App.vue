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
            <div class="demo-list-item" @click="link('/slider')">
                <div class="demo-list-item-icon icon-slider"></div> Slider
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

    .demo-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 0;
    }

    .demo-logo {
        width: 100px;
        height: 100px;
        background: url('https://raw.githubusercontent.com/mengchen129/zmUI/master/src/assets/icon.png') no-repeat center;
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
</style>
