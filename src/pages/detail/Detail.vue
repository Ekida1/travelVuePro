<template>
  <div class="basement" ref="wrappers">
    <ul class="wrapper">
    <li is="detail-header"></li>
    <li is="detail-banner"></li>
    <li class="content">
    <detail-body></detail-body>
    </li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import DetailBanner from "./components/DetailBanner";
import DetailHeader from "./components/DetailHeader";
import DetailBody from "./components/DetailBody";
export default {
  name: "Detail",
  data() {
    return {};
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailBody
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
    }
  }
};
</script>
<style lang="stylus" scoped>
.basement {
  width: 100%;

  .content {
    position: relative;
    top: -0.1rem;
    width: 100%;
    height: 100vh;
    border-radius: 0.2rem 0.2rem 0 0;
    background: #eee;
  }
}
</style>
