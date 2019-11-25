<template>
  <div>
    <div class="app-container">
      <img src="@/assets/images/404.jpg" alt="404" class="img-style" />
      <h2 class="title">咦~页面不见了~</h2>
      <p>
        <el-button style="margin-top: 20px" type="primary" round @click="handleGoMain">返回首页</el-button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "wrongPage",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    handleGoMain() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 600px;
  position: absolute;
  margin: -45px 0 0 -50%;
  top: 10%;
  left: 50%;
  .title {
    color: #000;
    font-size: 45px;
    margin: 45px 0 20px;
  }
  .img-style {
    width: auto;
    height: 400px;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
