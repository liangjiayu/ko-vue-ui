import KoRadio from './index.vue';

// eslint-disable-next-line
KoRadio.install = function(Vue: any) {
  Vue.component(KoRadio.options.name, KoRadio);
};

export default KoRadio;
