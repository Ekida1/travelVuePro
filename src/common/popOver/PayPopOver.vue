<template>
  <div class="basement">
    <transition name="PopOver">
    <div class="payPopOver" v-show="payPopOverShow">
      <span class="iconfont closeicon" @click="closePopOver">&#xe670;</span>
      <h5 class="payPopOverTitle">【全天通票】国色天乡陆地乐园成人游乐套票</h5>
      <p>
        <span class="priceNumber">108</span><span class="litterBox"><span class="boxLeft">赠券</span><span class="boxRight">18</span></span>
      </p>
      <div class="DateTitle">价格日历</div>
      <ul class="payPopOverDateList">
        <li>今天</li>
        <li>明天</li>
        <li>后天</li>
        <li>其他日期</li>
      </ul>
      <div class="payPopOverFooter">需要在游玩当天的14:00前预订：预定后2小时才能入围</div>
      <button class="payBtn">立即预订</button>
    </div>
     </transition>
  </div>
</template>
<script>
export default {
  name: "PayPopOver",
  data() {
    return {
      dialogVisible: false
    };
  },
  props: {
    payPopOverShow: Boolean
  },
  methods: {
    closePopOver() {
      this.popPvershow = this.payPopOverShow;
      this.popPvershow = false;
      this.$emit("closePopOver", this.popPvershow);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.basement {
  @keyframes slide-in {
    0% {
      transform: translateY(4rem);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(4rem);
    }
  }

  .PopOver-enter-active {
    animation: slide-in 1s;
  }

  .PopOver-leave-active {
    animation: slide-out 1s;
  }

  .payPopOver {
    width: 100%;
    min-height: 4rem;
    background: #ffffff;
    z-index: 105;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    .closeicon {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.2rem 0.2rem;
    }

    .payPopOverTitle {
      padding: 0.4rem 0.3rem 0 0.15rem;
      font-size: 0.35rem;
      ellipsis();
    }

    p {
      padding: 0.05rem 0 0.3rem 0.15rem;

      .priceNumber {
        font-size: 0.35rem;
        color: $ProYellow;
      }

      .priceNumber:before {
        content: '￥';
        font-size: 0.2rem;
      }

      .priceNumber:after {
        content: '/张';
        font-size: 0.2rem;
        color: $ProGrey;
      }

      .litterBox {
        border: 0.01rem solid $ProOrange;
        font-size: 0.2rem;
        text-align: center;
        margin-left: 0.1rem;

        .boxLeft {
          color: #ffffff;
          background: $ProOrange;
        }

        .boxRight {
          color: $ProOrange;
          padding: 0 0.05rem;
        }

        .boxRight:before {
          content: '￥';
          margin-right: -0.05rem;
        }
      }
    }

    .DateTitle {
      padding: 0 0 0.1rem 0.15rem;
    }

    .payPopOverDateList {
      display: flex;
      justify-content: center;
      width: 100%;

      li {
        height: 0.8rem;
        line-height: 0.8rem;
        border: 0.01rem solid $ProGrey;
        padding: 0.03rem 0.5rem;
        margin: 0.1rem 0.08rem;
        font-size: 0.24rem;
        border-radius: 0.1rem;
        // background: $bgColor;
      }
    }

    .payPopOverFooter {
      color: $bgColor;
      font-size: 0.23rem;
      padding: 0.1rem 0.15rem;
    }

    .payBtn {
      height: 1rem;
      line-height: 1rem;
      width: 100%;
      color: #ffffff;
      font-size: 0.38rem;
      background: $ProYellow;
    }
  }
}
</style>

