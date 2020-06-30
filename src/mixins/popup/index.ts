import Vue from 'vue';
import KoModalMask from '../../components/modal-mask';

const context = {
  zIndex: 1000,
  nextIndex() {
    this.zIndex++;
    return this.zIndex;
  },
  overlay: null,
  stack: [],
};

const PopupManager = {
  zIndex: 1000,

  Modal: null as any,

  modalStack: [],

  showModal() {
    if (!this.Modal) {
      this.genModal();
    }
    this.Modal.visible = true;
  },

  genModal() {
    let Modal = new KoModalMask({});
    Modal.$mount();
    document.body.appendChild(Modal.$el);
    this.Modal = Modal;
  },

  closeModal() {
    if (!this.Modal) {
      return;
    }
    this.Modal.visible = false;
  },

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
        this.updataZIndex();
        // this.addEscEvent();
      } else {
        this.closeOverlay();
        this.noLockBody();
        // this.removeEscEvent();
      }
    },
  },

  methods: {
    showOverlay() {
      if (!this.modal) {
        return;
      }

      PopupManager.showModal();
    },

    closeOverlay() {
      if (!this.modal) {
        return;
      }

      PopupManager.closeModal();
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
      this.escEvent = (event: any) => {
        if (event.keyCode === 27) {
          console.log(this.$options.name);
          if (this.$options.name === 'ko-dialog') {
            return this.handleClose();
          }
          if (this.$options.name === 'ko-message-box') {
            return this.handleAction('close');
          }
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
      if (this.modal) {
        PopupManager.Modal.$el.style.zIndex = PopupManager.nextIndex();
      }
      (this as any).$el.style.zIndex = PopupManager.nextIndex();
    },
  },
});
