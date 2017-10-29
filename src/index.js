import Header from './components/Header/Header.vue';

const install = function(Vue) {
    if (install.installed) return;

    Vue.component(Header.name, Header);
};

export default {
    install: install,
    Header
};