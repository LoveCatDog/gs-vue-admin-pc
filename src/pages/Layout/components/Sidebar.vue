<template>
  <div class="sidebar_main">
    <header>
      <div class="navbar">
        <Hamburger
          class="hamburger-container"
          :toggleClick="TogglesSideBar"
          :isActive="currentModel"
        ></Hamburger>

        <el-breadcrumb separator-class="el-icon-arrow-right" style="flex:1 1;">
          <transition-group name="breadcrumb">
            <el-breadcrumb-item
              :to="{ path: item.path }"
              v-for="(item,index) in breadList"
              :key="index"
            >
              <span
                class="no-redirect"
                v-if="item.redirect === 'noredirect' || index ===breadList.length-1"
              >{{item.meta.title}}</span>
              <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
            </el-breadcrumb-item>
          </transition-group>
        </el-breadcrumb>
        <div class="user-info">
          <el-dropdown>
            <span class="el-dropdown-link flex">
              <img src="@/assets/images/user_header_logo.png" class="user-img" />
              <span class="user-name">会吃鱼的猫</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <p @click="handleOutLogin">退出</p>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Hamburger from "@/components/utils/Hamburger";
export default {
  data() {
    return {
      breadList: [] // 路由集合
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  computed: {
    currentModel() {
      return this.$store.state.sidebarStatu;
    }
  },
  components: {
    Hamburger
  },
  methods: {
    handleOutLogin: function() {
      this.$store.dispatch("LogOut").then(() => {
        this.$router.push("/login");
      });
    },
    TogglesSideBar() {
      this.$store.commit("handleSidebar");
    },
    isHome(route) {
      return route.meta.title === "首页";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页\
      //   console.log("wujia", matched);
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      } else {
        let arr = [];
        matched = arr.concat(matched[0]);
      }

      this.breadList = matched;
    }
  },
  created() {
    this.getBreadcrumb();
  }
};
</script>
<style lang="scss" scoped>
.sidebar_main {
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .navbar {
    height: 60px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 1px solid #eaecef;
    padding: 10px 20px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-info {
      position: relative;
      cursor: pointer;
      color: #fff;
      font-size: 20px;
      .logo {
        width: 34px;
        margin-right: 10px;
      }
    }
    .user-info {
      // flex: 1 1;
      .nav-title {
        margin-left: 30px;
        color: #fff;
      }
      .user-img {
        width: 30px;
        box-shadow: 0px 0px 2px #fff;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.7);
        margin-right: 10px;
        cursor: pointer;
      }
      .user-name {
        margin-right: 30px;
        color: #999;
        cursor: pointer;
      }
    }
  }
}
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner a {
  color: #97a8be;
  cursor: text;
  &:hover {
    color: #97a8be;
  }
}
</style>