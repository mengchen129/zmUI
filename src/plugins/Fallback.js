/**
 * 部分 CSS/JS 特性在 Android 4.x 下可能会出现兼容性问题
 * 这里通过 lowAndroidFallback 存储是否是 Android 4.x 及以下版本，由业务自行处理
 */
export default  {
    data() {
        return {
            lowAndroidFallback: false
        }
    },
    mounted() {
        let ua = navigator.userAgent;
        if (!/android/i.test(ua)) {
            return;
        }

        let androidVersion;

        ua.replace(/Android ((\d|\.)+)/i, function(match, $1) {
            androidVersion = $1;        // 例如： 4.4.4 或 6.0.1 等
        });

        if (parseInt(androidVersion) < 5) {
            this.lowAndroidFallback = true;
        }
    }
}