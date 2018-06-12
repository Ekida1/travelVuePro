<template>
   <div class="basement"  ref="wrappers">
     <ul class="wrapper">
       <li>
         <img class="header-img" src="//img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_600x330_5aa6e477.jpg" alt="" @click="handleGallaryShow">
          <div class="banner-info">
            <div class="banner-title">成都欢乐谷（AAAA景区）</div>
            <div class="banner-number"><span class="iconfont banner-icon">&#xe626;</span>39</div>
          </div>
       </li>
     </ul>
    <gallary v-if="gallaryShow" :imgs="imgs" @exitGallary="handleExitGallary"></gallary>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Gallary from "common/gallary/Gallary";
export default {
  name: "DetailBody",
  data() {
    return {
      headerShow: true,
      gallaryShow: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_r_800x800_d6a9ed62.jpg",
        "http://img1.qunarzz.com/sight/p0/1704/5a/5a403b1b05953f84a3.img.jpg_r_800x800_648ce632.jpg",
        "http://img1.qunarzz.com/sight/p0/1704/dc/dcc530fecc5e41c3a3.img.jpg_r_800x800_0f58b7f7.jpg"
      ]
    };
  },
  components: {
    Gallary
  },
  methods: {
    handleGallaryShow() {
      this.gallaryShow = true;
    },
    handleExitGallary() {
      this.gallaryShow = false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrappers, { probeType: 3 });
        this.scroll.on("scroll", pos => {
          if (pos.y < -10) {
            this.headerShow = false;
          } else {
            this.headerShow = true;
          }
        });
      }
    });
  },
  watch: {
    headerShow() {
      this.$emit("change", this.headerShow);
    }
  }
};
</script>
<style lang="stylus" scoped>
.basement {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;

  .wrapper {
    position: relative;

    .header-img {
      width: 100%;
    }

    .banner-info {
      display: flex;
      position: absolute;
      top: 3.8rem;
      left: 0;
      right: 0;
      line-height: 0.6rem;
      color: #fff;

      .banner-title {
        flex: 1;
        font-size: 0.32rem;
        padding-left: 0.2rem;
        padding-top: 0.1rem;
      }

      .banner-number {
        line-height: 0.4rem;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, 0.8);
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        margin-top: 0.2rem;
        margin-bottom: 0.1rem;
        margin-right: 0.1rem;
        font-size: 0.24rem;

        .banner-icon {
          font-size: 0.24rem;
        }
      }
    }
  }
}
</style>
