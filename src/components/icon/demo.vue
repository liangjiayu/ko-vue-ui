<template>
  <div>
    <div class="main-wrap">
      <div class="box" v-for="item in nameArray" :key="item">
        <div class="box-bd">
          <ko-icon :name="item"></ko-icon>
        </div>
        <div class="box-name">{{ item }}</div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
const nameArray = require('@/utils/icon.json');

export default Vue.extend({
  data() {
    return {
      nameArray: nameArray,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-wrap {
  display: flex;
  flex-wrap: wrap;
  .box {
    width: 120px;
    margin: 0 15px 20px;
    margin-bottom: 20px;
    color: #333;
    &:hover {
      color: #409eff;
    }
  }
  .box-bd {
    padding: 30px 0;
    border-radius: 6px;
    background-color: #f8f9fa;
    text-align: center;
    font-size: 30px;
    line-height: 0;
  }
  .box-name {
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
  }
}
</style>