export default {
    /**
     * 是否启用 ModalBack，即可以通过浏览器返回或设备返回键隐藏 Modal-like 组件
     * 配置方式：在 Vue.use(zmUI) 时通过 options 传入
     * [2018.6.23 测试结果：安卓钉钉浏览器对此功能的支持有怪异 BUG，建议设置为 false]
     */
    useModalBack: true,
};