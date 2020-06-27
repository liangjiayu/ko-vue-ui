<template>
  <div>
    <ko-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
    >全选</ko-checkbox>
    <div style="margin: 15px 0;"></div>
    <ko-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <ko-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</ko-checkbox>
    </ko-checkbox-group>
  </div>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>