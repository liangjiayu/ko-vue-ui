import KoCheckbox from './index.vue';

KoCheckbox.install = function(Vue: any) {
  Vue.component(KoCheckbox.options.name, KoCheckbox);
};

export default KoCheckbox;
