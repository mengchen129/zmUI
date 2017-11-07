<template>
    <div class="demo-page">
        <zm-header :back="true">Header</zm-header>

        <p>右侧有自定义按钮</p>
        <zm-header :inline="true" :btn="{text: '确定', emit: 'ok'}" @ok="onHeaderOk">Button at right</zm-header>

        <p>左右两侧都有自定义按钮</p>
        <zm-header :inline="true" :btn="{text: '确定', emit: 'ok'}" @ok="onHeaderOk" :left-btn="{text: '返回', emit: 'back'}" @back="onHeaderBack">Button at both</zm-header>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            onHeaderOk() {
                alert('你点了确定');
            },
            onHeaderBack() {
                history.back();
            }
        }
    }
</script>

<style>
</style>