<template>
  <transition name="ko-fade-in">
    <div
      class="ko-alert"
      :class="[`ko-alert--${type}`,center&&`ko-alert--center`,`ko-alert--${effect}`]"
      v-show="visible"
    >
      <div class="ko-alert__icon" v-if="showIcon">
        <ko-icon :name="iconName"></ko-icon>
      </div>
      <div class="ko-alert__content">
        <div class="ko-alert__title" :class="[isBoldTitle]" v-if="$slots.title || title">
          <p v-if="$slots.title">
            <slot name="title"></slot>
          </p>
          <p v-else>{{ title }}</p>
        </div>

        <div class="ko-alert__desc" v-if="$slots.default || description">
          <p v-if="$slots.default">
            <slot></slot>
          </p>
          <p v-else>{{ description }}</p>
        </div>
      </div>
      <div
        class="ko-alert__close"
        :class="[closeText&&`ko-alert__close--text`]"
        v-if="closable||closeText"
        @click="close()"
      >
        <span v-if="closeText">{{ closeText }}</span>
        <ko-icon v-else name="x"></ko-icon>
      </div>
    </div>
  </transition>
</template>


<script lang="ts">
import Vue from 'vue';
import KoIcon from '../icon';

const IconMap = {
  success: 'check-circle-fill',
  info: 'info-circle-fill',
  warning: 'exclamation-circle-fill',
  error: 'x-circle-fill',
};

export default Vue.extend({
  name: 'ko-alert',

  components: {
    KoIcon,
  },

  props: {
    title: {
      type: String,
    },
    type: {
      type: String, // success / warning / info /error
      default: 'info',
    },
    description: {
      type: String,
    },
    closable: {
      type: Boolean,
    },
    center: {
      type: Boolean,
    },
    closeText: {
      type: String,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    effect: {
      type: String,
      default: 'light',
      validator(value) {
        return ['light', 'dark'].includes(value);
      },
    },
  },

  data() {
    return {
      visible: true,
    };
  },

  computed: {
    iconName(): string {
      return IconMap[this.type] || 'info-circle-fill';
    },
    isBoldTitle(): string {
      return this.description || this.$slots.default
        ? 'ko-alert__title--blod'
        : '';
    },
  },

  methods: {
    close() {
      this.visible = false;
    },
  },
});
</script>

<style lang="scss">
.ko-alert {
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  overflow: hidden;
  background-color: $--background-color-base;
  line-height: 1.5;

  &--light {
    &.ko-alert--success {
      background-color: lighten($--color-success, 42%);
      color: $--color-success;
    }

    &.ko-alert--warning {
      background-color: lighten($--color-warning, 38%);
      color: $--color-warning;
    }

    &.ko-alert--info {
      background-color: lighten($--color-info, 37%);
      color: $--color-info;
    }

    &.ko-alert--error {
      background-color: lighten($--color-danger, 28%);
      color: $--color-danger;
    }

    &.ko-alert__close {
      color: $--color-text-secondary;
    }
  }

  &--dark {
    color: #fff;
    &.ko-alert--success {
      background-color: lighten($--color-success, 0);
    }

    &.ko-alert--warning {
      background-color: lighten($--color-warning, 0);
    }

    &.ko-alert--info {
      background-color: lighten($--color-info, 0);
    }

    &.ko-alert--error {
      background-color: lighten($--color-danger, 0);
    }

    &.ko-alert__close {
      color: #fff;
    }
  }

  &--center {
    text-align: center;
  }

  &__icon {
    line-height: 0;
    margin-right: 10px;
    font-size: 16px;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-size: 13px;
    &--blod {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }

  &__desc {
    font-size: 12px;
  }

  &__close {
    cursor: pointer;
    font-size: 16px;
    &--text {
      font-size: 13px;
    }
  }
}
</style>