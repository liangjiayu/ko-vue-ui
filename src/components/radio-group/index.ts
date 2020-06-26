import KoRadioGroup from './index.vue';

// eslint-disable-next-line
KoRadioGroup.install = function(Vue: any) {
  Vue.component(KoRadioGroup.options.name, KoRadioGroup);
};

export default KoRadioGroup;
