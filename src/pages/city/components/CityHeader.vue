<template>
<div>
  <div class="header">

    <router-link to="/" v-if="!keyword">
  <div class="iconfont left-icon">&#xe624;</div>
  </router-link>
  <div class="iconfont left-icon" v-else @click="exitSearch()">&#xe624;</div>

  <div class="header-center">城市选择</div>
</div>

<div class="search">
<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
</div>
<div class="search-content" v-show="keyword" ref="search">
  <ul>
    <li class="search-item" v-for="item in this.lists" :key="item.id" @click="changeCurrentCity(item.name)">{{item.name}}</li>
    <li class="search-item" v-show="this.hasNoData">未搜索到匹配城市数据</li>
  </ul>
</div>


</div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityHeader",
  props: {
    originCity: Object
  },
  data() {
    return {
      keyword: "",
      lists: [],
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
    },
    exitSearch() {
      this.keyword = "";
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
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
  },
  activated() {
    //当页面再次重新进入到该控制器的时候，需要执行的代码区域
    this.keyword = "";
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  width: 100%;
  background: $bgColor;
  height: $headerHeight;
  line-height: $headerHeight;
  color: #FFF;

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


