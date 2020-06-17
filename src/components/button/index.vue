<template>
  <button class="ko-button" @click="handleClick">
    <slot></slot>
  </button>
</template>



<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ko-button',

  methods: {
    handleClick(event: Event) {
      this.$emit('click', event);
    },
  },
});
</script>

<style lang="scss">
.ko-button {
  user-select: none;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  padding: 12px 20px;
  outline: 0;
  margin: 0;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 500;
}
</style>