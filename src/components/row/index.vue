<template>
  <div
    class="ko-row"
    :style="style"
    :class="[justify&&`ko-row--${justify}`,align&&`ko-row--${align}`]"
  >
    <slot></slot>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ko-row',

  props: {
    gutter: {
      type: Number,
    },
    justify: {
      type: String, // start/end/center/space-around/space-between
    },
    align: {
      type: String, // top/middle/bottom
    },
  },

  computed: {
    style() {
      const result: any = {};
      if (this.gutter) {
        result.marginLeft = `-${this.gutter / 2}px`;
        result.marginRight = `-${this.gutter / 2}px`;
      }

      return result;
    },
  },
});
</script>


<style lang="scss">
.ko-row {
  position: relative;
  display: flex;
  flex-wrap: wrap;

  &--start {
    justify-content: flex-start;
  }

  &--end {
    justify-content: flex-end;
  }

  &--center {
    justify-content: center;
  }

  &--space-around {
    justify-content: space-around;
  }

  &--space-between {
    justify-content: space-between;
  }

  &--top {
    align-items: flex-start;
  }

  &--middle {
    align-items: center;
  }

  &--bottom {
    align-items: flex-end;
  }
}
</style>