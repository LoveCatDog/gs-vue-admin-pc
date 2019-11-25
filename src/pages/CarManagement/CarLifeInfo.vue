<template>
  <div class="driver-list-main">
    {{handleMsg()}}
    <h3>格式化时间：{{getTimeDate()}}</h3>
    <h5>格式化：{{getTimeFont()}}</h5>
  </div>
</template>
<script>
import { getTime, formatTime } from "@/util/date";
export default {
  name: "driver-list-main",
  data() {
    return {
      msg: "",
      time: ""
    };
  },
  mounted() {
    this.getTimeDate();
  },

  methods: {
    getTimeDate: function() {
      return getTime("2019.12.28");
    },
    getTimeFont: function() {
      return formatTime(new Date());
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