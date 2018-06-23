<template>
    <div class="demo-page">
        <zm-header :back="true">Modal</zm-header>

        <button class="demo-btn" @click="showAlert">Show Alert</button>
        <button class="demo-btn" @click="showConfirm">Show Confirm</button>
        <button class="demo-btn" @click="showPrompt">Show Prompt</button>
        <button class="demo-btn" @click="showAlertWithSlot1">Show Alert With Images</button>
        <button class="demo-btn" @click="showAlertWithSlot2">Show Alert With Forms</button>

        <div>{{ formJsonData }}</div>
    </div>
</template>

<script>
    import {Toast} from '../../src/index';
    import { modalFormData } from '../GlobalData';

    export default {
        data() {
            return {
                formJsonData: ''
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
            },
            showAlertWithSlot1() {
                this.$alert({slot: 'fighting'}, '加油');
            },
            showAlertWithSlot2() {
                this.$confirm({slot: 'survey'}, '调查', ok => {
                    if (!ok) return;

                    this.formJsonData = JSON.stringify(modalFormData);
                });
            }
        }
    }
</script>

<style>
</style>