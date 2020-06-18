import KoButton from './index.vue';

// eslint-disable-next-line
KoButton.install = function(Vue: any) {
  Vue.component(KoButton.options.name, KoButton);
};

export default KoButton;
