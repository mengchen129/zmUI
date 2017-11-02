<template>
    <div>
        <transition name="zm-enter-from-bottom">
        <div class="zm-number-keyboard" v-if="showing" @click.stop>
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
            <div class="zm-shadow" v-if="showing" @click="cancel"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'zm-number-keyboard',
        props: {

        },
        data() {
            return {
                showing: false,
                value: '',
            }
        },
        watch: {
            value(val) {
                this.$emit('input', val);
            }
        },
        methods: {
            append(number) {
                this.value = this.value + String(number);
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
            show(initValue) {
                this.value = String(initValue || '');
                this.showing = true;
            },
            hide() {
                this.showing = false;
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

<style lang="sass">
    @import "NumberKeyboard.scss";
</style>