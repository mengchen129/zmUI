import Vue from 'vue'
import App from './App.vue';
import DemoHeader from './pages/DemoHeader.vue';
import DemoToast from './pages/DemoToast.vue';
import DemoLoading from './pages/DemoLoading.vue';
import DemoSlider from './pages/DemoSlider.vue';
import DemoKeyboard from './pages/DemoKeyboard.vue';
import DemoSingleSelect from './pages/DemoSingleSelect.vue';
import DemoMultipleSelect from './pages/DemoMultipleSelect.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/header',
        component: DemoHeader
    },
    {
        path: '/toast',
        component: DemoToast
    },
    {
        path: '/loading',
        component: DemoLoading
    },
    {
        path: '/slider',
        component: DemoSlider
    },
    {
        path: '/keyboard',
        component: DemoKeyboard
    },
    {
        path: '/single-select',
        component: DemoSingleSelect
    },
    {
        path: '/multiple-select',
        component: DemoMultipleSelect
    }
];

const router = new VueRouter({routes});

import zmUI from '../src/index';
Vue.use(zmUI);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
