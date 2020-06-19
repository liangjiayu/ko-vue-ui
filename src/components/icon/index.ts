import KoIcon from './index.vue';

// eslint-disable-next-line
KoIcon.install = function(Vue: any) {
  Vue.component(KoIcon.options.name, KoIcon);
};

export default KoIcon;
