import Header from './components/Header/Header.vue';
import Toast from './components/Toast/Toast.vue';
import './common/utils.scss';

const install = function(Vue) {
    if (install.installed) return;

    Vue.component(Header.name, Header);
    Vue.component(Toast.name, Toast);
};

export default {
    install: install
};

export { Header, Toast };