import Vue, { VueConstructor } from 'vue';
import button from './components/button';

const components = [button];

function install(Vue: VueConstructor, option = {}) {
  components.forEach((item) => {
    Vue.component(item.options.name, item);
  });
}

export default {
  version: '0.01',
  install,
};
