import './style/common/global.scss';
import button from './components/button';

const components = [button];

// eslint-disable-next-line
function install(Vue: any) {
  components.forEach((item) => {
    Vue.use(item);
  });
}

export default {
  version: '0.01',
  install,
};
