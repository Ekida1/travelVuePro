<template>
  <div>
       <div class="detail-tickets border-bottom">
     <div class="tickets-title"><span class="tickets-icon"></span>套票</div>
     <!-- <ul>
       <li class="tickets-list">
         <div class="tickets-info">
         【全天通票】国色天乡陆地乐园成人游乐套票<span class="tickets-tips">每个身份证手机号7天内只可购买3张</span>
         </div>
         <div class="tickets-right">
         <span class="tickets-price">108</span>
          <span class="iconfont bottom-icon">&#xe60c;</span>
          </div>
         </li>
       <li class="tickets-list">
         <div class="tickets-info">
         【全天通票】国色天乡陆地乐园学生游乐套票<span class="tickets-tips">每个身份证手机号7天内只可购买3张</span>
         </div>
         <div class="tickets-right">
         <span class="tickets-price">98</span>
          <span class="iconfont bottom-icon">&#xe60c;</span>
          </div>
         </li>
     </ul> -->



   </div>
  </div>
</template>
<script>
export default {
  name: "BlockTickets",
  components: {
    AccordionItem
  }
};
</script>
<style lang="stylus" scoped>
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
</style>

