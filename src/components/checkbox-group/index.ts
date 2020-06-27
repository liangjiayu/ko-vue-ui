import KoCheckboxGroup from './index.vue';

KoCheckboxGroup.install = function(Vue: any) {
  Vue.component(KoCheckboxGroup.options.name, KoCheckboxGroup);
};

export default KoCheckboxGroup;
