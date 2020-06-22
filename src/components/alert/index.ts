import KoAlert from './index.vue';

// eslint-disable-next-line
KoAlert.install = function(Vue: any) {
  Vue.component(KoAlert.options.name, KoAlert);
};

export default KoAlert;
