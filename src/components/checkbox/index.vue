<template>
  <label
    class="ko-checkbox"
    :class="[
    {'ko-checkbox--checked':isChecked},
    {'ko-checkbox--disabled':isDisabled}
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
    <div class="ko-checkbox__label">
      <slot></slot>
    </div>
  </label>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ko-checkbox',

  props: {
    value: {},
    label: {},
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    disabled: Boolean,
    name: String,
    checked: Boolean,
  },

  computed: {
    currentValue: {
      get(): any {
        return this.value;
      },
      set(val: any) {
        this.$emit('input', val);
      },
    },

    isDisabled(): boolean {
      return this.disabled;
    },

    isChecked(): boolean {
      if (this.isReplaceValue) {
        return this.currentValue === this.trueLabel;
      }
      return !!this.currentValue;
    },

    // 需要使用 true-labe的值
    isReplaceValue(): boolean {
      if (this.trueLabel !== undefined && this.falseLabel !== undefined) {
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
  },

  methods: {
    handleChange(e: any) {
      let checked = e.target.checked;
      let value;
      if (checked) {
        value = this.isReplaceValue ? this.trueLabel : true;
      } else {
        value = this.isReplaceValue ? this.falseLabel : false;
      }

      this.currentValue = value;
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