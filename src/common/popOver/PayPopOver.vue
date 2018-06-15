<template>
  <div class="basement">
    <transition name="PopOver">
    <div class="payPopOver" v-show="payPopOverShow">
      <span class="iconfont closeicon" @click="closePopOver">&#xe670;</span>
      <div class="payPopOverTitle">【全天通票】国色天乡陆地乐园成人游乐套票</div>
      <p>
        <span class="priceNumber">108</span><span class="litterBox"><span class="boxLeft">赠券</span><span class="boxRight">18</span></span>
      </p>
      <div class="DateTitle">价格日历</div>
      <ul class="payPopOverDateList">
        <li class="datebox" @click="pickDate"><div class="dateText">今天</div><div class="datecontent">{{today}}</div></li>
        <li class="datebox" @click="pickDate"><div class="dateText">明天</div><div class="datecontent">{{tomorrow}}</div></li>
        <li class="datebox" @click="pickDate"><div class="dateText">后天</div><div class="datecontent">{{aftertomorrow}}</div></li>
        <li class="datebox"><div class="otherdate">其他日期</div></li>
      </ul>
      <div class="payPopOverFooter">需要在游玩当天的14:00前预订：预定后2小时才能入围</div>
      <button class="payBtn">立即预订</button>
    </div>
     </transition>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "PayPopOver",
  data() {
    return {
      todayDateArray: ["1", "1", "2000"],
      tomorrowDateArray: ["1", "2", "2000"],
      afterTomorrowDateArray: ["1", "3", "2000"]
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
    },
    pickDate() {}
  },
  created() {
    this.todayDateArray = moment()
      .format("l")
      .split("/");
    this.today = this.todayDateArray[0] + "月" + this.todayDateArray[1] + "日";
    this.tomorrowDateArray = moment()
      .add(1, "days")
      .format("l")
      .split("/");
    this.tomorrow =
      this.tomorrowDateArray[0] + "月" + this.tomorrowDateArray[1] + "日";
    this.afterTomorrowDateArray = moment()
      .add(1, "days")
      .add(1, "days")
      .format("l")
      .split("/");
    this.aftertomorrow =
      this.afterTomorrowDateArray[0] +
      "月" +
      this.afterTomorrowDateArray[1] +
      "日";
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
    animation: slide-in 0.5s;
  }

  .PopOver-leave-active {
    animation: slide-out 0.8s;
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
      padding: 0.15rem 0.15rem;
    }

    .payPopOverTitle {
      min-height: 0.7rem;
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

      .datebox {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 0.8rem;
        line-height: 0.5rem;
        border: 0.01rem solid $ProGrey;
        padding: 0.03rem 0.35rem;
        margin: 0.1rem 0.08rem;
        border-radius: 0.1rem;
        white-space: nowrap;

        .dateText {
          height: 50%;
          font-size: 0.28rem;
          color: $darkTextColor;
        }

        .datecontent {
          height: 50%;
          font-size: 0.24rem;
          color: $ProGrey;
        }

        .otherdate {
          line-height: 0.8rem;
          font-size: 0.28rem;
          color: $darkTextColor;
        }
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

