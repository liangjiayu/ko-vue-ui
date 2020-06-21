import MessageBoxVue from './index.vue';

let instance: any;
let msgQueue: any;

interface MsgProp {
  title?: string;
  message?: string;
  type?: 'success' | 'info' | 'warning' | 'error' | '';
  iconClass?: string;
  showInput?: boolean;
  showClose?: boolean;
  lockScroll?: boolean;
  closeOnClickModal?: boolean;
  inputValue?: null;
  inputPlaceholder?: string;
  inputType?: string;
  inputPattern?: null;
  inputValidator?: null;
  inputErrorMessage?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonClass?: string;
  cancelButtonClass?: string;
  customClass?: string;
  beforeClose?: Function;
  dangerouslyUseHTMLString?: boolean;

  [key: string]: any;
}

const defaults: MsgProp = {
  title: '',
  message: '',
  type: '',
  iconClass: '',
  showInput: false, //TODo
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

function initMsg() {
  instance = new MessageBoxVue({
    el: document.createElement('div'),
  });
  document.body.appendChild(instance.$el);
}

function setCallback() {
  instance._callback = (action: string) => {
    if (msgQueue) {
      if (action === 'confirm') {
        if (instance.showInput) {
          return msgQueue.resolve({ value: instance.inputValue, action });
        } else {
          return msgQueue.resolve({ action });
        }
      }
      if (action === 'cancel') {
        return msgQueue.reject({ action });
      }
    }
  };
}

function showMsg(options: MsgProp) {
  if (!instance) {
    initMsg();
  }

  if (!instance._callback) {
    setCallback();
  }

  if ('_callback' in options) {
    delete options._callback;
  }

  // 赋值给组件里面的 data
  for (const key in options) {
    instance[key] = options[key];
  }

  instance.$nextTick(() => {
    instance.visible = true;
  });
}

function MessageBox(options: MsgProp) {
  return new Promise((resolve, reject) => {
    msgQueue = {
      resolve,
      reject,
    };
    showMsg({ ...defaults, ...options });
  });
}

MessageBox.alert = function(options: MsgProp) {
  return MessageBox({
    $type: 'alert',
    ...options,
  });
};

MessageBox.confirm = function(options: MsgProp) {
  return MessageBox({
    $type: 'confirm',
    showCancelButton: true,
    ...options,
  });
};

MessageBox.prompt = function(options: MsgProp) {
  return MessageBox({
    $type: 'prompt',
    showCancelButton: true,
    showInput: true,
    ...options,
  });
};

export { MessageBox };

export default MessageBox;
