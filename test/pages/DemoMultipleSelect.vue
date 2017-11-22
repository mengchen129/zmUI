<template>
    <div class="demo-page">
        <zm-header :back="true">Multiple Select</zm-header>

        <p>你选择了：{{ selectedList }}</p>
        <p><button class="demo-btn" @click="showCategorySelect">选择商品分类(最多3项)</button></p>
        <p><label class="demo-checkbox"><input type="checkbox" v-model="readonly"> 只读</label></p>

        <zm-multiple-select
                ref="categorySelect"
                title="选择分类"
                :options="categoryList"
                :max-selected="3"
                :readonly="readonly"
                text-key="name"
                value-key="id"
                @value="onCategoryChange"
        ></zm-multiple-select>

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
                    { id: 4, name: '面包点心' },
                    { id: 5, name: '日用百货' },
                    { id: 6, name: '护肤用品' },
                    { id: 7, name: 'Item 1' },
                    { id: 8, name: 'Item 2' },
                    { id: 9, name: 'Item 3' },
                    { id: 10, name: 'Item 4' },
                    { id: 11, name: 'Item 5' },
                    { id: 12, name: 'Item 6' },
                    { id: 13, name: 'Item 7' },
                    { id: 14, name: 'Item 8' },
                    { id: 15, name: 'Item 9' },
                    { id: 16, name: 'Item 10' },
                    { id: 17, name: 'Item 11' },
                    { id: 18, name: 'Item 12' },
                    { id: 19, name: 'Item 13' },
                ],
                selectedList: [],
                readonly: false,
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