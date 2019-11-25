<template>
  <div>
    <el-menu
      mode="vertical"
      :collapse="isCollapse"
      :show-timeout="200"
      :default-active="$route.path"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <SidebarItem :routes="routess1" />
      <!-- <div class="header" @click="changeModel" :class="currentModel">我是vuex{{currentModel}}</div> -->
      <!-- <Animation />
      <VuexFun />-->
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
// import Animation from "../../../components/animation.vue"; //添加图片正在加载的动画效果
// import VuexFun from "../../../components/vuex.vue"; //介绍 vuex里面的四大金刚：State， Mutations，Actions，Getters
export default {
  components: {
    SidebarItem
    // Animation,
    // VuexFun
  },
  methods: {
    changeModel() {
      // document.body.className='night'
      this.$store.commit("increment"); //改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
    }
  },
  computed: {
    ...mapGetters(["sidebar"]),
    routess1() {
      return this.$router.options.routes;
    },

    //  vuex 相当于全局注入 vuex 然后取这里面的值
    currentModel() {
      return this.$store.state.count;
    },
    isCollapse() {
      return this.$store.state.sidebarStatu;
    }
  }
};
</script>