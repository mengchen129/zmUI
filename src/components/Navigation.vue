<template>
    <div class="zm-navigation" :style="{height: height + 'px'}">
        <div class="zm-navigation-item-wrap" v-for="item in list" @click="chooseItem(item)">
            <div class="zm-navigation-item" :class="{flex: itemFlex, selected: selected == item}">
                <div>{{ item.main }}</div>
                <div v-if="item.sub != null">{{ item.sub }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'zm-navigation',
        props: {
            list: {             // 导航列表项集合 {main, sub}
                type: Array,
                default: []
            },
            defaultIndex: {     // 初始选中项的下标
                type: Number,
                default: 0,
            },
            itemFlex: {         // 项是否自动扩展（扩展后选中状态的底部线条将是flex-item的宽度，而不是内容区域的宽度）
                type: Boolean,
                default: false,
            },
            height: {           // 导航栏高度，单位 px
                type: Number,
                default: 60,
            }
        },
        data() {
            return {
                selected: null,
            }
        },
        methods: {
            chooseItem(item) {
                this.selected = item;
                this.$emit('change', JSON.parse(JSON.stringify(this.selected)));
            }
        },
        mounted() {
            this.selected = this.list[this.defaultIndex];
        }
    }
</script>