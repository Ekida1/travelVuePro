<template>
<div>
  <ul>
    <li class="section" v-for="item in RecommendDataLists" :key="item.id">

      <img class="item-img" :src="item.imgUrl" alt="">
      <div class="content-wrapper">
        <p class="content-title">{{item.title}}</p>
        <p class="content-info">{{item.content}}</p>
        <router-link to="/detail">
        <button class="content-button">查看详情</button>
         </router-link>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: { RecommendDataLists: Array },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.section {
  display: flex;
  display: -webkit-flex;
  overflow: hidden;
  width: 100%;
  height: 1.9rem;
  background: #fff;

  .item-img {
    float: left;
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .content-wrapper {
    flex: 1;
    -webkit-flex: 1;
    min-width: 0;
    padding: 0.1rem;

    .content-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .content-info {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .content-button {
      line-height: 0.44rem;
      background: #ff9300;
      margin-top: 0.15rem;
      padding: 0.1rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
