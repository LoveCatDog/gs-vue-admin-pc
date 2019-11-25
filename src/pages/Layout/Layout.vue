<template>
  <div class="app-wrapper">
    <Navbar class="navbar-container" />
    <transition name="fade">
      <div :class="['main-container clearfix',{'wujia':isCollapse}]">
        <Sidebar class="sidebar-container"></Sidebar>
        <PageMain class="pagemain-container" />
      </div>
    </transition>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue"; //左侧菜单栏目
import Sidebar from "./components/Sidebar.vue"; //顶部公共部分
import PageMain from "./components/PageMain.vue"; //右侧内容区域
export default {
  data() {
    return {
      msg: "左右栏目"
    };
  },
  components: {
    Navbar,
    Sidebar,
    PageMain
  },
  computed: {
    isCollapse() {
      //   console.log("this", this);
      return this.$store.state.sidebarStatu;
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 200px;
}
.wujia {
  margin-left: 64px;
}
.navbar-container {
  transition: width 0.28s;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: #545c64;
}
</style>