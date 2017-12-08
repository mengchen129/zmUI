<template>
    <div class="demo-page no-lr-padding" ref="demoPage">
        <zm-header :back="true">PullDown</zm-header>

        <div class="pull-down-tip" v-if="!list.length">下拉刷新加载新闻列表</div>

        <div class="demo-news-list" v-if="list.length">
            <div class="demo-news-item" v-for="item in list">
                <img :src="item.image" alt="" class="demo-news-image">
                <div class="demo-new-main">
                    <div class="demo-news-title">{{ item.title }}</div>
                    <div class="demo-news-sub">{{ item.sub }}</div>
                </div>
            </div>
        </div>

        <zm-pulldown ref="pullDown"></zm-pulldown>
    </div>
</template>

<script>
    import jsonp from 'jsonp';

    export default {
        data() {
            return {
                list: []
            }
        },
        methods: {
            loadNewsData(callback) {
                this.list = [];
                jsonp('http://182.92.167.237:8090/list', null, (err, data) => {
                    if (err) {
                        callback && callback();
                        return;
                    }

                    this.list = data.list;

                    callback && callback();
                });
            }
        },
        mounted() {
            this.$refs.pullDown.bindElement(this.$refs.demoPage, () => {
                return new Promise((resolve, reject) => {
                    this.loadNewsData(resolve);
                });
            });
        }
    }
</script>

<style>
    .pull-down-tip {
        text-align: center;
        padding: 10px 0;
    }
</style>