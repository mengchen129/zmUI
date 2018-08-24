/**
 * Ajax全局拦截器配置
 * @param axios - axios
 */
import Vue from 'vue';

/**
 * 配置拦截器，在请求前后显示/隐藏 Loading 提示
 * @param axios
 * @param exceptUrls - 排除的 URL 集合
 */
export default function(axios, exceptUrls = []) {

    /* axios 全局拦截器 - 请求 */
    axios.interceptors.request.use(function (config) {
        console.log(config);

        for (let i = 0; i < exceptUrls.length; i++) {
            if (config.url.indexOf(exceptUrls[i]) !== -1) {
                console.log('URL ' + config.url + '不需要被Loading 展示');
                return config;
            }
        }

        Vue.$loading() && Vue.$loading().show();
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    /* axios 全局拦截器 - 响应 */
    axios.interceptors.response.use(
        function(resp) {
            setTimeout(() => {
                Vue.$loading() && Vue.$loading().hide();
            }, 100);
            return resp;
        }, function(err) {
            setTimeout(() => {
                Vue.$loading() && Vue.$loading().hide();
            }, 100);
            return Promise.reject(err);
        }
    );
}