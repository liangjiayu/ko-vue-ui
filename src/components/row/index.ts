import KoRow from './index.vue';

// eslint-disable-next-line
KoRow.install = function(Vue: any) {
  Vue.component(KoRow.options.name, KoRow);
};

export default KoRow;
