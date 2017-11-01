<template>
    <div class="zm-header">
        <div class="zm-header-back" @click="headerBack"></div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'zm-header',
        data() {
            return {
                
            }
        },
        methods: {
            headerBack() {
                history.back();
            }
        }
    }
</script>

<style lang="sass">
    @import "Header.scss";
</style>