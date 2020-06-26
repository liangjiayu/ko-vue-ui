<template>
  <label
    class="ko-radio"
    role="radio"
    :class="[{'ko-radio--checked':isChecked},{'ko-radio--disabled':isDisabled}]"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
  >
    <div class="ko-radio__input">
      <span class="ko-radio__inner"></span>
      <input
        ref="radio"
        type="radio"
        aria-hidden="true"
        class="ko-radio__origin"
        :value="label"
        :checked="isChecked"
        :disabled="isDisabled"
        :name="name"
        tabindex="-1"
        @change="handleChange"
      />
    </div>
    <div class="ko-radio__label">
      <slot></slot>
    </div>
  </label>
</template>


<script lang="ts">
import Vue from 'vue';
import { insertType } from '../../utils/types';

export interface KoRadioType {
  RadioGroup: any;
}

let KoRadio = insertType<KoRadioType, Vue>(Vue);

export default KoRadio.extend({
  name: 'ko-radio',

  inject: {
    RadioGroup: {
      from: 'RadioGroup',
      default: null,
    },
  },

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
  },

  data() {
    return {};
  },

  computed: {
    currentValue: {
      get(): unknown {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(val: unknown) {
        this.$emit('input', val);
      },
    },

    isGroup() {
      if (this.RadioGroup) {
        return true;
      }
      return false;
    },

    isDisabled(): boolean {
      if (this.isGroup) {
        return this.RadioGroup.disabled;
      }
      return this.disabled;
    },

    isChecked(): boolean {
      return this.currentValue === this.label;
    },
  },

  methods: {
    handleChange() {
      this.currentValue = this.label;
      this.$emit('change', this.label);
      this.isGroup && this.RadioGroup.changeValue(this.label);
    },
  },
});
</script>


<style lang="scss">
.ko-radio {
  position: relative;
  cursor: pointer;
  user-select: none;
  display: inline-block;
  margin-right: 30px;
  line-height: 1;
  font-size: 14px;
  color: $--color-text-regular;
  font-weight: 500;
  white-space: nowrap;

  &--checked {
    color: $--color-primary;
    .ko-radio__inner {
      border-color: $--color-primary;
      background-color: $--color-primary;
    }
  }

  &--disabled {
    color: $--color-text-placeholder;
    .ko-radio__inner {
      border-color: $--color-text-placeholder;
      background-color: $--background-color-base;
      &::before {
        background-color: $--color-text-placeholder;
      }
    }
  }

  &__input {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  &__inner {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid $--border-color-base;
    background-color: #fff;
    border-radius: 100%;
    &::before {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      background-color: #fff;
    }
  }

  &__origin {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0;
  }

  &__label {
    display: inline-block;
    vertical-align: middle;
    padding-left: 10px;
  }
}
</style>