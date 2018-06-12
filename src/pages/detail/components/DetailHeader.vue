<template>
<div>
    <div class="header-back" v-if="headerShow">
      <router-link to="/">
      <span class="iconfont back-icon">&#xe600;</span>
      </router-link>
    </div>
    <div class="header-bar" v-else :style="opacityStyle">
      <router-link to="/">
  <div class="iconfont left-icon">&#xe624;</div>
      </router-link>
  <div class="header-center">国色天乡·陆地乐园</div>
    </div>
</div>
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      headerShow: false,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      if (top > 10) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.headerShow = false;
      } else {
        this.headerShow = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-back {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;

  .back-icon {
    float: left;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    font-size: 0.8rem;
    color: #515151;
    opacity: 0.6;
  }
}

.header-bar {
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100%;
  background: $bgColor;
  height: $headerHeight;
  line-height: $headerHeight;
  color: #FFF;
  z-index: 10;

  .left-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    // float: left;
    margin-left: 0.18rem;
    font-size: 0.32rem;
    color: #fff;
  }

  .header-center {
    text-align: center;
  }
}
</style>

