<template>
  <i class="ko-iconx" :style="{color:color,fontSize:size}">
    <svg width="1em" height="1em" fill="currentColor">
      <use :xlink:href="`${spriteUrl}#${name}`" />
    </svg>
  </i>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ko-iconx',

  props: {
    sprite: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
  },

  computed: {
    spriteUrl() {
      return this.sprite || window.location.origin + '/bootstrap-icons.svg';
    },
  },
});
</script>

<style lang="scss">
.ko-iconx {
  display: inline-block;
  color: inherit;
  font-size: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  svg {
    display: inline-block;
  }
}
</style>

