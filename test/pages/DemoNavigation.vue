<template>
    <div class="demo-page no-lr-padding">
        <zm-header :back="true">Navigation</zm-header>

        <div class="demo-navigation-parent">
            <zm-navigation :list="navList" :height="40" @change="onNav1Choose"></zm-navigation>
        </div>
        <p>你选择了：{{ selectedNav }}</p>

        <div class="demo-navigation-parent">
            <zm-navigation :list="navList2" :item-flex="true" @change="onNav2Choose"></zm-navigation>
        </div>
        <p>你选择了：{{ selectedNav2 }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navList: [
                    { main: '收入' },
                    { main: '支出' }
                ],
                navList2: [
                    { main: '定期收益', sub: '250.00元', type: 1 },
                    { main: '活期收益', sub: '18.94元', type: 2 },
                    { main: '基金收益', sub: '869.32元', type: 3 },
                ],
                selectedNav: null,
                selectedNav2: null
            }
        },
        methods: {
            onNav1Choose(nav) {
                this.selectedNav = nav;
            },
            onNav2Choose(nav) {
                this.selectedNav2 = nav;
            }
        }
    }
</script>

<style>
</style>