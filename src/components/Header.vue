<template>
    <div class="zm-header" :class="{inline: inline, transparent: transparent}">
        <div class="zm-header-back" v-if="back" @click="headerBack"></div>
        <div class="zm-header-btn" v-if="btn" @click="$emit(btn.emit)">{{ btn.text }}</div>
        <div class="zm-header-btn left" v-if="leftBtn" @click="$emit(leftBtn.emit)">{{ leftBtn.text }}</div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'zm-header',
        props: {
            back: {
                type: [Boolean, String],
                default: undefined,
            },
            inline: {
                type: Boolean,
                default: false,
            },
            btn: {
                type: Object,
                default: null
            },
            leftBtn: {
                type: Object,
                default: null,
            },
            transparent: {
                type: Boolean,
                default: false,
            }
        },

        data() {
            return {
                
            }
        },
        methods: {
            headerBack() {
                if (typeof this.back === 'boolean') {
                    history.back();
                } else if (typeof this.back === 'string') {
                    this.$emit(this.back);
                }
            }
        }
    }
</script>