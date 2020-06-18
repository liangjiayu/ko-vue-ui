<template>
  <div id="app">
    <div class="app-demo">
      <demo></demo>
    </div>
  </div>
</template>

<script>
import demo from '../src/components/button/demo/index';

export default {
  name: 'App',
  components: {
    demo: demo,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-demo {
  width: 1240px;
  margin: 0 auto;
  padding: 200px 0;
}
</style>
