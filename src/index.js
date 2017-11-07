import Header from './components/Header.vue';
import Toast from './components/Toast.vue';
import Slider from './components/Slider.vue';
import Loading from './components/Loading.vue';
import NumberKeyboard from './components/NumberKeyboard.vue';
import SingleSelect from './components/SingleSelect.vue';
import MultipleSelect from './components/MultipleSelect.vue';

const install = function(Vue) {
    if (install.installed) return;

    Vue.component(Header.name, Header);
    Vue.component(Toast.name, Toast);
    Vue.component(Slider.name, Slider);
    Vue.component(Loading.name, Loading);
    Vue.component(NumberKeyboard.name, NumberKeyboard);
    Vue.component(SingleSelect.name, SingleSelect);
    Vue.component(MultipleSelect.name, MultipleSelect);
};

export default {
    install: install
};

export { Header, Toast, Slider, Loading, NumberKeyboard, SingleSelect, MultipleSelect };