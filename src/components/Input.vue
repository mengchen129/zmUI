<template>
    <div class="zm-input" :class="{'with-more': isTypeSelect}" @click="openSelect">
        <div><slot></slot></div>
        <input type="text" class="zm-input-content"
               v-if="type == 'input'"
               :placeholder="placeholder"
               :maxlength="maxLength"
               @input="onInputChange"
               :value="value"
        >
        <div class="zm-input-content" :class="{placeholder: !value}" v-if="isTypeSelect">{{ valueShow || placeholder }}</div>

        <!-- 支持在 Input 组件中内置 Select 组件 -->
        <zm-single-select v-if="isTypeSelect && options && options.length"
                          ref="inputSelect" :options="options" :text-key="textKey"
                          :value="tempValue" @input="onSelectChange"
                          @click.native.stop
        ></zm-single-select>
    </div>
</template>

<script>
    export default {
        name: 'zm-input',
        props: {
            value: {
                type: [String, Object]
            },
            type: {
                type: String,
                default: 'input'
            },
            placeholder: {
                type: String,
                default: '',
            },
            maxLength: {
                type: Number,
                default: 10000,
            },
            options: {
                type: Array,
                default: () => [],
            },
            textKey: {
                type: String,
                default: '',
            }
        },
        data() {
            return {
                tempValue: null,
            }
        },
        computed: {
            isTypeSelect() {
                return this.type === 'select';
            },
            valueShow() {
                return (this.textKey && this.value) ? this.value[this.textKey] : this.value;
            }
        },
        methods: {
            onInputChange(e) {
                let value = e.target.value;
                this.$emit('input', value);
            },
            onSelectChange(val) {
                this.tempValue = val;
                this.$emit('input', this.tempValue);
            },
            openSelect() {
                if (!this.isTypeSelect) return;

                if (this.options && this.options.length) {
                    this.tempValue = this.value;
                    this.$refs.inputSelect.open();
                }
            }
        }
    }
</script>