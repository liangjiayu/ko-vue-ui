import Vue from 'vue';
import KoModalMask from '../../components/modal-mask';

const context = {
  zIndex: 1000,
  nextIndex() {
    this.zIndex++;
    return this.zIndex;
  },
};

export default Vue.extend({
  props: {
    visible: {
      type: Boolean,
    },

    modal: {
      type: Boolean,
      default: true,
    },

    lockScroll: {
      type: Boolean,
      default: true,
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      overlay: null as any,
      escEvent: null as any,
    };
  },

  created() {
    this.listenerESC();
  },

  watch: {
    visible(val) {
      if (val) {
        this.showOverlay();
        this.lockBody();
        this.addEscEvent();
        this.updataZIndex();
      } else {
        this.removeOverlay();
        this.noLockBody();
        this.removeEscEvent();
      }
    },
  },

  methods: {
    showOverlay() {
      if (!this.modal) {
        return;
      }

      if (!this.overlay) {
        let overlay = new KoModalMask({});
        overlay.$mount();

        document.body.appendChild(overlay.$el);
        this.overlay = overlay;
      }

      this.overlay.visible = true;
    },

    removeOverlay() {
      if (!this.modal) {
        return;
      }

      this.overlay.visible = false;
      setTimeout(() => {
        document.body.removeChild(this.overlay.$el);
        this.overlay.$destroy();
        this.overlay = null;
      }, 500);
    },

    lockBody() {
      if (this.lockScroll) {
        document.body.classList.add('ko-popup-lock');
      }
    },

    noLockBody() {
      document.body.classList.remove('ko-popup-lock');
    },

    listenerESC() {},

    addEscEvent() {
      if (!this.closeOnPressEscape) {
        return;
      }
      this.escEvent = (event) => {
        if (event.keyCode === 27) {
          this.handleClose();
        }
      };
      window.addEventListener('keydown', this.escEvent);
    },

    removeEscEvent() {
      if (!this.closeOnPressEscape) {
        return;
      }
      window.removeEventListener('keydown', this.escEvent);
    },

    updataZIndex() {
      if (this.overlay) {
        this.overlay.$el.style.zIndex = context.nextIndex();
      }
      (this as any).$el.style.zIndex = context.nextIndex();
    },
  },
});
