import button from './components/button';

const components = [button];

function install(Vue: any) {
  components.forEach((item) => {
    if (item.install) {
      Vue.use(item);
    } else {
      Vue.component(item.options.name, item);
    }
  });
}

export default {
  version: '0.01',
  install,
};
