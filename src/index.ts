import './style/index.scss';
import button from './components/button';
import icon from './components/icon';
import iconx from './components/iconx';
import Alert from './components/alert';
import Row from './components/row';
import Col from './components/col';
import Radio from './components/radio';
import RadioGroup from './components/radio-group';
import Checkbox from './components/checkbox';
import CheckboxGroup from './components/checkbox-group';
import Dialog from './components/dialog';

const components = [
  button,
  icon,
  iconx,
  Alert,
  Row,
  Col,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Dialog,
];

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
