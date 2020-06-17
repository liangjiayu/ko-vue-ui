import Vue from 'vue';
import App from './App.vue';

import koui from '../src/index.ts';

Vue.use(koui);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
