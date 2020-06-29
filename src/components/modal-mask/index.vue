<template>
  <transition name="ko-fade-in">
    <div class="ko-modal-mask" v-show="visible"></div>
  </transition>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ko-modal-mask',

  props: {
    visible: {
      type: Boolean,
    },
  },
});
</script>

<style lang="scss" >
.ko-modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>