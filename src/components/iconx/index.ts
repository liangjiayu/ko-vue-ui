import KoIconx from './index.vue';

// eslint-disable-next-line
KoIconx.install = function(Vue: any) {
  Vue.component(KoIconx.options.name, KoIconx);
};

export default KoIconx;
