<template>
  <div class="basement" @click="closeGallary">
    <div class="warpper">
      <swiper class="swiper-containers" :options="swiperOption">
        <swiper-slide  v-for="(img,index) in imgs" :key="index">
          <img class="gallary-img" :src="img" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    </div>
</template>
<script>
export default {
  name: "CommonGallary",
  data() {
    return {
      galShow: true,
      timer: null,
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        loop: false,
        autoplay: false,
        zoom: true,
        touchRatio: 0.8,
        autoHeight: true,
        preventLinksPropagation: true
      }
    };
  },
  props: {
    gallaryShow: Boolean,
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    this.mySwiper = new Swiper(".swiper-containers", {
      // onTap: (swiper, event) => {
      //   this.$emit("exitGallary");
      // }
    });
  },
  methods: {
    closeGallary() {
      this.$emit("exitGallary");
    }
  }
};
</script>
<style lang="stylus" scoped>
.basement >>> .swiper-container {
  overflow: visible;
}

.basement {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  z-index: 101;

  .warpper {
    width: 100%;
    // height: 0;
    // padding-bottom: 150%;
    background: #000;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
