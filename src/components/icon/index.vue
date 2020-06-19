<template>
  <i v-html="svgMain" class="ko-icon" :style="{color:color,fontSize:size}"></i>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ko-icon',

  props: {
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

  data() {
    return {
      svgMain: '',
    };
  },

  created() {
    let svg = '';
    try {
      svg = require(`bootstrap-icons/icons/${this.name}.svg`).default;
    } catch (error) {
      console.error(`bootstrap-icons库不存在 name 值为(${this.name})的icon，无此icon!`);
    }
    this.svgMain = svg;
  },
});
</script>

<style lang="scss">
.ko-icon {
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