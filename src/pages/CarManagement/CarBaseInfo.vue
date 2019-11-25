<template>
  <div class="driver-list-main">{{handleMsg()}}</div>
</template>
<script>
import { getPomiseTest } from "@/api/car.js";
export default {
  name: "driver-list-main",
  data() {
    return {
      msg: ""
    };
  },
  created() {
    this.getFetch();
  },
  methods: {
    getFetch: function() {
      this.$axios
        .get("http://jsonplaceholder.typicode.com/users")
        .then(response => {
          console.log(response);
          return response.status;
        })
        .then(res => {
          console.log("res", res);
        })
        .catch(error => {
          console.log("error", error);
        })
        // 不管状态如何，都会执行的操作
        .finally(data => {
          console.log("data", data);
        });
      const promise = new Promise(function(resolve, reject) {
        try {
          throw new Error("抛出异常");
        } catch (e) {
          reject(e);
        }
      });
      promise.catch(function(error) {
        console.log("error===>", error);
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