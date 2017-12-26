<template>
    <div class="demo-page">
        <zm-header :back="true">Suggestion</zm-header>

        <div>本地数据实时匹配</div>
        <zm-suggestion :list="sugList" placeholder="输入手机品牌关键字"
                       @keyword-change="onKeywordChange"
                       @item-selected="onItemSelected"></zm-suggestion>

        <div>你选择了：{{ selected }}</div>


        <div style="margin-top: 30px;">异步数据节流控制</div>
        <zm-suggestion :list="heroList" placeholder="输入王者荣耀英雄名称关键字"
                       item-key-name="id" item-text-name="name"
                       @keyword-change="onHeroKeywordChange"
                       @item-selected="onHeroSelected"></zm-suggestion>

        <div>你选择了：{{ selectedHero }}</div>
    </div>
</template>

<script>
    import debounce from 'lodash.debounce';
    import jsonp from 'jsonp';

    export default {
        data() {
            return {
                mobileList: ['小米(MI)', '华为(HUAWEI)', '三星(SAMSUNG)', '苹果(Apple)', 'OPPO', 'VIVO', '中兴', '酷派', '360', '魅族', '一加'],
                sugList: [],
                selected: '',
                heroList: [],
                selectedHero: null,
            }
        },
        methods: {
            onKeywordChange(keyword) {
                keyword = keyword.toUpperCase();
                this.sugList = this.mobileList.filter(item => item.indexOf(keyword) !== -1);
            },
            onItemSelected(value) {
                this.selected = value;
            },
            onHeroKeywordChange(keyword) {
                if (!keyword) {
                    this.heroList = [];
                    this.selectedHero = null;
                } else {
                    this.searchHeroData(keyword);
                }
            },
            searchHeroData: debounce(function(keyword) {
                jsonp('http://182.92.167.237:8091/search?kw=' + keyword, null, (err, data) => {
                    if (err) {
                        return;
                    }

                    this.heroList = data.list;
                });
            }, 500),
            onHeroSelected(hero) {
                this.selectedHero = hero;
            }
        }
    }
</script>

<style>
</style>