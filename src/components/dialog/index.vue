<template>
  <transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave">
    <div class="ko-diolog__wrap" v-show="visible" @click.self="handleWrapClick()">
      <div
        class="ko-diolog"
        aria-modal="true"
        role="dialog"
        ref="dialog"
        :style="style"
        :class="[{'ko-diolog--fullscreen':this.fullscreen},{'ko-diolog--center':this.center},customClass]"
      >
        <div class="ko-diolog__header">
          <slot name="title">
            <span class="ko-diolog__title">{{ title }}</span>
          </slot>
          <div class="ko-diolog__close" aria-label="Close" v-if="showClose" @click="handleClose()">
            <ko-icon name="x"></ko-icon>
          </div>
        </div>
        <div class="ko-diolog__body">
          <slot></slot>
        </div>
        <div class="ko-diolog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>


<script lang="ts">
import Vue from 'vue';
import KoIcon from '../icon';
import popup from '../../mixins/popup';
import { insertType } from '../../utils/types';

interface PopupType {
  showOverlay: Function;
  removeOverlay: Function;
}

// TOList  modal-append-to-body	  append-to-body	lock-scroll
export default insertType<PopupType, Vue>(Vue).extend({
  name: 'ko-dialog',

  mixins: [popup],

  components: {
    KoIcon,
  },

  props: {
    visible: {
      type: Boolean,
    },

    title: {
      type: String,
    },

    width: {
      type: String,
    },

    fullscreen: {
      type: Boolean,
    },

    top: {
      type: String,
    },

    modal: {
      type: Boolean,
      default: true,
    },

    lockScroll: {
      type: Boolean,
      default: true,
    },

    customClass: {
      type: String,
    },

    closeOnClickModal: {
      type: Boolean,
      default: true,
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },

    showClose: {
      type: Boolean,
      default: true,
    },

    beforeClose: Function,

    center: {
      type: Boolean,
    },

    destroyOnClose: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    style() {
      let style: any = {};

      if (!this.fullscreen) {
        if (this.top) {
          style.marginTop = this.top;
        }
        if (this.width) {
          style.width = this.width;
        }
      }
      return style;
    },
  },

  watch: {
    visible(val) {
      if (val) {
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    },
  },

  methods: {
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.doHide);
      } else {
        this.doHide();
      }
    },

    doHide(flag?: boolean) {
      if (flag !== false) {
        this.$emit('update:visible', false);
      }
    },

    handleWrapClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },

    afterEnter() {
      this.$emit('opened');
    },

    afterLeave() {
      this.$emit('closed');
    },
  },
});
</script>


<style lang="scss">
.ko-diolog {
  position: absolute;
  width: 600px;
  left: 0;
  right: 0;
  margin: 150px auto 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  background-color: #fff;
  line-height: 1.5;

  &--fullscreen {
    width: 100%;
    height: 100%;
    overflow: auto;
    margin: 0;
  }

  &--center {
    text-align: center;
    .ko-diolog__footer {
      text-align: inherit;
    }
  }

  &__wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  &__header {
    padding: 20px 20px 10px;
    overflow: hidden;
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
  }

  &__close {
    cursor: pointer;
    float: right;
    line-height: 0;
    font-size: 20px;
    &:hover {
      color: $--color-primary;
    }
  }

  &__body {
    padding: 30px 20px;
    font-size: 14px;
    color: $--color-text-regular;
    word-break: break-all;
    text-align: initial;
  }

  &__footer {
    padding: 10px 20px 20px;
    text-align: right;
  }
}

.dialog-fade-enter-active {
  animation: dialog-fade-in 0.3s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out 0.3s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>