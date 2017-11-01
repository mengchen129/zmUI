<template>
    <div class="demo-page">
        <zm-header>Number Keyboard</zm-header>

        <button class="demo-btn" @click="showNumberKeyboard">打开数字键盘</button>
        <p>您的报价为：{{ number }}</p>

        <zm-number-keyboard ref="board" @input="onNumberInput" @ok="setNumber">
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