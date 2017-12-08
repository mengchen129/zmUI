import Header from './components/Header.vue';
import Toast from './components/Toast.vue';
import Carousel from './components/Carousel.vue';
import Loading from './components/Loading.vue';
import NumberKeyboard from './components/NumberKeyboard.vue';
import SingleSelect from './components/SingleSelect.vue';
import MultipleSelect from './components/MultipleSelect.vue';
import DistrictSelect from './components/DistrictSelect.vue';
import Navigation from './components/Navigation.vue';
import Modal from './components/Modal.vue';
import PullDown from './components/PullDown.vue';
import ScrollLoading from './components/ScrollLoading.vue';

import Api from './plugins/GlobalApi';

const install = function(Vue) {
    if (install.installed) return;

    Vue.component(Header.name, Header);
    Vue.component(Toast.name, Toast);
    Vue.component(Carousel.name, Carousel);
    Vue.component(Loading.name, Loading);
    Vue.component(NumberKeyboard.name, NumberKeyboard);
    Vue.component(SingleSelect.name, SingleSelect);
    Vue.component(MultipleSelect.name, MultipleSelect);
    Vue.component(DistrictSelect.name, DistrictSelect);
    Vue.component(Navigation.name, Navigation);
    Vue.component(Modal.name, Modal);
    Vue.component(PullDown.name, PullDown);
    Vue.component(ScrollLoading.name, ScrollLoading);

    Vue.$toast = Vue.prototype.$toast = () => Api.toast;
    Vue.$loading = Vue.prototype.$loading = () => Api.loading;
    Vue.$alert = Vue.prototype.$alert = (...args) => Api.alert(...args);
    Vue.$confirm = Vue.prototype.$confirm = (...args) => Api.confirm(...args);
    Vue.$prompt = Vue.prototype.$prompt = (...args) => Api.prompt(...args);
};

export default {
    install
};

export {
    Header,
    Toast,
    Carousel,
    Loading,
    NumberKeyboard,
    SingleSelect,
    MultipleSelect,
    DistrictSelect,
    Navigation,
    Modal,
    PullDown,
    ScrollLoading,
};