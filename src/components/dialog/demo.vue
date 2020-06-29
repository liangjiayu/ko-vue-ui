<template>
  <div>
    <ko-button type="text" @click="dialogVisible = true">点击打开 Dialog</ko-button>

    <ko-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <ko-button @click="dialogVisible = false">取 消</ko-button>
        <ko-button type="primary" @click="dialogVisible = false">确 定</ko-button>
      </span>
    </ko-dialog>
  </div>
</template>


<script>
import MessageBox from '../message-box';

export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      MessageBox.alert({ title: '123' });
      // this.$confirm('确认关闭？')
      //   .then(() => {
      //     done();
      //   })
      //   .catch(() => {});
    },
  },
};
</script>