import Vue from 'vue'
import App from './App.vue';

import DemoTheme from './pages/DemoTheme.vue';
import DemoHeader from './pages/DemoHeader.vue';
import DemoToast from './pages/DemoToast.vue';
import DemoLoading from './pages/DemoLoading.vue';
import DemoCarousel from './pages/DemoCarousel.vue';
import DemoKeyboard from './pages/DemoKeyboard.vue';
import DemoSingleSelect from './pages/DemoSingleSelect.vue';
import DemoMultipleSelect from './pages/DemoMultipleSelect.vue';
import DemoDistrictSelect from './pages/DemoDistrictSelect.vue';
import DemoNavigation from './pages/DemoNavigation.vue';
import DemoModal from './pages/DemoModal.vue';
import DemoPullDown from './pages/DemoPullDown.vue';
import DemoScrollLoading from './pages/DemoScrollLoading.vue';


import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/theme',
        component: DemoTheme,
    },
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
        path: '/carousel',
        component: DemoCarousel
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
    },
    {
        path: '/district-select',
        component: DemoDistrictSelect
    },
    {
        path: '/navigation',
        component: DemoNavigation
    },
    {
        path: '/modal',
        component: DemoModal,
    },
    {
        path: '/pulldown',
        component: DemoPullDown
    },
    {
        path: '/scroll-loading',
        component: DemoScrollLoading,
    }
];

const router = new VueRouter({routes});

import zmUI from '../src/index';
Vue.use(zmUI);

import '../src/styles/index.scss';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
