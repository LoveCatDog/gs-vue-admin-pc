<template>
  <div>
    <h3>动画正在加载中</h3>
    <!-- 1.数组数据还未获取到，做出预加载的动画 -->
    <el-carousel :interval="3000" type="card" height="200px" class="common-mt-md">
      <!-- // 实际显示的内容-跑马灯 -->
      <el-carousel-item v-for="item in movieArr" :key="item" class="text-center">
        <img v-bind:src="item" alt="电影封面" class="ticket-index-movie-img" />
      </el-carousel-item>
      <!-- 当 movirArr的数组为空的时候，做出的预加载 loading  -->
      <div v-if="!movieArr.length" class="ticket-index-movie-loading">
        <span class="el-icon-loading"></span>
      </div>
    </el-carousel>

    <!-- 2. 按钮状态的判断，按钮能不能点的问题 -->
    <p v-if="!multipleSelection.length">
      <el-button type="success" round disabled>导出</el-button>
    </p>
    <!-- 不能点， 判断数组为空 -->
    <p v-else>
      <el-button type="success" round>导出</el-button>
    </p>
    <!-- 可以点， 判断数组为不为空 -->

    <!-- 3.像jquery 一样，追加dom (vue 是以数据为导向的，应该摆脱jquery的 dom的繁杂操作) -->
    <el-form ref="form" :model="ruleForm" label-width="80px">
      <el-form-item label="时间1" prop="name">
        <!-- //绑定模型，检测输入的格式 -->
        <el-input v-model="ruleForm.name"></el-input>
        <!-- //绑定方法，增加dom的操作 -->
        <span class="el-icon-plus ticket-manage-timeinput" @click="addTime(this)"></span>
      </el-form-item>
      <el-form-item label="时间2" prop="name" v-for="item in timeArr" :key="item">
        <!-- //timeArr数组与数据就渲染下面的dom，没有就不显示 -->
        <el-input v-model="ruleForm.name"></el-input>
        <span class="el-icon-minus ticket-manage-timeinput" @click="minusTime(this)"></span>
      </el-form-item>
    </el-form>

    <!-- 4. 追加class , 场景 在循环某个列表时候，某个列表有class,绑定一个方法，可以支持传参数 -->
    <li
      v-for="section in sections"
      :key="section.id"
      @click="hideParMask"
      :class="getSectionId(section.id)"
    >
      <router-link
        :to="{ name: 'learning', params: { sectionId: section.id}, query: { courseId: courseId}}"
      >
        <!-- /users/:sectionId-->
        <span>{{section.orderInCourse}}.{{section.sectionNumber}}</span>
        <span>{{section.name}}</span>
      </router-link>
    </li>

    <!-- 5.子->父组件的通信，vue.$emit vue.on -->
    <!-- 6.父-> 子 -->
    <!-- 7.错误路由的处理，重定向， 在router里添加一个路由信息 -->
    <!--  8. dom 里拼接css-->
    <div class="img" :style="{background: 'url(' + logoFileURL + ')'}"></div>
    <!-- 9. 监听滚动事件 -->
    <!-- 10.监听输入框输入值的变化 -->
    <input
      type="text"
      placeholder="请输入正确的内容"
      id="materialSearch"
      @keyup.enter="search"
      @input="search($event)"
    />
    <input type="text" v-model="demo" />

    <!--  @input="search($event)" -->
    <div>模糊搜索得出的值:{{materialName1}}{{demo}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movieArr: [],
      multipleSelection: ["11"],
      ruleForm: {
        name: 0
      },
      timeArr: [1, 2],
      sections: [
        { sectionNumber: "100分", name: "吴佳", id: 10, orderInCourse: "数学" }
      ],
      courseId: 222,
      logoFileURL: "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
      scrolled: false,
      show: true,
      input: "",
      materialName1: "",
      value: "",
      demo: ""
    };
  },
  computed: {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll); //监听滚动事件
  },
  watch: {
    demo(val) {
      this.value = this.demo;
    }
  },
  methods: {
    search: function(event) {
      //模糊搜索
      console.log("event", event.data);
      //方法一：直接通过event.data可以获得文本内容
      if (event.data != null) {
        this.materialName1 = event.target.value;
      }
      // //方法二：获取DOM对象取value值
      // this.materialName = event.currentTarget.value;
      // //方法三：通过js获取
      // this.materialName = document.getElementById("materialSearch").value;
    },
    handleScroll() {
      console.log(this.search, this.input);
      this.scrolled = window.scrollY > 0;
      if (this.scrolled) {
        console.log("this.scrolled", window.scrollY);
        this.show = false;
      }
    },
    getSectionId(sectionId) {
      return {
        active: sectionId === 11
      };
    },
    hideParMask() {},
    addTime() {
      this.ruleForm.name++;
      console.log("addTime", this);
    },
    minusTime() {
      this.ruleForm.name--;
      console.log("minusTime", this);
    }
  }
};
</script>
<style scoped>
.img {
  width: 200px;
  height: 200px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>