<template>
  <section class="page-main">
    <div class="page-wrap">
      <router-view></router-view>
    </div>
  </section>
</template>
<script>
export default {
  name: "page_main"
};
</script>
<style lang="scss" scoped>
.page-main {
  background: #f8f8f8;
  margin-top: -16px;

  .page-wrap {
    padding: 15px;
  }
}
</style>