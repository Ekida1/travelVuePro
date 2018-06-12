<template>
<div class="basement" ref="wrappers">
  <ul>
<li class="section-content">
  <div class="section-title">
    当前城市
  </div>
    <div class="button-list">
      <div class="button-wrapper">
        <div class="button" @click="changeCurrentCity()">{{this.currentCity}}</div>
      </div>
    </div>
</li>
<li class="section-content">
  <div class="section-title">
    热门城市
  </div>
  <div class="button-list">
      <div class="button-wrapper" v-for="item in this.originHotCity" :key="item.id">
        <div class="button" @click="changeCurrentCity(item.name)">{{item.name}}</div>
      </div>
    </div>
  </li>
  <li class="section-content" v-for="(sort, key) in this.originCity" :key="key" :ref="key">
  <div class="section-title">
    {{key}}
  </div>
    <ul class="item-list">
      <li class="item-button border-bottom" v-for="item in sort" :key="item.id" @click="changeCurrentCity(item.name)">
       {{item.name}}
      </li>
    </ul>
  </li>
  </ul>
</div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityBody",
  props: {
    originCity: Object,
    originHotCity: Array,
    pickedLetter: String
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  methods: {
    ...mapMutations(["changeCity"]),
    changeCurrentCity(city) {
      // this.$store.commit("changeCity", city);
      // this.$store.dispatch("changeCity", city);
      if (city) {
        this.changeCity(city);
      } else {
        this.changeCity(this.currentCity);
      }
      this.$router.push({
        path: "/",
        name: "Home"
      });
    }
  },
  watch: {
    pickedLetter() {
      if (this.pickedLetter) {
        const element = this.$refs[this.pickedLetter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrappers, {});
  },
  activated() {
    this.scroll.scrollTo(0, 0);
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.basement {
  overflow: hidden;
  position: absolute;
  top: 1.68rem;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;

  .section-content {
    width: 100%;

    .section-title {
      // overflow: hidden;
      height: 0.39rem;
      line-height: 0.39rem;
      padding-left: 0.2rem;
      font-size: 0.25rem;
      border-top: 0.01rem solid #ccc;
      border-bottom: 0.01rem solid #ccc;
      background: #eee;
      color: $darkTextColor;
    }

    .button-list {
      overflow: hidden;
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;

      .button-wrapper {
        float: left;
        width: 33.33%;

        .button {
          margin: 0.1rem;
          text-align: center;
          border: 0.02rem solid #ccc;
          padding: 0.1rem 0.1rem;
          border-border-radius: 0.06rem;
          ellipsis();
        }
      }
    }

    .item-list {
      .item-button {
        line-height: 0.6rem;
        padding-left: 0.2rem;
      }

      .border-bottom:not(:last-child) {
        border-bottom: 0.01rem solid #ccc;
      }
    }
  }
}
</style>


