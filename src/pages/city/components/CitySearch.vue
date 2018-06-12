<template>
<div>
<div class="search">
<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
</div>
<div class="search-content" v-show="this.searchShow" ref="search">
  <ul>
    <li class="search-item" v-for="item in lists" :key="item.id" @click="changeCurrentCity(item.name)">{{item.name}}</li>
    <li class="search-item" v-show="this.hasNoData">未搜索到匹配城市数据</li>
  </ul>
</div>
</div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    originCity: Object
  },
  data() {
    return {
      keyword: "",
      lists: [],
      searchShow: false,
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.lists.length;
    }
  },
  methods: {
    ...mapMutations(["changeCity"]),
    changeCurrentCity(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push({
        path: "/",
        name: "Home"
      });
      this.searchShow = false;
      this.keyword = "";
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.searchShow = true;
      this.timer = setTimeout(() => {
        let result = [];
        for (let i in this.originCity) {
          this.originCity[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.lists = result;
      }, 100);
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.search, {});
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  background: $bgColor;
  height: 0.62rem;
  line-height: 0.62rem;
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  color: #FFF;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    border-radius: 0.06rem;
    padding: 0 0.1rem 0 0.1rem;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    color: #666;
  }
}

.search-content {
  z-index: 9;
  overflow: hidden;
  position: absolute;
  top: 1.67rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
    border-bottom: 0.01rem solid #eee;
  }
}
</style>


