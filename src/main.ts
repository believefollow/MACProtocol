import Vue from 'vue';
import Rx from 'rxjs/Rx';
import VueRx from 'vue-rx';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';

Vue.config.productionTip = false;

// VueRx can use libraries other than RxJS
// that implement the observable interface.
Vue.use(VueRx, Rx);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
