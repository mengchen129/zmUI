<template>
    <div class="zm-single-select">
        <transition name="zm-enter-from-bottom">
            <div class="zm-single-select-main" v-show="show">
                <div class="zm-single-select-header">
                    <div class="zm-single-select-current">{{ getOptionText(tempValue) || '请选择'}}</div>
                    <button class="zm-single-select-ok" @click="ok" :disabled="!tempValue">确定</button>
                </div>
                <div class="zm-single-select-list">
                    <div class="zm-single-select-item"
                         :class="{selected: tempValue == option}"
                         v-for="option in options"
                         @click="chooseOption(option)">
                        {{ getOptionText(option) }}
                    </div>
                </div>
            </div>
        </transition>

        <transition name="zm-shadow">
            <div class="zm-shadow" :class="{'no-transition': lowAndroidFallback}" v-show="show" @click="cancel"></div>
        </transition>
    </div>
</template>

<script>
    import ModalBack from '../plugins/ModalBack';
    import Fallback from '../plugins/Fallback';

    export default {
        name: 'zm-single-select',
        mixins: [ModalBack, Fallback],
        props: {
            options: {
                type: Array,
                default: []
            },
            textKey: {
                type: String,
                default: ''
            },
            value: {            // 通过 v-model 进行的 value 绑定，这里持有初值
                type: [String, Object],
            }
        },
        data() {
            return {
                show: false,
                tempValue: '',      // 在选择期间内临时存储当前选中的值
            }
        },
        methods: {
            open() {
                this.show = true;
                this.tempValue = this.value;        // 将初值对应的项选中
            },
            ok() {
                this.show = false;

                // 将当前选中的值 emit 出去，会被外层 v-model 语法糖中的 @input 接收从而修改掉 props.value 的值
                this.$emit('input', this.tempValue);
            },
            cancel() {
                this.show = false;
            },
            chooseOption(option) {
                this.tempValue = option;
            },
            getOptionText(option) {
                if (!option) return null;
                return this.textKey ? option[this.textKey] : option;
            }
        }
    }
</script>