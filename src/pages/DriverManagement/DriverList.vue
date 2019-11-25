<template>
  <div class="driver-list-main">
    <header class="driver-list-search">
      <el-row>
        <el-button size="small" v-for="(item) in carSearchBtnList" :key="item.id">{{item.name}}</el-button>
        <el-button size="small" type="primary">查询</el-button>
      </el-row>
    </header>
    <div>
      <div class="drive-header flex">
        <p class="drive-title">列表展示</p>
        <div>
          <el-button size="small" type="primary">添加</el-button>
          <el-button size="small" type="primary" @click="export2Excel">导出模板</el-button>
          <el-button size="small" type="primary">
            <input
              id="upload"
              type="file"
              ref="import_table"
              @change="handleImportTable(this)"
              :auto-upload="false"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />导入
          </el-button>

          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :file-list="fileList"
            :on-success="uploadSuccess"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          </el-upload>
          <!--       action="https://jsonplaceholder.typicode.com/posts/" -->
        </div>
      </div>

      <el-table
        id="out-table"
        border
        ref="multipleTable"
        :data="tableData"
        :header-cell-style="{background:'#ccc',color: ' #333'}"
        :show-header="true"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :highlightCurrentRow="true"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="编号" width="80">
          <template slot-scope="scope">{{ scope.row.number }}</template>
        </el-table-column>
        <el-table-column label="司机姓名" width="120">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="性别" width="60">
          <template slot-scope="scope">{{ scope.row.sex }}</template>
        </el-table-column>
        <el-table-column label="身份证" width="120">
          <template slot-scope="scope">{{ scope.row.id_card }}</template>
        </el-table-column>
        <el-table-column label="生日" width="120">
          <template slot-scope="scope">{{ scope.row.born_date }}</template>
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip width="120"></el-table-column>
        <el-table-column prop="car_type" label="类型" width="50"></el-table-column>
        <el-table-column prop="contact_team" label="关联车队" width="120"></el-table-column>
        <el-table-column prop="driver" label="绑定司机" width="120"></el-table-column>
        <el-table-column label="登记时间" width="120">
          <template slot-scope="scope">{{ scope.row.create_date }}</template>
        </el-table-column>
        <el-table-column label="详情" width="60">
          <template slot-scope="scope">
            <i class="el-icon-view" :v-model="scope.row.date"></i>
          </template>
        </el-table-column>
        <el-table-column label="编辑" width="60">
          <template slot-scope="scope">
            <i class="el-icon-edit" :v-model="scope.row.date"></i>
          </template>
        </el-table-column>
        <el-table-column label="删除" width="60">
          <template slot-scope="scope">
            <i class="el-icon-delete" :v-model="scope.row.date"></i>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :hide-on-single-page="true"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "driver-list-main",
  data() {
    return {
      msg: "",
      fileList: [], //上传文件列表
      currentPage4: 1, //当前选中哪页
      carSearchBtnList: [
        { id: 1, name: "车辆品牌" },
        { id: 2, name: "车辆拍照" },
        { id: 3, name: "车辆类型" },
        { id: 4, name: "登记车主" }
      ], //四个搜索的按钮选项
      tableData: [
        {
          id: "1", //司机id
          number: "0001", //编号
          name: "会吃鱼的猫", //司机姓名
          sex: "女", //性别
          id_card: "361*****3014", //身份证
          born_date: "1997.12.28", //生日
          phone: "1877463634", //手机号
          address: "深圳", //地址
          car_type: "自营", //类型
          contact_team: "烽火狼烟", //关联车队
          driver: "龙湖区", //绑定司机
          create_date: "2019.11.21" //登记时间
        },
        {
          id: "1", //司机id
          number: "0001", //编号
          name: "会吃鱼的猫", //司机姓名
          sex: "女", //性别
          id_card: "361*****3014", //身份证
          born_date: "1997.12.28", //生日
          phone: "1877463634", //手机号
          address: "深圳", //地址
          car_type: "自营", //类型
          contact_team: "烽火狼烟", //关联车队
          driver: "龙湖区", //绑定司机
          create_date: "2019.11.21" //登记时间
        },
        {
          id: "1", //司机id
          number: "0001", //编号
          name: "会吃鱼的猫", //司机姓名
          sex: "女", //性别
          id_card: "361*****3014", //身份证
          born_date: "1997.12.28", //生日
          phone: "1877463634", //手机号
          address: "深圳", //地址
          car_type: "自营", //类型
          contact_team: "烽火狼烟", //关联车队
          driver: "龙湖区", //绑定司机
          create_date: "2019.11.21" //登记时间
        },
        {
          id: "1", //司机id
          number: "0001", //编号
          name: "会吃鱼的猫", //司机姓名
          sex: "女", //性别
          id_card: "361*****3014", //身份证
          born_date: "1997.12.28", //生日
          phone: "1877463634", //手机号
          address: "深圳", //地址
          car_type: "自营", //类型
          contact_team: "烽火狼烟", //关联车队
          driver: "龙湖区", //绑定司机
          create_date: "2019.11.21" //登记时间
        }
      ]
    };
  },
  methods: {
    uploadSuccess: function(value) {
      console.log("上传成功", value);
    },
    handlePreview: function(file) {
      console.log("file", file);
    },
    //   导入表格
    handleImportTable(event) {
      let _this = this;
      let inputDom = this.$refs.import_table;
      let file = event.currentTarget.files[0];
      var reader = new FileReader();
      var wb; //读取完成之后的数据
      FileReader.prototype.readAsBinaryString(file => {
        console.log("file", file);
        // var binary = "";
        // var rABS = false; //是否将文件读取为二进制字符串
        // var pt = this;
        // var wb; //读取完成的数据
        // var outdata;
        // var reader = new FileReader();
        // console.log("reader", reader);
        // reader.onload = function(e) {
        //   var bytes = new Uint8Array(reader.result);
        //   console.log("bytes", bytes);
        // };
      });
    },
    //分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //   点击按钮  导出excel表格：
    export2Excel: function() {
      let tables = document.getElementById("out-table");
      let table_book = this.$XLSX.utils.table_to_book(tables);
      var table_write = this.$XLSX.write(table_book, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        this.$FileSaver.saveAs(
          new Blob([table_write], { type: "application/octet-stream" }),
          "sheetjs.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, table_write);
      }
      return table_write;
    },
    formatJson: function(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    tableRowClassName: function({ row, rowIndex }) {
      //   if (rowIndex === 1) {//给table中下标为1的行添加样式
      //     return "table-header-row";
      //   }
      return "";
    },
    handleMsg: function() {
      return this.$route.meta.title;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
<style lang="scss" scoped>
.driver-list-main {
  text-align: left;
  padding: 30px;
  background: #fff;
  .driver-list-search {
    padding-bottom: 30px;
    border-bottom: 1px solid #ccc;
  }
  .drive-header {
    padding: 10px 0;
    .drive-title {
      font-weight: 600;
      font-size: 14px;
    }
  }
}
</style>