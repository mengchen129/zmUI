<template>
    <div class="demo-page">
        <zm-header :back="true">Multiple Select</zm-header>

        <p>你选择了：{{ selectedList }}</p>
        <p><button class="demo-btn" @click="showCategorySelect">选择商品分类</button></p>

        <zm-multiple-select ref="categorySelect" title="选择分类" :options="categoryList"
                            text-key="name" value-key="id" @value="onCategoryChange"></zm-multiple-select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                categoryList: [
                    { id: 1, name: '饮料酒水' },
                    { id: 2, name: '水果干果' },
                    { id: 3, name: '方便速食' },
                    { id: 4, name: '饼干面包' },
                ],
                selectedList: []
            }
        },
        methods: {
            showCategorySelect() {
                this.$refs.categorySelect.open(this.selectedList.map(i => i.id));
            },
            onCategoryChange(value) {
                this.selectedList = value;
            },
        }
    }
</script>

<style>
</style>