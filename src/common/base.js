exports.install = (Vue, options) => {
  Vue.prototype.getNowDate = () => {
    let nowDate = new Date();
    let nowDateObj = {
      nowYear: nowDate.getFullYear(), //获取完整的年份(4位,1970-????)
      nowMonth: nowDate.getMonth() + 1, //获取当前月份(0-11,0代表1月)
      nowDate: nowDate.getDate(), //获取当前日(1-31)
      nowDay: nowDate.getDay(), //获取当前星期X(0-6,0代表星期天)
    }
    return nowDateObj
  };
};
