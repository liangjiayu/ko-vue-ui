import './style/index.scss';
import button from './components/button';
import icon from './components/icon';
import iconx from './components/iconx';
import Alert from './components/alert';

const components = [button, icon, iconx, Alert];

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
