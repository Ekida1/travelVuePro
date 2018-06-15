<template>
  <div>
  <div class="detail-tickets border-bottom">
     <div class="tickets-title"><span class="iconfont staricon">&#xe64b;</span>去哪儿推荐</div>
     <ul>
       <li class="tickets-list" @click="popOverDetailCard">
         <div class="tickets-info">
         【全天通票】国色天乡陆地乐园成人游乐套票
         </div>
         <div class="tickets-right">
         <span class="tickets-price">108</span>
         <button class="check-in-btn" @click="popOverPayCard">预定</button>
         <!-- <el-button type="text" class="check-in-btn" @click="dialogVisible = true">预定</el-button> -->
         </div>
         <span class="tag">自营</span>
         <span class="tag">随时退</span>
       </li>
       <li class="tickets-list">
         <div class="tickets-info">
         【全天通票】国色天乡陆地乐园学生游乐套票
         </div>
         <div class="tickets-right">
         <span class="tickets-price">98</span>
         <button class="check-in-btn">预定</button>
         <!-- <el-button type="text" class="check-in-btn" @click="dialogVisible = true">预定</el-button> -->
         </div>
         <span class="tag">自营</span>
         <span class="tag">随时退</span>
       </li>
     </ul>
   </div>

   <pay-pop-over :payPopOverShow="payPopOverShow" @closePopOver="closePopOver"></pay-pop-over>
   <detail-pop-over :detailPopOverShow="detailPopOverShow" :popOverPayCard="popOverPayCard" @closePopOver="closePopOver"></detail-pop-over>
   <div class="mask" v-show="payPopOverShow || detailPopOverShow" @click="closePopOver"></div>
  </div>
</template>

<script>
import PayPopOver from "common/popOver/PayPopOver";
import DetailPopOver from "common/popOver/DetailPopOver";
export default {
  name: "BlockRecommend",
  components: {
    PayPopOver,
    DetailPopOver
  },
  data() {
    return {
      payPopOverShow: false,
      detailPopOverShow: false
    };
  },
  methods: {
    popOverPayCard(e) {
      this.detailPopOverShow = false;
      this.payPopOverShow = true;
      e.stopPropagation(); //非IE浏览器
      window.event.cancelBubble = true; //IE浏览器
    },
    closePopOver() {
      this.payPopOverShow = false;
      this.detailPopOverShow = false;
    },
    popOverDetailCard() {
      this.detailPopOverShow = true;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.detail-tickets {
  margin-top: 0.2rem;
  width: 100%;
  min-height: 1rem;
  background: #ffffff;

  .tickets-title {
    float: left;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.35rem;
    padding-left: 0.2rem;
    border-bottom: 0.01rem solid #DBDBDB;

    .staricon {
      color: orange;
      font-size: 0.4rem;
    }
  }

  .tickets-list {
    overflow: hidden;
    position: relative;
    padding: 0.25rem 0.2rem 0.25rem 0.2rem;
    border-bottom: 0.01rem solid #DBDBDB;

    .tickets-info {
      width: 75%;
      line-height: 0.45rem;
      font-size: 0.32rem;
      color: #616161;
    }

    .tickets-right {
      position: absolute;
      top: 15%;
      right: 0;
      width: 25%;
      margin-right: 0.1rem;
      text-align: center;

      .tickets-price {
        font-size: 0.5rem;
        color: #FFA500;
      }

      .tickets-price:before {
        content: '￥';
        font-size: 0.3rem;
      }

      .check-in-btn {
        width: 1.5rem;
        height: 0.57rem;
        line-height: 0.57rem;
        display: inline-block;
        color: #fff;
        border-radius: 0.1rem;
        font-size: 0.28rem;
        // background: -webkit-linear-gradient(left, #FFB90F, #FF8C00); /* Safari 5.1 - 6.0 */
        // background: -o-linear-gradient(right, #FFB90F, #FF8C00); /* Opera 11.1 - 12.0 */
        // background: -moz-linear-gradient(right, #FFB90F, #FF8C00); /* Firefox 3.6 - 15 */
        // background: linear-gradient(to right, #FFB90F, #FF8C00); /* 标准的语法 */
        background-image: linear-gradient(130deg, #ffab1e 40%, #ff8c12 100%);
      }
    }

    .tag {
      display: inline-block;
      font-size: 0.23rem;
      border: 0.001rem solid $bgColor;
      padding: 0.04rem;
      margin-top: 0.1rem;
      color: $bgColor;
    }
  }
}

.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 101;
}
</style>

