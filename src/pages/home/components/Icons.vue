<template>
<swiper :options="swiperOption">
  <swiper-slide v-for="(iconGroup,index) in CutIconImageAarrays" :key="index">
    <div class="icons-group">
      <div class="icon" v-for="item in iconGroup" :key="item.id">
        <img class="icon-img" :src="item.imgUrl" alt="">
        <span class="icon-text">{{item.name}}</span>
        </div>
    </div>
  </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</template>
<script>
export default {
  name: "HomeIcons",
  props: { iconImgs: Array },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: false,
        autoplay: false
      }
    };
  },
  computed: {
    CutIconImageAarrays() {
      let iconGroups = []; //用来装处理完的数组
      let currData = []; //子数组用来存分割完的数据
      for (let i = 0; i < this.iconImgs.length; i++) {
        currData.push(this.iconImgs[i]);
        //在这里求8的余数,如果i不等于0,且可以整除 或者考虑到不满8个或等于8个的情况就要加上  i等于当前数组长度-1的时候
        if ((i != 0 && (i + 1) % 8 == 0) || i == this.iconImgs.length - 1) {
          //把currData加到iconGroups里
          iconGroups.push(currData);
          //在这里清空currData
          currData = [];
        }
      }
      return iconGroups;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons-group {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  padding-top: 2%;
  font-size: 0;
  background: #fff;

  .icon {
    position: relative;
    float: left;
    display: inline-block;
    overflow: hidden;
    width: 25%;
    padding-bottom: 8%;

    .icon-img {
      position: relative;
      left: 0.27rem;
      padding-top: 2%;
      width: 65%;
    }

    .icon-text {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 3%;
      height: 0.44rem;
      line-height: 0.44rem;
      font-size: 0.28rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis();
    }
  }
}
</style>
