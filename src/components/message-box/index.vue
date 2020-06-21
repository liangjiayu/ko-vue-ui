<template>
  <div class="ko-msg-box__root">
    <transition name="msgbox-fade">
      <div class="ko-msg-box__wrap" v-show="visible" @click.self="handleWrapClick()">
        <div class="ko-msg-box" :class="[customClass]">
          <div class="ko-msg-box__header">
            <div class="ko-msg-box__title">{{ title }}</div>
            <div class="ko-msg-box__close" v-show="showClose" @click="handleAction('close')">
              <ko-icon name="x"></ko-icon>
            </div>
          </div>
          <div class="ko-msg-box__content">
            <div class="ko-msg-box__main">
              <div class="ko-msg-box__icon" :class="[type]" v-if="iconName">
                <ko-icon :name="iconName"></ko-icon>
              </div>
              <div class="ko-msg-box__word">
                <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
                <p v-else v-html="message"></p>
              </div>
            </div>
          </div>
          <div class="ko-msg-box__btns">
            <ko-button
              size="small"
              :class="[cancelButtonClass]"
              v-if="showCancelButton"
              @click="handleAction('cancel')"
            >{{ cancelButtonText }}</ko-button>
            <ko-button
              size="small"
              :class="[confirmButtonClass]"
              v-if="showConfirmButton"
              type="primary"
              @click="handleAction('confirm')"
            >{{ confirmButtonText }}</ko-button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal-mask">
      <div class="ko-modal-mask" v-show="visible"></div>
    </transition>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import KoIcon from '../icon';
import KoButton from '../button';

const iconMap: any = {
  success: 'check-circle-fill',
  info: 'info-circle-fill',
  warning: 'exclamation-circle-fill',
  error: 'x-circle-fill',
};

export default Vue.extend({
  name: 'ko-message-box',

  components: {
    KoIcon,
    KoButton,
  },

  data() {
    return {
      visible: false,
      // eslint-disable-next-line vue/no-reserved-keys
      _callback: null as any,

      title: '',
      message: '',
      type: '', // success / info / warning / error
      iconClass: '',
      showInput: false, // TODO
      showClose: true,
      lockScroll: true,
      closeOnClickModal: true,
      inputValue: null,
      inputPlaceholder: '',
      inputType: 'text',
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      confirmButtonClass: '',
      cancelButtonClass: '',
      customClass: '',
      beforeClose: null as any,
      dangerouslyUseHTMLString: false,
    };
  },

  computed: {
    iconName() {
      const iconName: string =
        this.iconClass ||
        (this.type && iconMap[this.type] ? iconMap[this.type] : '');

      return iconName;
    },
  },

  watch: {
    visible(val) {
      if (val) {
        this.handleOpen();
      }
    },
  },

  methods: {
    handleOpen() {
      if (this.lockScroll) {
        document.body.classList.add('ko-popup-lock');
      }
    },

    handleClose() {
      this.visible = false;
      document.body.classList.remove('ko-popup-lock');
    },

    handleAction(action: string) {
      if (this.beforeClose) {
        return this.beforeClose(action, this.handleClose, this);
      }
      this._callback(action, this);
      this.handleClose();
    },

    handleWrapClick() {
      if (this.closeOnClickModal) {
        this.handleAction('close');
      }
    },
  },
});
</script>


<style lang="scss">
.ko-msg-box {
  display: block;
  width: 420px;
  margin: auto;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  backface-visibility: hidden;
  line-height: 1;
  padding-bottom: 10px;

  &__wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
  }

  &__header {
    position: relative;
    padding: 15px 15px 10px;
  }

  &__title {
    font-size: 18px;
    color: #333;
  }

  &__close {
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 12px;
    color: #999;
    font-size: 20px;
    line-height: 0;
    &:hover {
      color: $--color-primary;
    }
  }

  &__content {
    padding: 10px 15px;
    line-height: 1.5;
    font-size: 14px;
    color: #666;
  }

  &__main {
    display: flex;
    align-items: center;
  }

  &__icon {
    line-height: 0;
    font-size: 22px;
    margin-right: 15px;

    &.success {
      color: $--color-success;
    }
    &.info {
      color: $--color-info;
    }
    &.warning {
      color: $--color-warning;
    }
    &.error {
      color: $--color-danger;
    }
  }

  &__word {
    flex: 1;
  }

  &__btns {
    padding: 5px 15px 0;
    text-align: right;
    .ko-button + .ko-button {
      margin-left: 10px;
    }
  }
}

.msgbox-fade-enter-active {
  animation: msgbox-fade-in 0.3s;
}

.msgbox-fade-leave-active {
  animation: msgbox-fade-out 0.3s;
}

@keyframes msgbox-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes msgbox-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}

// mask
.ko-modal-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-mask-enter-active {
  animation: modal-mask-in 0.2s ease;
}

.modal-mask-leave-active {
  animation: modal-mask-out 0.2s ease forwards;
}

@keyframes modal-mask-in {
  0% {
    opacity: 0;
  }
  100% {
  }
}

@keyframes modal-mask-out {
  0% {
  }
  100% {
    opacity: 0;
  }
}
</style>