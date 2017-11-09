/**
 * Mixin - 将包含遮罩的类模态组件增加后退处理
 * 1、在遮罩显示时，通过 history.pushState 写入 history 栈
 * 2、点击设备后退时，将 history 出栈，同时触发 popstate 事件
 * 3、点击遮罩或组件内完成/取消操作时，需要手动 history.back 出栈
 * 4、组件显示时，绑定事件，组件隐藏时，解绑事件
 *
 * 约定：
 * 组件使用 show 属性来控制自身的显示与隐藏
 */
export default  {
    data: function() {
        return {
            autoHistoryBack: true,      // 是否自动执行 history.back (在 popstate 被触发时，将被设置为 false)
        }
    },
    watch: {
        show: function(val) {
            if (!val) {
                window.removeEventListener('popstate', this.onPopState);
                if (this.autoHistoryBack) {
                    history.back();
                } else {
                    this.autoHistoryBack = true;
                }
            } else {
                this.pushHistory();
            }
        }
    },
    methods: {
        onPopState: function() {
            this.autoHistoryBack = false;
            this.show = false;
        },
        pushHistory: function(stateData) {
            history.pushState(stateData || {type: this.$options.name}, null);
            window.addEventListener('popstate', this.onPopState);
        }
    }
}