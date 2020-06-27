<template>
  <label
    class="ko-checkbox"
    :class="[
    {'ko-checkbox--checked':isChecked},
    {'ko-checkbox--disabled':isDisabled},
    {'ko-checkbox--indeterminate':indeterminate}
    ]"
  >
    <div class="ko-checkbox__input">
      <div class="ko-checkbox__inner"></div>
      <input
        type="checkbox"
        class="ko-checkbox__origin"
        :checked="isChecked"
        :disabled="isDisabled"
        :name="name"
        :value="label"
        @change="handleChange"
      />
    </div>
    <div class="ko-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </div>
  </label>
</template>


<script lang="ts">
import Vue from 'vue';
import { insertType } from '@/utils/types.ts';

interface KoCheckbox {
  CheckboxGroup: {
    value: any[];
    min: number;
    max: number;
    [key: string]: any;
  };
}

let KoCheckbox = insertType<KoCheckbox, Vue>(Vue);

export default KoCheckbox.extend({
  name: 'ko-checkbox',

  inject: {
    CheckboxGroup: {
      from: 'CheckboxGroup',
      default: null,
    },
  },

  props: {
    value: {},
    label: {},
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    disabled: Boolean,
    name: String,
    checked: Boolean,
    indeterminate: Boolean,
  },

  data() {
    return {};
  },

  computed: {
    currentValue: {
      get(): any {
        if (this.isGroup) {
          return this.CheckboxGroup.value.includes(this.label);
        }
        return this.value;
      },
      set(val: any) {
        this.$emit('input', val);
      },
    },

    isLimitDisabled(): boolean {
      let { max, min } = this.CheckboxGroup;
      return (
        !!(max || min) &&
        ((this.CheckboxGroup.value.length >= max && !this.isChecked) ||
          (this.CheckboxGroup.value.length <= min && this.isChecked))
      );
    },

    isDisabled(): boolean {
      return this.isGroup
        ? this.CheckboxGroup.disabled || this.disabled || this.isLimitDisabled
        : this.disabled;
    },

    isChecked(): boolean {
      if (this.isReplaceValue) {
        return this.currentValue === this.trueLabel;
      }
      return !!this.currentValue;
    },

    // 用于判断是否使用 trueLabel，组合复选框不使用
    isReplaceValue(): boolean {
      if (
        this.trueLabel !== undefined &&
        this.falseLabel !== undefined &&
        !this.isGroup
      ) {
        return true;
      }
      return false;
    },

    isGroup() {
      if (this.CheckboxGroup) {
        return true;
      }
      return false;
    },
  },

  created() {
    if (this.isReplaceValue) {
      if (typeof this.currentValue === 'boolean') {
        this.currentValue = this.currentValue
          ? this.trueLabel
          : this.falseLabel;
      }
    }
    this.checkItem();
  },

  methods: {
    checkItem() {
      if (this.isGroup && this.checked) {
        this.CheckboxGroup.changeValue(true, this.label);
      }
    },

    handleChange(e: any) {
      let checked = e.target.checked;
      let value;
      if (checked) {
        value = this.isReplaceValue ? this.trueLabel : true;
      } else {
        value = this.isReplaceValue ? this.falseLabel : false;
      }
      this.currentValue = value;
      this.$emit('change', value);
      if (this.isGroup) {
        this.CheckboxGroup.changeValue(checked, this.label);
      }
    },
  },
});
</script>

<style lang="scss">
.ko-checkbox {
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
    .ko-checkbox__inner {
      border-color: $--color-primary;
      background-color: $--color-primary;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z'/%3E%3C/svg%3E");
    }
  }

  &--indeterminate {
    color: $--color-primary;
    .ko-checkbox__inner {
      border-color: $--color-primary;
      background-color: $--color-primary;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z'/%3E%3C/svg%3E");
    }
  }

  &--disabled {
    cursor: not-allowed;
    color: $--color-text-placeholder;
    .ko-checkbox__inner {
      border-color: $--color-text-placeholder;
      background-color: $--color-text-placeholder;
    }
  }

  &__input {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  &__inner {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid $--border-color-base;
    background-color: #fff;
    border-radius: 2px;
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