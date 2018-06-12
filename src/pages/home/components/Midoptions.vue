<template>
  <div class="options-wrapper">
    <div class="left-option">
      <div class="icon-content">
      <span class="iconfont">&#xe63f;</span><span class="fonttext">定位失败</span>
      </div>
    </div>
    <div class="right-option">
      <div class="icon-content">
      <span class="iconfont">&#xe655;</span><span class="fonttext">5折泡温泉</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeMidoptions"
};
</script>

<style lang="stylus" scoped>
.options-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 10%;
  background: #eee;

  .left-option, .right-option {
    position: relative;
    float: left;
    display: inline-block;
    width: 49.7%;
    height: 0;
    padding-bottom: 10%;
    margin-right: 0.3%;
    background: #fff;

    .icon-content {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      margin-top: 0.2rem;
    }

    .fonttext {
      margin-left: 0.05rem;
    }
  }
}
</style>
