<template>
  <div>
    <div class="demo-block">
      <h1>type</h1>
      <div>
        <ko-button>按钮</ko-button>
        <ko-button type="primary">按钮</ko-button>
        <ko-button type="success">按钮</ko-button>
        <ko-button type="warning">按钮</ko-button>
        <ko-button type="danger">按钮</ko-button>
        <ko-button type="info">按钮</ko-button>
        <ko-button round>按钮</ko-button>
        <ko-button disabled>按钮</ko-button>
      </div>
    </div>

    <div class="demo-block">
      <h1>plain</h1>
      <div>
        <ko-button plain>按钮</ko-button>
        <ko-button type="primary" plain>按钮</ko-button>
        <ko-button type="success" plain>按钮</ko-button>
        <ko-button type="warning" plain>按钮</ko-button>
        <ko-button type="danger" plain>按钮</ko-button>
        <ko-button type="info" plain>按钮</ko-button>
      </div>
    </div>

    <div class="demo-block">
      <h1>size</h1>
      <div>
        <ko-button size="large">按钮</ko-button>
        <ko-button size="normal">按钮</ko-button>
        <ko-button size="small">按钮</ko-button>
        <ko-button size="mini">按钮</ko-button>
      </div>
      <div style="margin-top:20px;">
        <ko-button block>按钮</ko-button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.demo-block {
  margin-bottom: 40px;
}
h1 {
  margin-bottom: 20px;
}
.ko-button {
  + .ko-button {
    margin-left: 10px;
  }
}
</style>