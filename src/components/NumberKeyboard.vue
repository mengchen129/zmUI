<template>
    <div>
        <transition name="zm-enter-from-bottom">
        <div class="zm-number-keyboard" v-if="show" @click.stop>
            <slot></slot>
            <table class="zm-keyboard-table">
                <tbody>
                <tr>
                    <td @click="append(1)">1</td>
                    <td @click="append(2)">2</td>
                    <td @click="append(3)">3</td>
                    <td rowspan="2" @click="backSpace" class="zm-keyboard-delete"></td>
                </tr>
                <tr>
                    <td @click="append(4)">4</td>
                    <td @click="append(5)">5</td>
                    <td @click="append(6)">6</td>
                </tr>
                <tr>
                    <td @click="append(7)">7</td>
                    <td @click="append(8)">8</td>
                    <td @click="append(9)">9</td>
                    <td rowspan="2" @click="ok" class="zm-keyboard-ok">确定</td>
                </tr>
                <tr>
                    <td @click="point">.</td>
                    <td @click="append(0)">0</td>
                    <td @click="cancel" class="zm-keyboard-cancel"></td>
                </tr>
                </tbody>
            </table>
        </div>
        </transition>

        <transition name="zm-shadow">
            <div class="zm-shadow" v-if="show" @click="cancel"></div>
        </transition>
    </div>
</template>

<script>
    import ModalBack from '../plugins/ModalBack';

    export default {
        name: 'zm-number-keyboard',
        mixins: [ModalBack],
        props: {
            maxValue: {
                type: Number,
                default: Number.MAX_VALUE,
            },
            maxDecimal: {
                type: Number,
                default: 2,
            }
        },
        data() {
            return {
                show: false,
                value: '',
            }
        },
        watch: {
            value(val) {
                this.$emit('input', val);
            }
        },
        methods: {
            open(initValue) {
                this.value = String(initValue || '');
                this.show = true;
            },
            append(number) {
                let newValue = this.value + String(number);
                if (parseFloat(newValue) > this.maxValue) {
                    this.$toast.show('最大值限制为' + this.maxValue);
                    return;
                }

                let dotIndex = newValue.indexOf('.');
                if (dotIndex >= 0 && newValue.length - 1 - dotIndex > this.maxDecimal) {
                    this.$toast.show('最大小数位为' + this.maxDecimal);
                    return;
                }

                this.value = newValue;
            },
            point() {
                if (this.value.indexOf('.') === -1) {
                    this.value += '.';
                }
            },
            backSpace() {
                if (this.value) {
                    this.value = this.value.substring(0, this.value.length - 1);
                }
            },
            hide() {
                this.show = false;
            },
            cancel() {
                this.$emit('cancel', this.value);
                this.hide();
            },
            ok() {
                this.$emit('ok', this.value);
                this.hide();
            }
        }
    }
</script>