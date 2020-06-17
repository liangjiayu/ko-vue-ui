<template>
  <div id="app">
    <div>
      <ko-button @click="aa">111</ko-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    aa() {
      console.log(this);
    },
  },
};
</script>

<style lang="scss">
</style>
