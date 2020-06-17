import KoButton from './index.vue';

KoButton.install = function(Vue: any) {
  Vue.component(KoButton.options.name, KoButton);
};

export default KoButton;
