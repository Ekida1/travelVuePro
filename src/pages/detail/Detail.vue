<template>
  <div>
    <detail-header :headerShow="headerShow"></detail-header>
    <detail-body @change="handleScroll"></detail-body>
  </div>
</template>
<script>
import DetailBody from "./components/DetailBody";
import DetailHeader from "./components/DetailHeader";
export default {
  name: "Detail",
  data() {
    return {
      headerShow: true
    };
  },
  components: {
    DetailBody,
    DetailHeader
  },
  methods: {
    getImgsInfo() {
      this.$http({
        url: "/api/",
        method: "GET"
      }).then(
        res => {
          res = res.body;
          if (res.ret && res.data) {
          }
        },
        () => {
          console.log("err");
        }
      );
    },
    handleScroll(headerShow) {
      this.headerShow = headerShow;
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
