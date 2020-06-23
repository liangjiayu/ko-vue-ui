<template>
  <div class="ko-col" :class="clasList" :style="style">
    <slot></slot>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ko-col',

  props: {
    flex: {
      type: Boolean,
    },
    span: {
      type: Number,
    },
    offset: {
      type: Number,
    },
    push: {
      type: Number,
    },
    pull: {
      type: Number,
    },
    xs: {
      type: [Number, Object],
    },
    sm: {
      type: [Number, Object],
    },
    md: {
      type: [Number, Object],
    },
    lg: {
      type: [Number, Object],
    },
    xl: {
      type: [Number, Object],
    },
  },

  computed: {
    gutter() {
      const parent = this.$parent;
      let gutter = 0;

      if (parent.$options.name === 'ko-row' && parent.$props.gutter) {
        gutter = parent.$props.gutter;
      }

      return gutter;
    },

    style() {
      const result: any = {};
      if (this.gutter) {
        result.paddingLeft = `${this.gutter / 2}px`;
        result.paddingRight = `${this.gutter / 2}px`;
      }

      return result;
    },

    clasList() {
      const result: any[] = [];

      ['span', 'offset', 'push', 'pull'].forEach((prop) => {
        if (this[prop] || this[prop] === 0) {
          result.push(
            prop === 'span'
              ? `ko-col-${this[prop]}`
              : `ko-col-${prop}-${this[prop]}`
          );
        }
      });

      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          result.push(`ko-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          const props = this[size];

          Object.keys(props).forEach((prop) => {
            result.push(
              prop === 'span'
                ? `ko-col-${size}-${props[prop]}`
                : `ko-col-${size}-${prop}-${props[prop]}`
            );
          });
        }
      });

      if (this.flex) {
        result.push('ko-col--flex');
      }

      return result;
    },
  },
});
</script>

<style lang="scss">
.ko-col {
  position: relative;
  min-width: 0;
  max-width: 100%;
  &--flex {
    flex: 1;
  }
}

.ko-col-0 {
  display: none;
}

@for $i from 0 through 24 {
  .ko-col-#{$i} {
    flex: 0 0 (1/24 * $i) * 100%;
    max-width: (1/24 * $i) * 100%;
  }

  .ko-col-offset-#{$i} {
    margin-left: (1/24 * $i) * 100%;
  }

  .ko-col-pull-#{$i} {
    right: (1/24 * $i) * 100%;
  }

  .ko-col-push-#{$i} {
    left: (1/24 * $i) * 100%;
  }
}

// xs < 576px
@media (max-width: 575px) {
  .ko-col-xs-0 {
    display: none;
  }

  @for $i from 0 through 24 {
    .ko-col-xs-#{$i} {
      flex: 0 0 (1/24 * $i) * 100%;
      max-width: (1/24 * $i) * 100%;
    }

    .ko-col-xs-offset-#{$i} {
      margin-left: (1/24 * $i) * 100%;
    }

    .ko-col-xs-pull-#{$i} {
      right: (1/24 * $i) * 100%;
    }

    .ko-col-xs-push-#{$i} {
      left: (1/24 * $i) * 100%;
    }
  }
}

// sm >= 576px
@media (min-width: 576px) {
  .ko-col-sm-0 {
    display: none;
  }

  @for $i from 0 through 24 {
    .ko-col-sm-#{$i} {
      flex: 0 0 (1/24 * $i) * 100%;
      max-width: (1/24 * $i) * 100%;
    }

    .ko-col-sm-offset-#{$i} {
      margin-left: (1/24 * $i) * 100%;
    }

    .ko-col-sm-pull-#{$i} {
      right: (1/24 * $i) * 100%;
    }

    .ko-col-sm-push-#{$i} {
      left: (1/24 * $i) * 100%;
    }
  }
}

// md >= 768px
@media (min-width: 768px) {
  .ko-col-md-0 {
    display: none;
  }

  @for $i from 0 through 24 {
    .ko-col-md-#{$i} {
      flex: 0 0 (1/24 * $i) * 100%;
      max-width: (1/24 * $i) * 100%;
    }

    .ko-col-md-offset-#{$i} {
      margin-left: (1/24 * $i) * 100%;
    }

    .ko-col-md-pull-#{$i} {
      right: (1/24 * $i) * 100%;
    }

    .ko-col-md-push-#{$i} {
      left: (1/24 * $i) * 100%;
    }
  }
}

// lg >= 992px
@media (min-width: 992px) {
  .ko-col-lg-0 {
    display: none;
  }

  @for $i from 0 through 24 {
    .ko-col-lg-#{$i} {
      flex: 0 0 (1/24 * $i) * 100%;
      max-width: (1/24 * $i) * 100%;
    }

    .ko-col-lg-offset-#{$i} {
      margin-left: (1/24 * $i) * 100%;
    }

    .ko-col-lg-pull-#{$i} {
      right: (1/24 * $i) * 100%;
    }

    .ko-col-lg-push-#{$i} {
      left: (1/24 * $i) * 100%;
    }
  }
}

// xl >= 1200px
@media (min-width: 1200px) {
  .ko-col-xl-0 {
    display: none;
  }

  @for $i from 0 through 24 {
    .ko-col-xl-#{$i} {
      flex: 0 0 (1/24 * $i) * 100%;
      max-width: (1/24 * $i) * 100%;
    }

    .ko-col-xl-offset-#{$i} {
      margin-left: (1/24 * $i) * 100%;
    }

    .ko-col-xl-pull-#{$i} {
      right: (1/24 * $i) * 100%;
    }

    .ko-col-xl-push-#{$i} {
      left: (1/24 * $i) * 100%;
    }
  }
}
</style>