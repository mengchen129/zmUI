<template>
    <div class="zm-suggestion">
        <input type="text" class="zm-suggestion-input" :placeholder="placeholder" v-model="keyword"
               @focus="focusing = true" @blur="focusing = false" @input="onKeywordChange">
        <div class="zm-suggestion-list" v-show="focusing && keyword">
            <div class="zm-suggestion-item" v-for="item in list" @click="chooseItem(item)" @mousedown="chooseItem(item)">{{ getItemText(item) }}</div>
            <div class="zm-suggestion-item empty" v-show="!list.length">没有查询到相关数据</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'zm-suggestion',
        props: {
            list: {
                type: Array,
                default: () => [],
            },
            itemKeyName: {
                type: String,
                default: '',
            },
            itemTextName: {
                type: String,
                default: '',
            },
            placeholder: {
                type: String,
                default: '输入关键字',
            }
        },
        data() {
            return {
                focusing: false,
                keyword: '',
            }
        },
        methods: {
            getItemText(item) {
                return this.itemTextName ? item[this.itemTextName] : item;
            },
            chooseItem(item) {
                this.keyword = this.itemTextName ? item[this.itemTextName] : item;
                this.$emit('item-selected', JSON.parse(JSON.stringify(item)));
            },
            onKeywordChange() {
                this.$emit('keyword-change', this.keyword);
            }
        }
    }
</script>