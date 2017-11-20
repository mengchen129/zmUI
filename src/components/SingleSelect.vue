<template>
    <div class="zm-single-select">
        <transition name="zm-enter-from-bottom">
            <div class="zm-single-select-main" v-show="show">
                <div class="zm-single-select-header">
                    <div class="zm-single-select-current">{{ getOptionText(selected) || '请选择'}}</div>
                    <button class="zm-single-select-ok" @click="ok" :disabled="!selected">确定</button>
                </div>
                <div class="zm-single-select-list">
                    <div class="zm-single-select-item"
                         :class="{selected: selected == option}"
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
            valueKey: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                show: false,
                selected: null,
            }
        },
        methods: {
            open(initValue) {
                this.show = true;
                let selectedArr = this.options.filter(item => {
                    let value = this.valueKey ? item[this.valueKey] : item;
                    return value == initValue;
                });

                if (selectedArr.length) {
                    this.selected = selectedArr[0];
                }
            },
            ok() {
                this.show = false;
                this.$emit('value', this.selected);
            },
            cancel() {
                this.show = false;
            },
            chooseOption(option) {
                this.selected = option;
            },
            getOptionText(option) {
                if (!option) return null;
                return this.textKey ? option[this.textKey] : option;
            }
        }
    }
</script>