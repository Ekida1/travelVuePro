<template>
  <div class="basement">
    <div class="tickets-index" @click="toggle()">
      <div class="tickets-info">【全天通票】国色天乡陆地乐园成人游乐套票<span class="tickets-tips">每个身份证手机号7天内只可购买3张</span>
      </div>
       <div class="tickets-right">
         <span class="tickets-price">108</span>
          <span class="iconfont" v-if="this.status">&#xe65f;</span>
          <span class="iconfont" v-else>&#xe60c;</span>
          </div>
    </div>
      <div class="silderItem" v-show="status">
        <ul>
          <!-- <li v-for="(index,v) in childItems" :key="index">{{v+index}}</li> -->
          <li class="tickets-list">
         <div class="tickets-info">
         【全天通票】国色天乡陆地乐园成人游乐套票
         </div>
         <div class="tickets-right">
         <span class="tickets-price">108</span>
         <button class="check-in-btn">预定</button>
         </div>
         <span class="tag">自营</span>
         <span class="tag">随时退</span>
       </li>
         <li class="tickets-list">
         <div class="tickets-info">
         【全天通票】国色天乡陆地乐园成人套卡(49项目)(49个项目)
         </div>
         <div class="tickets-right">
         <span class="tickets-price">108</span>
         <button class="check-in-btn">预定</button>
         </div>
         <span class="tag">自营</span>
         <span class="tag">随时退</span>
       </li>
                <li class="tickets-list">
         <div class="tickets-info">
         【极速出票、自动发码】国色天乡陆地乐园成人套卡(三期)
         </div>
         <div class="tickets-right">
         <span class="tickets-price">108</span>
         <button class="check-in-btn">预定</button>
         </div>
         <span class="tag">自营</span>
         <span class="tag">随时退</span>
       </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  data: function() {
    return {
      status: false,
      childItems: ["子级菜单", "子级菜单1", "子级菜单2", "子级菜单3"]
    };
  },
  methods: {
    //切换滑块
    toggle: function() {
      this.status = !this.status;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.tickets-index {
  overflow: hidden;
  position: relative;
  padding: 0.25rem 0.2rem 0.25rem 0.2rem;
  border-bottom: 0.01rem solid #DBDBDB;

  .tickets-info {
    width: 75%;
    line-height: 0.45rem;
    font-size: 0.32rem;
    color: #616161;

    .tickets-tips {
      font-size: 0.24rem;
      color: #888;
    }
  }

  .tickets-right {
    position: absolute;
    top: 30%;
    right: 0;
    width: 25%;
    margin-right: 0.1rem;
    text-align: right;

    .tickets-price {
      font-size: 0.5rem;
      color: #FFA500;
    }

    .tickets-price:before {
      content: '￥';
      font-size: 0.3rem;
    }

    .tickets-price:after {
      content: '起';
      font-size: 0.23rem;
      color: #888;
    }
  }
}

.silderItem {
  background: #eee;

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
        color: #fff;
        border-radius: 0.1rem;
        font-size: 0.28rem;
        line-height: 0.6rem;
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
</style>

