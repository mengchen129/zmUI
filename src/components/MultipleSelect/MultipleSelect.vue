<template>
    <div class="zm-multiple-select">
        <transition name="zm-enter-from-right">
            <div class="zm-multiple-select-main" v-show="show">
                <zm-header back="cancel" :inline="true" v-if="title" :btn="{text: '确定', emit: 'ok'}" @ok="ok" @cancel="cancel">{{ title }}</zm-header>
                <div class="zm-multiple-select-list">
                    <div class="zm-multiple-select-item"
                         v-for="option in options"
                         :class="{selected: isSelected(option)}"
                         @click="toggleOption(option)"
                    >{{ getOptionText(option) }}</div>
                </div>
            </div>
        </transition>

        <transition name="zm-shadow">
            <div class="zm-shadow" v-show="show" @click="show = false"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'zm-multiple-select',
        props: {
            title: {
                type: String,
                default: '',
            },
            options: {
                type: Array,
                default: () => [],
            },
            textKey: {
                type: String,
                default: ''
            },
            valueKey: {
                type: String,
                default: '',
            }
        },
        data() {
            return {
                show: false,
                selectedList: [],
            }
        },
        methods: {
            open(initValues = []) {
                this.show = true;
                this.selectedList = this.options.filter(item => {
                    let value = this.valueKey ? item[this.valueKey] : item;
                    return initValues.indexOf(value) !== -1;
                });
            },
            ok() {
                this.show = false;
                this.$emit('value', JSON.parse(JSON.stringify(this.selectedList)));
            },
            cancel() {
                this.show = false;
            },
            toggleOption(option) {
                let index = this.selectedList.indexOf(option);
                if (index === -1) {
                    this.selectedList.push(option);
                } else {
                    this.selectedList.splice(index, 1);
                }
            },
            isSelected(option) {
                return this.selectedList.indexOf(option) !== -1;
            },
            getOptionText(option) {
                if (!option) return null;
                return this.textKey ? option[this.textKey] : option;
            }
        }
    }
</script>

<style lang="sass">
    @import "MultipleSelect.scss";
</style>