<template>
  <transition name="ko-message-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="ko-message"
      :class="[ type && !iconClass && `ko-message--${type}`,customClass,center&&`ko-message--center` ]"
      :style="{'top':verticalOffset+'px'}"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="ko-message__icon" v-if="iconName">
        <ko-icon :name="iconName"></ko-icon>
      </div>
      <div class="ko-message__content">
        <p v-if="dangerouslyUseHTMLString" v-html="message"></p>
        <p v-else>{{ message }}</p>
      </div>
      <div class="ko-message__close" v-if="showClose" @click="closeBox()">
        <ko-icon name="x"></ko-icon>
      </div>
    </div>
  </transition>
</template>


<script lang="ts">
import Vue from 'vue';
import KoIcon from '../icon';

const iconMap: any = {
  success: 'check-circle-fill',
  info: 'info-circle-fill',
  warning: 'exclamation-circle-fill',
  error: 'x-circle-fill',
};

export default Vue.extend({
  name: 'ko-message',

  components: {
    KoIcon,
  },

  data() {
    return {
      visible: false,
      timer: null as any,

      message: '',
      type: 'info', // success/warning/info/error
      iconClass: '',
      dangerouslyUseHTMLString: false,
      customClass: '',
      duration: 3000,
      showClose: false,
      center: false,
      onClose: null as any,
      verticalOffset: 20,
      offset: 20,

      // eslint-disable-next-line
      __callback: null as any,
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

  mounted() {
    this.startTimer();
  },

  methods: {
    handleAfterLeave() {
      this.$destroy();
      document.body.removeChild(this.$el);
    },

    closeBox() {
      this.visible = false;
      this.__callback();
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.closeBox();
        }, this.duration);
      }
    },

    clearTimer() {
      clearTimeout(this.timer);
    },
  },
});
</script>


<style lang="scss">
.ko-message {
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translate(-50%, 0);
  z-index: 1000;
  display: flex;
  align-items: center;
  min-width: 380px;
  border: 1px solid $--border-color-lighter;
  padding: 15px;
  line-height: 1;
  border-radius: 4px;
  overflow: hidden;
  color: $--color-text-secondary;
  background-color: #edf2fc;

  &--center {
    text-align: center;
  }

  &--success {
    background-color: lighten($--color-success, 48%);
    color: $--color-success;
  }

  &--warning {
    background-color: lighten($--color-warning, 40%);
    color: $--color-warning;
  }

  &--error {
    background-color: lighten($--color-danger, 28%);
    color: $--color-danger;
  }

  &--info {
    background-color: lighten($--color-info, 36%);
    color: $--color-info;
  }

  &__icon {
    line-height: 0;
    margin-right: 8px;
    font-size: 14px;
    color: inherit;
  }

  &__content {
    font-size: 14px;
    flex: 1;
    color: inherit;
  }

  &__close {
    cursor: pointer;
    line-height: 0;
    font-size: 18px;
    color: #999;
    &:hover {
      color: #666;
    }
  }
}

.ko-message-fade-enter-active {
  animation: message-fade-in 0.3s;
}

.ko-message-fade-leave-active {
  animation: message-fade-out 0.3s;
}

@keyframes message-fade-in {
  0% {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes message-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
}
</style>