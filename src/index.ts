import './style/common/global.scss';
import button from './components/button';
import icon from './components/icon';
import iconx from './components/iconx';
// import MessageBox from './components/message-box';

const components = [button, icon, iconx];

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
