<template>
  <div class="basement">
    <transition name="PopOver">
      <div class="detailPopOver" v-show="detailPopOverShow">
        <span class="iconfont closeicon" @click="closePopOver">&#xe670;</span>


        <div class="popOverHeader">
          <div class="detailPopOverTitle">【全天通票】国色天乡陆地乐园成人游乐套票</div>
          <div class="moreTicktes">
            <span class="litterBox">赠券</span><span class="litterTips">登录后购买产品返代金券￥18</span>
          </div>
        </div>

        <div class="popOverBody" ref="detailPopOverCardBody">
          <ul class="scrollContent">
            <li class="orderDescript">
              <p class="itemTitle"> 预订说明</p>
              <div class="descriptItem">
                <div class="itemLeft">预订时间:</div>
                <div class="itemRight">
                  <span class="tipsBox">可订明日</span>
                  <p>需要在游玩当天的14:00前预订；预订后2小时候才能入园</p>
                </div>
              </div>
              <div class="descriptItem">
                <div class="itemLeft">有效期:</div>
                <div class="itemRight">
                  <div>游玩日期当天有效</div>
                </div>
              </div>
              <div class="descriptItem">
                <div class="itemLeft">限购政策:</div>
                <div class="itemRight">
                  <div>同一身份证每7天最多预预订3份
                    <br> 同一手机号每7天最多预预订3份
                  </div>
                </div>
              </div>
            </li>

            <li class="needToKnow">
              <p class="itemTitle">入园须知</p>
              <p class="descriptItem enterMethods"><span>入园方式:</span><span class="tipsBox">需要提前换票入园</span></p>
              <p class="descriptItem">①凭商家确认短信、身份证到团队接待室进行换票</p>
              <p class="descriptItem">②在陆地乐园检票口(永辉超市旁)凭票入园</p>
              <p class="descriptItem">商家短信:<span>商家确认短信会在下单成功后1分钟内发送</span></p>
              <p class="descriptItem">景区开放时间:<span>全天开放</span></p>
            </li>

            <li class="useDescript">
              <p class="itemTitle">使用说明</p>
              <p class="useDescContent">
                【取票时间】
                <br> 09:30~16:00
                <br> 1、50岁以上老年人无法体验设备
                <br> 2、体重超过180斤游客无法体验设备
                <br> 3、孕妇无法体验设备
                <br> 4、1.2米以下儿童免费入园，乘坐设备需单独购票，1.2≤身高＜1.5米儿童乘坐部分设备须家长购票陪同
                <br> 套卡（押金5元/张）---人像采集点凭套卡本人采集头像---检票入园---限本人刷卡乘玩设备---离园后退卡退押金（限当日营业结束前至陆地乐园售票窗口处退换，逾期不退，如有损坏，不予退押）。
                <br> 5、冰雪奇园（入园须租赁防寒服20元/件）
              </p>
            </li>

            <li class="returnDescript">
              <p class="itemTitle">退款说明</p>
              <div class="descriptItem">
                <div class="itemLeft">退款规则:</div>
                <div class="itemRight">
                  <span class="tipsBox">随时退</span>
                  <p>90天内支持随时退款，经核实如未取票，可免费取消,多张票的订单，不支持部分退款</p>
                </div>
              </div>
              <div class="descriptItem">
                <div class="itemLeft">极速处理:</div>
                <div class="itemRight">
                  <span>去哪儿网承诺，提交申请后一个工作日内完成退款申请的审核</span>
                </div>
              </div>
            </li>

            <li class="costDescript">
              <p class="itemTitle">费用说明</p>
              <p class="costContent">
                国色天乡陆地乐园成人游乐套票
                <br> 魔环过山车、球幕影院、眼镜蛇过山车、回旋过山车、尖叫海盗船、超级秋千、流星过山车、旋转天梯、驼峰过山车、云霄马戏团、摩托过山车、时空大摆锤、旋风过山车、水上过山车、幻境漂流、花园过山车、欢腾碰碰车、空中漫步、环游世界、树蛙跳楼机、情侣飞车、快乐天空、儿童欢乐地带、欢腾木马、咖啡杯、海上遨游、闪金车、激光转马、丛林探险、立环跑车、阳光农场、迷你魔盘、12座海盗船。其中：魔环过山车、球幕影院、空中漫步、环游世界、阳光农场只能乘玩1次。具体开放项目以景区当天公布为准。
              </p>
            </li>
          </ul>
        </div>
         <div class="popOverFooter">
            <div class="footerLeft"><em class="priceicon">在线支付</em><span class="priceNumber">108</span></div>
            <div class="footerRight">立即预订</div>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "DetailPopOver",
  props: {
    detailPopOverShow: Boolean
  },
  methods: {
    closePopOver() {
      this.popPvershow = this.detailPopOverShow;
      this.popPvershow = false;
      this.$emit("closePopOver", this.popPvershow);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.detailPopOverCardBody, {});
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.basement {
  @keyframes slide-in {
    0% {
      transform: translateY(13rem);
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
      transform: translateY(13rem);
    }
  }

  .PopOver-enter-active {
    animation: slide-in 1s;
  }

  .PopOver-leave-active {
    animation: slide-out 1s;
  }

  .detailPopOver {
    width: 100%;
    height: 10rem;
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

    .popOverHeader {
      padding: 0.4rem 0.3rem 0.4rem 0.15rem;
      border-bottom: 0.005rem solid #EAEAEA;

      .detailPopOverTitle {
        font-size: 0.35rem;
        ellipsis();
      }

      .moreTicktes {
        padding-top: 0.3rem;

        .litterBox {
          overflow: hidden;
          margin: 0.04rem 0.06rem 0.04rem 0;
          padding: 0.02rem 0.04rem;
          border: 0.02rem solid $ProRed;
          color: $ProRed;
          font-size: 0.24rem;
          white-space: nowrap;
          border-radius: 2px;
        }

        .litterTips {
          margin-left: 0.1rem;
          font-size: 0.24rem;
          color: $ProGrey;
        }
      }
    }

    .popOverBody {
      padding: 0 0.3rem;
      position: absolute;
      top: 1.78rem;
      left: 0;
      bottom: 1rem;
      right: 0;
      overflow: hidden;
      color: #616161;

      .itemTitle {
        position: relative;
        font-size: 0.34rem;
        color: $darkTextColor;
        height: 0.48rem;
        line-height: 0.48rem;
        padding: 0.2rem 0;
      }

      .itemTitle:before {
        content: '';
        background-color: $bgColor;
        position: absolute;
        top: 32%;
        left: -0.18rem;
        width: 0.06rem;
        height: 0.32rem;
      }

      .orderDescript, .returnDescript {
        .descriptItem {
          display: flex;
          line-height: 0.4rem;

          .itemLeft {
            width: 1.5rem;
          }

          .itemRight {
            flex: 1;
          }
        }
      }

      .needToKnow {
        .descriptItem {
          padding: 0.2rem 0.1rem;
          color: #616161;
        }
      }

      .useDescContent {
        line-height: 0.35rem;
      }

      .costDescript {
        .costContent {
          line-height: 0.4rem;
        }
      }
    }

    .popOverFooter {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1rem;
      line-height: 1rem;
      width: 100%;
      background: $ProYellow;

      .footerLeft {
        width: 50%;
        text-align: center;
        background: #fff;

        .priceicon {
          color: #999;
          font-size: 0.24rem;
        }

        .priceNumber {
          color: $ProYellow;
        }

        .priceNumber:before {
          content: '￥';
          font-size: 0.2rem;
        }
      }

      .footerRight {
        width: 50%;
        background: $ProYellow;
        color: #fff;
        text-align: center;
      }
    }
  }
}
</style>
