<template>
    <div class="zm-header" :class="{inline: inline}">
        <div class="zm-header-back" v-if="back" @click="headerBack"></div>
        <div class="zm-header-btn" v-if="btn" @click="$emit(btn.emit)">{{ btn.text }}</div>
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

<style lang="sass">
    @import "Header.scss";
</style>