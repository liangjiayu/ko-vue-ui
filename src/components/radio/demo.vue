<template>
  <div>
    <ko-radio v-model="radio" label="1" disabled>备选项</ko-radio>
    <ko-radio v-model="radio" :label="2">备选项</ko-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 2,
    };
  },
};
</script>


