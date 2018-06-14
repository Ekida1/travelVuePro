<template>
<div>
      <div class="detail-topindex border-bottom">
    <div class="detail-score">
      <span class="score-number">5.0</span><span class="score-text">分&nbsp;&nbsp;超赞</span>
      <span class="iconfont right-icon">&#xe65e;</span>
      <span class="review-text">4324条评论</span>
    </div>
    <div class="detail-summary">
      <span class="score-text">景点简介</span>
      <span class="iconfont right-icon">&#xe65e;</span>
      <span class="info-text">开放时间、贴士</span>
    </div>
  </div>
  <div class="detail-location border-bottom">
      <span class="iconfont banner-icon">&#xe63f;</span>
      <span class="detail-content">四川省成都市武侯区科华北路608-6-8号(棕北小区2单元11号)</span>
      <span class="iconfont right-icon">&#xe65e;</span>
  </div>
  </div>
</template>
<script>
export default {
  name: "BlockIndex"
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/varibles.styl';

.detail-topindex {
  overflow: hidden;
  height: 1.1rem;
  line-height: 1.2rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-bottom: -0.5rem;
  border-radius: 0.2rem 0.2rem 0 0;
  background: #ffffff;

  .detail-score {
    position: relative;
    bottom: 0.2rem;
    float: left;
    width: 49.5%;
    background: #ffffff;
    overflow: hidden;

    .score-number {
      font-size: 0.45rem;
      color: $ProYellow;
    }

    .score-text {
      font-size: 0.25rem;
      color: $ProYellow;
    }

    .right-icon {
      position: absolute;
      top: 0.18rem;
      right: 0;
      margin-right: 0.1rem;
    }

    .review-text {
      position: absolute;
      left: 0;
      bottom: -0.4rem;
      font-size: 0.21rem;
      color: $ProGrey;
    }
  }

  .detail-score:after {
    content: '';
    width: 0.007rem;
    height: 60%;
    background-color: #DBDBDB;
    position: absolute;
    left: 99%;
    top: 30%;
  }

  .detail-summary {
    position: relative;
    bottom: 0.2rem;
    float: left;
    width: 49.5%;
    background: #ffffff;
    overflow: hidden;

    .score-text {
      font-size: 0.25rem;
      color: $ProYellow;
      margin-left: 0.2rem;
    }

    .right-icon {
      position: absolute;
      top: 0.18rem;
      right: 0;
    }

    .info-text {
      position: absolute;
      left: 0;
      bottom: -0.4rem;
      margin-left: 0.2rem;
      font-size: 0.21rem;
      color: $ProGrey;
    }
  }
}

.detail-location {
  display: flex;
  height: 1rem;
  line-height: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  background: #ffffff;

  .banner-icon {
    font-size: 0.32rem;
    margin-right: 0.1rem;
  }

  .detail-content {
    flex: 1;
    ellipsis();
  }

  .right-icon {
    float: right;
  }
}
</style>


