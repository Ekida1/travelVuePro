<template>
<div>
  <ul>
    <li class="section" v-for="item in WeekendDataLists" :key="item.id">
      <img class="item-img" :src="item.imgUrl" alt="">
      <div class="content-wrapper">
        <p class="content-title">{{item.title}}</p>
        <p class="content-info">{{item.content}}</p>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: { WeekendDataLists: Array },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.section {
  overflow: hidden;
  width: 100%;
  height: 4.5rem;
  background: #fff;

  .item-img {
    width: 100%;
    height: 70%;
  }

  .content-wrapper {
    height: 30%;

    .content-title {
      padding: 0.1rem;
      line-height: 0.54rem;
      font-size: 0.35rem;
      ellipsis();
    }

    .content-info {
      padding-left: 0.1rem;
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }
  }
}
</style>
