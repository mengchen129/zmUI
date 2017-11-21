<template>
    <div class="demo-page">
        <zm-header :back="true">Modal</zm-header>

        <button class="demo-btn" @click="showAlert">Show Alert</button>
        <button class="demo-btn" @click="showConfirm">Show Confirm</button>
        <button class="demo-btn" @click="showPrompt">Show Prompt</button>

        <zm-modal></zm-modal>
    </div>
</template>

<script>
    import {Toast} from '../../src/index';

    export default {
        data() {
            return {
                
            }
        },
        methods: {
            showAlert() {
                this.$alert('这是一个 Alert 对话框', '信息', () => {
                    this.$toast().show('你点击了确定', Toast.LENGTH_SHORT);
                });
            },
            showConfirm() {
                this.$confirm('确定信息无误并提交么？', ok => {
                    this.$toast().show('你点击了' + (ok ? '确定' : '取消'), Toast.LENGTH_SHORT);
                })
            },
            showPrompt() {
                this.$prompt('输入你最擅长的兴趣爱好', value => {
                    this.$toast().show(value ? ('你输入了' + value) : '你没有输入', Toast.LENGTH_SHORT);
                });
            }
        }
    }
</script>

<style>
</style>