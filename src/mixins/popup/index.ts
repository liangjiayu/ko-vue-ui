import Vue from 'vue';
import KoModalMask from '../../components/modal-mask';

const PopupManager = {
  zIndex: 1000,

  Modal: null as any,

  modalStack: [] as any[],

  escEvent: null as any,

  addStack(comp: any) {
    this.modalStack.push(comp);
    this.showModal();
    this.updataZIndex();
  },

  popStack() {
    this.modalStack.pop();

    if (this.modalStack.length > 0) {
      this.Modal.$el.style.zIndex =
        this.modalStack[this.modalStack.length - 1].$el.style.zIndex - 1;
    }
    if (!this.modalStack.length) {
      this.Modal.visible = false;
      this.destroyModal();
    }
  },

  showModal() {
    if (!this.Modal) {
      this.genModal();
      this.addEscEvent();
    }
    this.Modal.visible = true;
  },

  updataZIndex() {
    if (this.Modal) {
      this.Modal.$el.style.zIndex = this.nextIndex();
    }
    let topItem = this.modalStack[this.modalStack.length - 1];
    if (topItem) {
      topItem.$el.style.zIndex = this.nextIndex();
    }
  },

  genModal() {
    let Modal = new KoModalMask({});
    Modal.$mount();
    document.body.appendChild(Modal.$el);
    this.Modal = Modal;
  },

  addEscEvent() {
    this.escEvent = (event: any) => {
      if (!this.modalStack.length) {
        return;
      }
      if (event.keyCode === 27) {
        let comp = this.modalStack[this.modalStack.length - 1];
        // todo
        comp.handleClose();
      }
    };
    window.addEventListener('keydown', this.escEvent);
  },

  removeEscEvent() {
    window.removeEventListener('keydown', this.escEvent);
  },

  destroyModal() {
    setTimeout(() => {
      if (this.modalStack.length > 0) {
        return;
      }
      document.body.removeChild(this.Modal.$el);
      this.Modal.$destroy();
      this.Modal = null;
      this.removeEscEvent();
    }, 200);
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
    // this.listenerESC();
  },

  watch: {
    visible(val) {
      if (val) {
        PopupManager.addStack(this);
        this.lockBody();
      } else {
        PopupManager.popStack();
        this.noLockBody();
      }
      // console.log(PopupManager.modalStack);
    },
  },

  methods: {
    lockBody() {
      if (this.lockScroll) {
        document.body.classList.add('ko-popup-lock');
      }
    },

    noLockBody() {
      document.body.classList.remove('ko-popup-lock');
    },
  },
});
