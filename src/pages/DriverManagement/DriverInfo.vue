<template>
  <div class="driver-list-main">
    <el-table ref="brandTable" :data="list" style="width: 100%" v-loading="listLoading" border>
      <el-table-column label="编号" width="100" align="center">
        <template slot-scope="scope">{{scope.row.brand_id}}</template>
      </el-table-column>
      <el-table-column label="品牌名称" align="center" width="100">
        <template slot-scope="scope">{{scope.row.name}}</template>
      </el-table-column>
      <el-table-column label="品牌logo" width="200" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.picture" style="width:160px;height:120px" alt />
        </template>
      </el-table-column>
      <el-table-column label="排序" width="100" align="center">
        <template slot-scope="scope">{{scope.row.sort}}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="listQuery.page"
      :page-sizes="[2,4,6]"
      :page-size="listQuery.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
import { getBrandsList, updateBrands } from "@/api/drive";
export default {
  name: "driver-list-main",
  data() {
    return {
      msg: "",
      listQuery: {
        page: 1, //第一页数
        size: 2 //一页十条数据
      },
      list: "",
      total: "",
      currentPage: 1 //当前第几页
    };
  },
  created() {
    this.getList();
  },
  methods: {
    handleSizeChange(val) {
      this.listQuery.size = val;
      this.listQuery.page = 1;
      this.getList();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
      console.log(`当前页: ${val}`);
    },
    // 获取列表
    getList() {
      getBrandsList(this.listQuery).then(res => {
        console.log("res", res);
        this.list = res.data.list;
        this.total = res.data.total;
      });
    },
    handleMsg: function() {
      return this.$route.meta.title;
    }
  }
};
</script>
<style lang="scss" scoped>
.driver-list-main {
}
</style>