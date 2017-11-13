import Header from './components/Header.vue';
import Toast from './components/Toast.vue';
import Carousel from './components/Carousel.vue';
import Loading from './components/Loading.vue';
import NumberKeyboard from './components/NumberKeyboard.vue';
import SingleSelect from './components/SingleSelect.vue';
import MultipleSelect from './components/MultipleSelect.vue';
import DistrictSelect from './components/DistrictSelect.vue';

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
};

export default {
    install
};

export { Header, Toast, Carousel, Loading, NumberKeyboard, SingleSelect, MultipleSelect, DistrictSelect };