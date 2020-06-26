<template>
  <div>
    <ko-radio-group v-model="radio">
      <ko-radio :label="3">备选项</ko-radio>
      <ko-radio :label="6">备选项</ko-radio>
      <ko-radio :label="9">备选项</ko-radio>
    </ko-radio-group>
    <ko-radio :label="3" v-model="radio2">备选项</ko-radio>
    <ko-radio :label="6" v-model="radio2">备选项</ko-radio>
    <ko-radio :label="9" v-model="radio2">备选项</ko-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 6,
      radio2: 3,
    };
  },
};
</script>