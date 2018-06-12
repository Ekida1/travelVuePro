
<template>
<div class="header">
<div class="header-left">
  <span class="iconfont left-icon">&#xe624;</span>
   </div>
<div class="header-input">
  <span class="iconfont input-icon">&#xe632;</span>
  请输入城市/景点/游玩/主题
  </div>
  <router-link to="/city">
    <div class="header-right">
      {{this.city}}
      <span class="iconfont right-icon">&#xe64a;</span>
    </div>
  </router-link>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"])
  }
};
</script>


<style lang="stylus" scoped>

@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .left-icon {
      margin-left: 0.18rem;
      font-size: 0.4rem;
    }
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: right;
    text-align: center;
    margin-top: 0.02rem;
    color: #fff;

    .right-icon {
      font-size: 0.24rem;
    }
  }

  .header-input {
    flex: 1;
    background: #ffffff;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
    color: #ccc;

    .input-icon {
      padding-left: 0.2rem;
    }
  }
}
</style>
