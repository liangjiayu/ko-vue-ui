<template>
  <div class="ko-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ko-checkbox-group',

  provide(): unknown {
    return {
      CheckboxGroup: this,
    };
  },

  props: {
    value: {
      type: Array,
    },
    disabled: Boolean,
    min: Number,
    max: Number,
  },

  methods: {
    changeValue(flag: boolean, value: unknown) {
      let _value = [...this.value];
      if (flag) {
        _value.push(value);
      } else {
        _value = _value.filter((v) => {
          if (v !== value) {
            return true;
          }
        });
      }
      this.$emit('input', _value);
      this.$emit('change', _value);
    },
  },
});
</script>