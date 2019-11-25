<template>
  <div class="driver-list-main">
    {{handleMsg()}}
    <input
      type="file"
      id="wujia"
      @change="importTable($event)"
      accept=".csv, .xls, .xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
    />
    <label for="laozhao">
      <el-button size="small" type="primary">点击导入Excel</el-button>
    </label>

    <el-table :data="excelData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { exportTable, getTable } from "@/util/export_table";
export default {
  name: "driver-list-main",
  data() {
    return {
      msg: "",
      excelData: []
    };
  },
  methods: {
    handleMsg: function() {
      return this.$route.meta.title;
    },
    // 将对应的中文key转化为自己想要的英文key
    importTable(obj) {
      var data = exportTable(obj);
      setTimeout(function() {
        console.log("获取表的数据", data);
      }, 1000);
      //   this.excelData = data;
    }
  }
};
</script>
<style lang="scss" scoped>
.driver-list-main {
}
</style>