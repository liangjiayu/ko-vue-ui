<template>
  <div id="app">
    <div class="app-demo">
      <demo></demo>
    </div>
  </div>
</template>

<script>
// import demo from '../src/components/button/demo/index';
// import demo from '../src/components/icon/demo.vue';
// import demo from '../src/components/iconx/demo.vue';
// import demo from '../src/components/message-box/demo'
// import demo from '../src/components/message/demo';
// import demo from '../src/components/alert/demo';
// import demo from '../src/components/row/demo';
import demo from '../src/components/radio/demo';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    demo: demo,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-demo {
  max-width: 1240px;
  margin: 0 auto;
  padding: 200px 0;
}
</style>
