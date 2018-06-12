<template>
<div class="wrapper">
  <swiper :options="swiperOption" ref="mySwiper">
     <!-- slides -->
    <swiper-slide v-for="item in swiperLists" :key="item.id">
      <img class="spwier-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination">
    </div>
  </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: { swiperLists: Array },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3000
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.7%;
  background: #eee;
}

.spwier-img {
  width: 100%;
}
</style>

