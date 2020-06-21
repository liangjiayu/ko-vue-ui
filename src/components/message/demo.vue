<template>
  <div>
    <ko-button @click="message">message</ko-button>
    <ko-button @click="success">成功</ko-button>
    <ko-button @click="warning">警告</ko-button>
    <ko-button @click="info">消息</ko-button>
    <ko-button @click="error">错误</ko-button>
  </div>
</template>

<script>
import Message from './index';

export default {
  methods: {
    message() {
      Message({
        message: '这是一条消息提示',
        showClose: true,
        center: true,
        onClose: (a) => {
          console.log(a);
        },
      });
    },
    success() {
      Message.success({
        message: '这是一条消息提示',
      });
    },
    warning() {
      Message.warning({
        message: '这是一条消息提示',
      });
    },
    info() {
      Message.info({
        message: '这是一条消息提示',
      });
    },
    error() {
      Message.error({
        message: '这是一条消息提示',
      });
    },
  },
};
</script>