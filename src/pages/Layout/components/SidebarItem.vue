<template>
  <div class="menu-wrapper">
    <div v-for="item in routes" :key="item.path">
      <div v-if="!item.hidden && item.children">
        <el-menu
          mode="vertical"
          :default-active="routePath"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          :unique-opened="isUnique"
          active-text-color="#ffd04b"
        >
          <!-- <router-link
            :to="item.children[0].path"
            v-if="hasOneShowingChildren(item.children) && !item.children[0].children"
            :key="item.children[0].path"
          >
            <el-menu-item >
              <svg-icon
                v-if="item.children[0].meta && item.children[0].meta.icon"
                :icon-class="item.children[0].meta.icon"
              ></svg-icon>

              <span
                v-if="item.children[0].meta && item.children[0].meta.title"
                slot="title"
              >{{item.children[0].meta.title}}</span>
            </el-menu-item>
          </router-link>-->
          <router-link
            :to="item.children[0].path"
            v-if="hasOneShowingChildren(item.children) && !item.children[0].children"
            :key="item.children[0].path"
          >
            <el-menu-item :index="item.children[0].path">
              <svg-icon
                v-if="item.children[0].meta && item.children[0].meta.icon"
                :icon-class="item.children[0].meta.icon"
              ></svg-icon>
              <span
                v-if="item.children[0].meta && item.children[0].meta.title"
                slot="title"
              >{{item.children[0].meta.title}}</span>
            </el-menu-item>
          </router-link>
          <el-submenu v-else :index="item.name||item.path" :key="item.meta.title">
            <template slot="title">
              <div style="text-align: left;">
                <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
                <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
              </div>
            </template>

            <div v-for="child in item.children" :key="child.meta.title">
              <div v-if="!child.hidden">
                <sidebar-item
                  :is-nest="true"
                  class="nest-menu"
                  v-if="child.children&&child.children.length>0"
                  :routes="[child]"
                  :key="child.path"
                ></sidebar-item>
                <router-link v-else :to="child.path" :key="child.name">
                  <el-menu-item :index="child.path">
                    <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
                    <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
                  </el-menu-item>
                </router-link>
              </div>
            </div>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isUnique: true
    };
  },
  mounted: function() {
    this.getFeath();
  },
  computed: {
    isCollapse() {
      return this.$store.state.sidebarStatu;
    },
    routePath() {
      //   console.log("this====>", this.$route.path);
      return this.$route.path;
    }
  },
  methods: {
    handleOpen: function() {
      //   console.log("打开"); //打开菜单中下来的内容菜单
    },
    handleClose: function() {
      //   console.log("关闭"); //关闭菜单中下来的内容菜单
    },
    getFeath() {
      //   console.log("this.routes--->", this.routes);
    },
    // 过滤出只有一个孩子
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden;
      });
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    }
  }
};
</script>
<style scoped>
.menu-wrapper {
  text-align: left;
}
.el-submenu__title {
  text-align: left !important;
}
.svg-icon {
  margin-right: 16px;
}
</style>
