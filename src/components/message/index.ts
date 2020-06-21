import MessageVue from './index.vue';

let instance: any;
let instanceArr: any[] = [];

interface MsgOptions {
  message: string;
  type: 'success' | 'warning' | 'info' | 'error' | '';
  iconClass: string;
  dangerouslyUseHTMLString: boolean;
  customClass: string;
  duration: number;
  showClose: boolean;
  center: boolean;
  onClose: () => {};
  offset: number;
}

function Message(options: MsgOptions) {
  const kid = new Date().getTime();
  instance = new MessageVue({
    el: document.createElement('div'),
    data: options,
  });
  instance.kid = kid;
  instance.__callback = () => {
    Message.close(kid);
  };
  document.body.appendChild(instance.$el);

  let verticalOffset = options.offset || 20;
  instanceArr.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  instance.verticalOffset = verticalOffset;
  instance.visible = true;
  instanceArr.push(instance);
  
}

Message.close = function(id: number) {
  for (let i = 0; i < instanceArr.length; i++) {
    if (instanceArr[i].kid === id) {
      instanceArr.splice(i, 1);
    }
    break;
  }
};

Message.success = function(options: MsgOptions) {
  return Message({
    ...options,
    type: 'success',
  });
};

Message.info = function(options: MsgOptions) {
  return Message({
    ...options,
    type: 'info',
  });
};
Message.warning = function(options: MsgOptions) {
  return Message({
    ...options,
    type: 'warning',
  });
};
Message.error = function(options: MsgOptions) {
  return Message({
    ...options,
    type: 'error',
  });
};

export default Message;
