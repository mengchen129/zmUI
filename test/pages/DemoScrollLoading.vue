<template>
    <div class="demo-page no-lr-padding" ref="demoPage">
        <zm-header :back="true">Scroll Loading</zm-header>

        <div class="demo-news-list">
            <div class="demo-news-item" v-for="item in list">
                <img :src="item.image" alt="" class="demo-news-image">
                <div class="demo-new-main">
                    <div class="demo-news-title">{{ item.title }}</div>
                    <div class="demo-news-sub">{{ item.sub }}</div>
                </div>
            </div>
        </div>

        <zm-scroll-loading ref="scrollLoading"></zm-scroll-loading>
    </div>
</template>

<script>
    import jsonp from 'jsonp';

    export default {
        data() {
            return {
                list: [],
                page: 0,
                hasMore: false,
            }
        },
        methods: {
            loadNewsData(append, callback) {
                if (append && !this.hasMore) {
                    this.$toast().show('已经到底啦', 1000);
                    callback && callback();
                    return;
                }

                if (!append) {
                    this.page = 0;
                }

                this.page ++;

                jsonp('http://182.92.167.237:8090/list?p=' + this.page, null, (err, data) => {
                    if (err) {
                        callback && callback();
                        return;
                    }

                    if (append) {
                        data.list.forEach(item => this.list.push(item));
                        this.$toast().show('加载下一页，当前条目数量 ' + this.list.length, 1500);
                    } else {
                        this.list = data.list;
                    }

                    this.hasMore = data.hasMore;

                    callback && callback();
                });
            }
        },
        mounted() {
            this.$refs.scrollLoading.bindElement(this.$refs.demoPage, () => {
                return new Promise((resolve, reject) => {
                    this.loadNewsData(true, resolve);
                });
            });

            this.loadNewsData();
        }
    }
</script>

<style>

</style>