<template>
  <div>
    <ko-button @click="alert">消息提示</ko-button>
    <ko-button @click="confirm">确认消息</ko-button>
    <ko-button @click="html">使用 HTML 片段</ko-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { MessageBox } from './index';

export default Vue.extend({
  methods: {
    alert() {
      MessageBox.alert({
        title: '标题名称',
        message: '这是一段内容',
      }).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    confirm() {
      MessageBox.confirm({
        title: '提示',
        message: '此操作将永久删除该文件, 是否继续?',
        type: 'warning',
      }).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    html() {
      MessageBox.alert({
        title: '标题名称',
        message: '<h1>这是一段内容</h1>',
        dangerouslyUseHTMLString: true,
      }).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
});
</script>