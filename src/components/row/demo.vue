<template>
  <div>
    <ko-row :gutter="20">
      <ko-col :span="2">
        <div class="grid-content bg-purple-light"></div>
      </ko-col>
      <ko-col flex>
        <div class="grid-content bg-purple-light">123</div>
      </ko-col>
    </ko-row>

    <ko-row :gutter="20">
      <ko-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </ko-col>
      <ko-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </ko-col>
    </ko-row>
  </div>
</template>

<style lang="scss" scoped>
.ko-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.ko-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>