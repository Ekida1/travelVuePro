<template>
  <div calss="basement">
  <block-index></block-index>
  <block-recommend></block-recommend>
  <!-- <block-tickets></block-tickets> -->
    <div class="detail-tickets border-bottom">
     <div class="tickets-title"><span class="tickets-icon"></span>套票</div>
       <accordion-item></accordion-item>
        <accordion-item></accordion-item>
    </div>
  </div>
</template>
<script>
import BlockIndex from "./BlockIndex";
// import BlockTickets from "./BlockTickets";
import BlockRecommend from "./BlockRecommend";
import AccordionItem from "common/accordion/accordion";
export default {
  name: "DetailBody",
  components: {
    BlockIndex,
    BlockRecommend,
    // BlockTickets,
    AccordionItem
  }
};
</script>
<style lang="stylus" scoped>
.basement {
  width: 100%;

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
      padding-left: 0.6rem;
      border-bottom: 0.01rem solid #DBDBDB;

      .tickets-icon {
        display: inline-block;
        position: absolute;
        width: 0.36rem;
        height: 0.36rem;
        top: 0.3rem;
        left: 0.2rem;
        background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat; // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        background-size: 0.4rem 3rem;
      }
    }
  }
}
</style>


