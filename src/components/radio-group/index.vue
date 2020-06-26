<template>
  <div>
    <slot></slot>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ko-radio-group',

  provide(): unknown {
    return {
      RadioGroup: this,
    };
  },

  props: {
    value: {},
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    changeValue(val: unknown) {
      this.$emit('input', val);
    },
  },
});
</script>