<template>
  <button
    class="ko-button"
    :type="nativeType"
    :disabled="disabled"
    :class="[
      type&&`ko-button--${type}`,
      size&&`ko-button--${size}`,
      {
      'ko-button--plain':plain,
      'ko-button--round':round,
      'ko-button--disabled':disabled,
      'ko-button--block':block,
      }
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>



<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ko-button',

  props: {
    type: {
      type: String, //primary / success / warning / danger / info / text
      default: 'default',
    },
    size: {
      type: String, // large normal small  mini
      default: 'normal',
    },
    plain: {
      type: Boolean,
    },
    round: {
      type: Boolean,
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
    },
    block: {
      type: Boolean,
    },
  },

  methods: {
    handleClick(event: Event) {
      this.$emit('click', event);
    },
  },
});
</script>

<style lang="scss">
@import './index.scss';
</style>