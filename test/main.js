import Vue from 'vue'
import App from './App.vue'

import zmUI from '../src/index';
Vue.use(zmUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
