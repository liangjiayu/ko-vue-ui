import KoDialog from './index.vue';

KoDialog.install = function(Vue: any) {
  Vue.component(KoDialog.options.name, KoDialog);
};

export default KoDialog;
