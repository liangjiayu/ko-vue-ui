<template>
  <div>
    <div>
      <ko-alert title="提示的文案提示的文案" type="success" show-icon></ko-alert>
      <ko-alert title="提示的文案提示的文案" type="info" show-icon></ko-alert>
      <ko-alert title="提示的文案提示的文案" type="warning" show-icon></ko-alert>
      <ko-alert title="提示的文案提示的文案" type="error" show-icon></ko-alert>
    </div>
    <div>
      <ko-alert title="提示的文案提示的文案" type="success" effect="dark"></ko-alert>
      <ko-alert title="提示的文案提示的文案" type="info" effect="dark" :closable="true"></ko-alert>
      <ko-alert title="提示的文案提示的文案" type="warning" effect="dark"></ko-alert>
      <ko-alert title="提示的文案提示的文案" type="error" effect="dark"></ko-alert>
    </div>
    <div>
      <ko-alert title="提示的文案提示的文案" type="success" :closable="false"></ko-alert>
      <ko-alert title="提示的文案提示的文案" type="success" :closable="true"></ko-alert>
      <ko-alert title="提示的文案提示的文案" type="success" close-text="知道了"></ko-alert>
      <ko-alert title="提示的文案提示的文案" type="success" center show-icon></ko-alert>
    </div>
    <div>
      <ko-alert title="提示的文案" type="success" show-icon description="文字说明文字说明文字说明文字说明文字说明文字说明"></ko-alert>
      <ko-alert title="提示的文案" type="info" show-icon description="文字说明文字说明文字说明文字说明文字说明文字说明"></ko-alert>
      <ko-alert title="提示的文案" type="warning" show-icon description="文字说明文字说明文字说明文字说明文字说明文字说明"></ko-alert>
      <ko-alert title="提示的文案" type="error" show-icon description="文字说明文字说明文字说明文字说明文字说明文字说明"></ko-alert>
    </div>
    <div>
      <ko-alert type="success" show-icon>
        <div>文字说明文字说明文字说明文字说明文字说明文字说明</div>
        <template v-slot:title>
          <div>提示的文案</div>
        </template>
      </ko-alert>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.ko-alert {
  margin-bottom: 20px;
}
</style>