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
import DemoInput from './pages/DemoInput.vue';
import DemoSuggestion from './pages/DemoSuggestion.vue';
import DemoProgress from './pages/DemoProgress.vue';


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
    },
    {
        path: '/input',
        component: DemoInput,
    },
    {
        path: '/suggestion',
        component: DemoSuggestion,
    },
    {
        path: '/progress',
        component: DemoProgress,
    }
];

const router = new VueRouter({routes});

const ua = navigator.userAgent;
const isAndroidDingDing = /dingtalk/i.test(ua) && /android/i.test(ua);
import zmUI from '../src/index';
Vue.use(zmUI, { useModalBack: !isAndroidDingDing });

import '../src/styles/index.scss';

router.beforeEach((to, from, next) => {
    if (Vue.$progress()) {
        Vue.$progress().start();
    }
    next();
});

router.afterEach(() => {
    setTimeout(() => {
        if (Vue.$progress()) {
            Vue.$progress().done();
        }
    }, 100);

});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
