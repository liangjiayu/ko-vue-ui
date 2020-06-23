import KoCol from './index.vue';

// eslint-disable-next-line
KoCol.install = function(Vue: any) {
  Vue.component(KoCol.options.name, KoCol);
};

export default KoCol;
