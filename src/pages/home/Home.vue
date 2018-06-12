<template>
<div class="basement">
  <home-header></home-header>
  <home-swiper :swiperLists="swiperLists"></home-swiper>
  <home-icons :iconImgs="iconImgs"></home-icons>
  <home-mid-options></home-mid-options>
  <div class="colum-description">热门推荐</div>
  <home-recommend :RecommendDataLists="RecommendDataLists"></home-recommend>
  <div class="colum-description">周末去哪</div>
  <home-weekend :WeekendDataLists="WeekendDataLists"></home-weekend>


</div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeMidOptions from "./components/Midoptions";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeMidOptions,
    HomeWeekend
  },
  data() {
    return {
      lastCity: "",
      swiperLists: [],
      iconImgs: [],
      RecommendDataLists: [],
      WeekendDataLists: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      this.$http({
        url: "/api/index.json?city=" + this.city, //判断每次http请求是否是同一个城市，如果是，则不发请求，在后面的activated生命周期函数里面体现
        method: "GET"
      }).then(
        res => {
          res = res.body;
          if (res.ret && res.data) {
            const data = res.data;
            this.swiperLists = data.swiperLists;
            this.iconImgs = data.iconImgs;
            this.RecommendDataLists = data.RecommendDataLists;
            this.WeekendDataLists = data.WeekendDataLists;
          }
        },
        () => {
          console.log("err");
        }
      );
    }
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.basement {
  width: 100%;
  background: #eee;

  .colum-description {
    color: $darkTextColor;
    font-weight: 600;
    padding: 0.3rem;
  }
}
</style>
