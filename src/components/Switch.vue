<template>
    <div class="zm-switch" :class="{on: value, off: !value}" @click="doSwitch">
        <div class="zm-switch-ball" :class="{on: value, off: !value}"></div>
    </div>
</template>

<script>
    export default {
        name: 'zm-switch',
        props: {
            value: {
                type: Boolean,
                default: false,
            },
            preventDefault: {       // 是否覆盖默认行为，而是 emit 事件由外层决定是否切换
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {}
        },
        mounted() {
        },
        methods: {
            doSwitch() {
                if (this.preventDefault) {
                    this.$emit('before-change', !this.value);
                } else {
                    this.$emit('input', !this.value);
                }
            }
        },
    }
</script>