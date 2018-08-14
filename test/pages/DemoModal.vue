<template>
    <div class="demo-page">
        <zm-header :back="true">Modal</zm-header>

        <button class="demo-btn" @click="showAlert">Show Alert</button>
        <button class="demo-btn" @click="showAlertNoTitle">Show Alert Without Title</button>
        <button class="demo-btn" @click="showAlertCustomize">Show Alert With Customize Buttons</button>
        <button class="demo-btn" @click="showAlertCustomizeStyle">Show Alert With Styled Messages</button>
        <button class="demo-btn" @click="showAlertHtml">Show Alert With HTML Tags</button>
        <button class="demo-btn" @click="showConfirm">Show Confirm</button>
        <button class="demo-btn" @click="showConfirmCustomize">Show Confirm With Customize Buttons</button>
        <button class="demo-btn" @click="showPrompt">Show Prompt</button>
        <button class="demo-btn" @click="showPromptNumber">Show Prompt With Number Type</button>
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
            showAlertNoTitle() {
                this.$alert('这是一个无标题的 Alert 对话框', '', () => {
                    this.$toast().show('你点击了确定', Toast.LENGTH_SHORT);
                });
            },
            showAlertCustomize() {
                this.$alert('这个对话框的确认按钮文字、标题都改变了', '改变标题样式', () => {}, {
                    okBtnText: '朕知道了',
                    titleColor: '#ff0000',
                    titleFontSize: '20px',
                });
            },
            showAlertCustomizeStyle() {
                this.$alert('我的颜色和大小变了，快夸我', '改变正文样式', () => {}, {
                    messageColor: '#999',
                    messageFontSize: '18px',
                    okBtnText: '朕知道了'
                });
            },
            showAlertHtml() {
                this.$alert('如果你愿意一层一层一层的剥开我的心 <br> 你会发现 <br> 你会讶异 <br> 你是我最压抑最深处的秘密', '洋葱 - 杨宗纬', () => {}, {
                    messageAsHtml: true
                });
            },
            showConfirm() {
                this.$confirm('确定信息无误并提交么？', ok => {
                    this.$toast().show('你点击了' + (ok ? '确定' : '取消'), Toast.LENGTH_SHORT);
                })
            },
            showConfirmCustomize() {
                this.$confirm('你遇到了困难，你将如何决定？', '选择', ok => {
                    if (ok) {
                        this.$toast().show('加油！阳光总在风雨后');
                    } else {
                        this.$toast().show('适时放弃并另寻方法也是一种选择');
                    }
                }, { okBtnText: '坚持', cancelBtnText: '放弃', cancelBtnColor: '#ff0000' });
            },
            showPrompt() {
                this.$prompt('输入你最擅长的兴趣爱好', value => {
                    this.$toast().show(value ? ('你输入了' + value) : '你没有输入', Toast.LENGTH_SHORT);
                });
            },
            showPromptNumber() {
                this.$prompt('输入你的税前月工资', ok => {
                    this.$toast().show(ok ? '土豪，我们做朋友吧' : '加油，你以后肯定会挣大钱');
                }, { inputType: 'number', okBtnText: '计算税后收入' });
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