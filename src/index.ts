import './style/index.scss';
import button from './components/button';
import icon from './components/icon';
import iconx from './components/iconx';
import Alert from './components/alert';
import Row from './components/row';
import Col from './components/col';
import Radio from './components/radio';

const components = [button, icon, iconx, Alert, Row, Col, Radio];

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
