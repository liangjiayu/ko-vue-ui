<template>
  <div>
    <ko-checkbox v-model="checked" true-label="yes" false-label="no">备选项</ko-checkbox>
  </div>
</template>


<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>