<template>
    <div class="demo-page">
        <zm-header :back="true">Number Keyboard</zm-header>

        <button class="demo-btn" @click="showNumberKeyboard">打开数字键盘</button>
        <p>限制最大值为9999.99，小数位数最多2位数</p>
        <p>您的报价为：{{ number }}</p>

        <zm-number-keyboard ref="board" @input="onNumberInput" @ok="setNumber" :max-value="9999.99" :max-decimal="2">
            <div class="demo-keyboard-slot">输入您的报价：¥ <b>{{ numberTemp }}</b></div>
        </zm-number-keyboard>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                numberTemp: '',
                number: ''
            }
        },
        methods: {
            showNumberKeyboard() {
                this.$refs.board.show(this.number);
            },
            onNumberInput(number) {
                this.numberTemp = number;
            },
            setNumber(number) {
                this.number = number;
            }
        }
    }
</script>

<style>
    .demo-keyboard-slot {
        background-color: #fff;
        padding: 10px;
    }

    .demo-keyboard-slot b {
        font-size: 20px;
        color: red;
        font-weight: normal;
    }
</style>