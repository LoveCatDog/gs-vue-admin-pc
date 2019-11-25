<template>
  <div class="driver-list-main">{{handleMsg()}}</div>
</template>
<script>
export default {
  name: "driver-list-main",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
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