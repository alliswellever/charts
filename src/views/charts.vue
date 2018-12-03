<template>
  <section class="statement">
    <section class="statement-section conversion">
        <div class="conversion-title">
          <h1><span class="num">102</span><span class="text">.37万</span></h1>
          <p>昨日同步数据量（条）</p>
        </div>
          <ul class="conversion-content">
            <li class="item">
              <h5>已对接单位(家)</h5>
              <p>15</p>
            </li>
            <li class="item">
              <h5>已对接系统(个)</h5>
              <p>158</p>
            </li>
            <li class="item">
              <h5>数据条数(条)</h5>
              <p>153</p>
            </li>
          </ul>
    </section>
    <section class="statement-section">
      <p class="public-title">系统数据量TOP10</p>
      <div id="barChart" :style="{width: '100%', height: '300px'}"></div>
    </section>
    <section class="statement-section">
      <p class="public-title">七日数据增量</p>
      <div id="lineChart" :style="{width: '100%', height: '300px'}"></div>
    </section>
    <section class="statement-section convert-ratio">
        <ul class="ratio-ul">
            <li class="ratio-list">
                <p>本周</p>
            </li>
            <li class="ratio-list">
                <p>上周</p>
            </li>    
        </ul>
    </section>
    <section class="statement-section">
      <p class="public-title">接口动态</p>
      <!-- <div id="myChart" :style="{width: '300px', height: '300px'}"></div> -->
    </section>
  </section>
</template>

<script>
// import {
//   getConversion,
// } from 'api/bossStatement/statement'

let timestamp = new Date().getTime()
const publicParams = {
  sign_method: 'md5',
  timestamp: timestamp
}

export default {
  data() {
    return {

    }
  },
  mounted() {
    this.drawBarChart();
    this.drawLineChart();
  },
  methods: {
    drawBarChart(){
        // 基于准备好的dom，初始化echarts实例
        let barChart = this.$echarts.init(document.getElementById('barChart'))
        // 绘制图表
        barChart.setOption({
            title: { text: '' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
    drawLineChart(){
        // 基于准备好的dom，初始化echarts实例
        let lineChart = this.$echarts.init(document.getElementById('lineChart'))
        // 绘制图表
        let base = +new Date(2016, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let valueBase = Math.random() * 300;
        let valueBase2 = Math.random() * 50;
        let data = [];
        let data2 = [];

        for (let i = 1; i < 10; i++) {
            let now = new Date(base += oneDay);
            let dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');

            valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
            valueBase <= 0 && (valueBase = Math.random() * 300);
            data.push([dayStr, valueBase]);

            valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
            valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
            data2.push([dayStr, valueBase2]);
        } 
        lineChart.setOption(
          {
            xAxis: {
              type: 'time',
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    inside: true
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    inside: true,
                    formatter: '{value}\n'
                },
                z: 10
            },
            grid: {
                top: 110,
                left: 15,
                right: 15,
                height: 160
            },
            dataZoom: [{
                type: 'inside',
                throttle: 50
            }],
            series: [
                {
                    name:'模拟数据',
                    type:'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#1441C0'
                        }
                    },
                    stack: 'a',
                    areaStyle: {
                        normal: {
                            color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#1441C0'
                            }, {
                                offset: 1,
                                color: '#34D8C0'
                            }])
                        }
                    },
                    data: data
                }
              ]
          });       
    }
    /*
    * 参数名排序
    */
    // keySort(obj) {
    //   let arr = new Array()
    //   let num = 0
    //   for (let i in obj) {
    //     arr[num] = i
    //     num++
    //   }
    //   let sortArr = arr.sort()
    //   let sortObj = {}
    //   for (let i in sortArr) {
    //     sortObj[sortArr[i]] = obj[sortArr[i]]
    //   }
    //   return sortObj
    // },

    /*
    *拼装参数名和参数值
    */
    // togetherKeyAndVal(obj) {
    //   let str = ''
    //   for (let i in obj) {
    //     str = str + i + obj[i]
    //   }
    //   return str
    // },

    /*
    * 生成签名
    */
    // createSignature(str) {
    //   let newStr = 'ziaRZcPNUB8i0PvWc1x0LXQJKpjSUcfW' + str + 'ziaRZcPNUB8i0PvWc1x0LXQJKpjSUcfW'
    //   let signatureStr = hexMD5(newStr)
    //   let signatureEnd = signatureStr.toLocaleUpperCase()
    //   return signatureEnd
    // },

    /*
    * 生成参数
    */
    // createParams(companyId) {
    //   let dataParams = {}
    //   Object.assign(dataParams, publicParams)
    //   dataParams.company_id = companyId
    //   let keySortDatas = this.keySort(dataParams)
    //   let togetherStr = this.togetherKeyAndVal(keySortDatas)
    //   let signatureStr = this.createSignature(togetherStr)
    //   dataParams.signature = signatureStr
    //   return dataParams
    // },

    /*
    * 获取本周的日历
    */
    // getWeekDate(week) {
    //   let now = new Date()
    //   let year = now.getFullYear()
    //   let month = now.getMonth() + 1
    //   let date = now.getDate()
    //   let day = now.getDay()

    //   if (day !== 0) {
    //     week = week + (day - 1)
    //   } else {
    //     week = week + day
    //   }
    //   if (day) {
    //     if (month > 1) {
    //       month = month
    //     } else {
    //       year = year - 1
    //       month = 12
    //     }
    //   }
    //   now.setDate(now.getDate() - week)
    //   year = now.getFullYear()
    //   month = now.getMonth() + 1
    //   date = now.getDate()

    //   let weekDay = year + '/' + (month < 10 ? '0' + month : month) + '/' + (date < 10 ? '0' + date : date)
    //   return weekDay
    // },

    /*
    * 比较大小
    */
    // isCompareBlo(num, maxnum, minnum) {
    //   if (num <= maxnum && num >= minnum) {
    //     return true
    //   }
    //   return false
    // },

    /*
    * math
    */
    // mathToNum(num) {
    //   let intNum = Math.round(num)
    //   let positiveNum = Math.abs(intNum)
    //   return positiveNum
    // },

    /*
    * 价格数字添加千分位符号
    */
    // quantile(num) {
    //   if (num > 999) {
    //     let source = String(num).replace(/\,|\￥/g, "").split(".");
    //     source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");
    //     return source.join(".");
    //   } else {
    //     return num;
    //   }
    // },

    // getUserInfo(url) {
    //   getUserInfo(url).then((res) => {
    //     this.userInfo = res.data
    //     let userCompanyId = res.data.company_id
    //     this.getConversionSummary(userCompanyId)
    //     this.getTotalMoney(userCompanyId)
    //     this.getNewclient(userCompanyId)
    //     this.getOrderConversionRate(userCompanyId)
    //     this.getPayConversionRate(userCompanyId)
    //     this.getStoreConversionRate(userCompanyId)
    //     this.getOrders(userCompanyId)
    //   })
    // },

    // getConversionSummary(companyId) {
    //   let dataParams = this.createParams(companyId)
    //   getConversion(dataParams).then((res) => {
    //     this.conversionData = res.data
    //   })
    // },

    // getTotalMoney(companyId) {
    //   let dataParams = this.createParams(companyId)
    //   getAmount(dataParams).then((res) => {
    //     this.amountOrderData = res.data.order
    //     this.amountPayData = res.data.pay
    //   })
    // },

    // getNewclient(companyId) {
    //   let dataParams = this.createParams(companyId)
    //   getNewclient(dataParams).then((res) => {
    //     this.clientInfo = res.data
    //     this.clientCompareVal = this.mathToNum(res.data.compare)
    //     res.data.compare > 0
    //       ? (this.clientCompareImgUrl = require('images/baobiao_arrow1.png'))
    //       : (this.clientCompareImgUrl = require('images/baobiao_arrow2.png'))
    //   })
    // },

    // getOrderConversionRate(companyId) {
    //   let dataParams = this.createParams(companyId)
    //   getOrderConversion(dataParams).then((res) => {
    //     this.orderThisWeek = this.mathToNum(res.data.orderconversion_this_week)
    //     this.orderLastWeek = this.mathToNum(res.data.orderconversion_last_week)
    //     this.orderCompareVal = this.mathToNum(res.data.orderconversion_compare)
    //     this.orderCompareNum = res.data.orderconversion_compare
    //     res.data.orderconversion_compare > 0
    //       ? (this.orderCompareImgUrl = require('images/baobiao_arrow1.png'))
    //       : (this.orderCompareImgUrl = require('images/baobiao_arrow2.png'))
    //     res.data.orderconversion_this_week > 100
    //       ? (this.orderThisWeekNum = 100)
    //       : (this.orderThisWeekNum = res.data.orderconversion_this_week)
    //     res.data.orderconversion_last_week > 100
    //       ? (this.orderLastWeekNum = 100)
    //       : (this.orderLastWeekNum = res.data.orderconversion_last_week)
    //   })
    // },

    // getPayConversionRate(companyId) {
    //   let dataParams = this.createParams(companyId)
    //   getPayConversion(dataParams).then((res) => {
    //     this.payThisWeek = this.mathToNum(res.data.payconversion_this_week)
    //     this.payLastWeek = this.mathToNum(res.data.payconversion_last_week)
    //     this.payCompareVal = this.mathToNum(res.data.payconversion_compare)
    //     this.payCompareNum = res.data.payconversion_compare
    //     res.data.payconversion_compare > 0
    //       ? (this.payCompareImgUrl = require('images/baobiao_arrow1.png'))
    //       : (this.payCompareImgUrl = require('images/baobiao_arrow2.png'))
    //     res.data.payconversion_this_week > 100
    //       ? (this.payThisWeekNum = 100)
    //       : (this.payThisWeekNum = res.data.payconversion_this_week)
    //     res.data.payconversion_last_week > 100
    //       ? (this.payLastWeekNum = 100)
    //       : (this.payLastWeekNum = res.data.payconversion_last_week)
    //   })
    // },

    // getStoreConversionRate(companyId) {
    //   let dataParams = this.createParams(companyId)
    //   getStoreConversion(dataParams).then((res) => {
    //     this.storeThisWeek = this.mathToNum(res.data.storeconversion_this_week)
    //     this.storeLastWeek = this.mathToNum(res.data.storeconversion_last_week)
    //     this.storeCompareVal = this.mathToNum(res.data.storeconversion_compare)
    //     this.storeCompareNum = res.data.storeconversion_compare
    //     res.data.storeconversion_compare > 0
    //       ? (this.storeCompareImgUrl = require('images/baobiao_arrow1.png'))
    //       : (this.storeCompareImgUrl = require('images/baobiao_arrow2.png'))
    //     res.data.storeconversion_this_week > 100
    //       ? (this.storeThisWeekNum = 100)
    //       : (this.storeThisWeekNum = res.data.storeconversion_this_week)
    //     res.data.storeconversion_last_week > 100
    //       ? (this.storeLastWeekNum = 100)
    //       : (this.storeLastWeekNum = res.data.storeconversion_last_week)
    //   })
    // },

    // getOrders(companyId) {
    //   let dataParams = this.createParams(companyId)
    //   getTipsOrder(dataParams).then((res) => {
    //     this.createTips(res.data)
    //   })
    // },

    // createTips(orderNum) {
    //   let thisWeekNum = orderNum.this_week_order
    //   let lastWeekNum = orderNum.last_week_order
    //   let compareNum = null
    //   if (lastWeekNum === thisWeekNum) {
    //     this.tipText = '本周下单数量与上周持平，加油扩展业务哦！胜利就在前方。'
    //     return false
    //   } else if (lastWeekNum === 0) {
    //     this.tipText = '下单数量突飞猛进，加油冲！'
    //     return false
    //   } else {
    //     compareNum = (thisWeekNum - lastWeekNum) / lastWeekNum * 100
    //   }
    //   if (this.isCompareBlo(compareNum, 25, 0)) {
    //     this.tipText = '下单数量稍有增长，加油！可以结合营销推广策略获取更多新客户。'
    //   }
    //   if (this.isCompareBlo(compareNum, 50, 25)) {
    //     this.tipText = '单数量增长明显，请保持增势'
    //   }
    //   if (this.isCompareBlo(compareNum, 75, 50)) {
    //     this.tipText = '下单数量显著增长，思考一下做对了什么，保持领先的成绩'
    //   }
    //   if (this.isCompareBlo(compareNum, 10000, 75)) {
    //     this.tipText = '下单数量突飞猛进，加油冲！'
    //   }
    //   if (this.isCompareBlo(compareNum, 0, -25)) {
    //     this.tipText = '下单数量稍微下降，本周的业绩提成还需要加油哦！注意营销推广策略'
    //   }
    //   if (this.isCompareBlo(compareNum, -25, -50)) {
    //     this.tipText = '下单数量有下降，请注意营销推广策略的使用，提高交易金额'
    //   }
    //   if (this.isCompareBlo(compareNum, -50, -75)) {
    //     this.tipText = '下单数量大幅度下降，请注意复盘近期的销售过程'
    //   }
    //   if (this.isCompareBlo(compareNum, -75, -10000)) {
    //     this.tipText = '下单数量显著下降，生意下滑，请注意最近生意情况，加快业绩提升'
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.statement {
  background:rgba(244,244,244,1);
  .statement-section {
    padding: 0.4rem;
    margin-bottom: 0.3rem;
    background: #fff;
    .public-title {
      font-weight: bold;
      font-size: 0.26rem;
      color:rgba(51,51,51,1);
      height: 0.25rem;
      line-height: 0.3rem;
    }
  }
  .conversion {
    height: 4.3rem;
    background:linear-gradient(106deg,rgba(20,97,192,1) 0%,rgba(52,216,192,1) 100%);
    position: relative;
    .conversion-title {
      padding: 0.5rem 0 0.6rem;
      h1{
        color:rgba(255,255,255,1);
        line-height:0.56rem;
        .num{
          font-size:1.4rem;
          font-weight:400;
        }
        .text{
          font-size: 0.5rem;
          font-weight:400;
        }
      }
      p{
        font-size:0.3rem;
        font-weight:400;
        color:rgba(255,255,255,1);
      }
    }
    .conversion-content {
      display: flex;
      width: 6.7rem;
      height: 1.3rem;
      border-radius:10px 10px 0px 0px;
      background:rgba(51,51,51,0.2);
      position: absolute;
      bottom: 0;
      .item {
        flex: 1;
        text-align: center;
        h5 {
          height: 0.2rem;
          font-size: 0.2rem;
          font-weight: normal;
          color: rgba(255,255,255,1);
          padding-top: 0.2rem;
        }
        p{
          height:0.37rem;
          font-size: 0.5rem;
          font-weight: 400;
          color:rgba(255,255,255,1);
          padding-top: 0.35rem;
        }
      }
    }
  }

  .amount {
    padding: 0.4rem 0.3rem 0.4rem 0;
    display: flex;
    align-items: center;
    .amount-content-left {
      padding-right: 0.15rem;
      flex: 1;
    }
    .amount-content-right {
      padding-left: 0.15rem;
      flex: 1;
    }
    .amount-card {
      width: 100%;
      height: 1.8rem;
      background: -webkit-linear-gradient(left, #6740f0, #bc4aba);
      margin: 0.32rem 0;
      box-shadow: 0rem 0.15rem 0.15rem rgba(109, 65, 236, 0.3);
      box-sizing: border-box;
      padding: 0.24rem 0.2rem;
      .amount-card-title {
        color: #fff;
        padding-bottom: 0.25rem;
        display: flex;
        align-items: center;
        .left-title {
          font-size: 0.28rem;
          flex: 1;
        }
        .right-icon {
          text-align: right;
          flex: 1;
          img {
            width: 0.42rem;
            height: 0.42rem;
          }
        }
      }
      .amount-card-text {
        color: #fff;
        text-align: right;
        .sign {
          font-size: 0.24rem;
          padding-right: 0.1rem;
        }
        .number {
          font-size: 0.4rem;
        }
      }
    }
    .amount-card.trade {
      background: -webkit-linear-gradient(left, #fc4bba, #f17577);
      box-shadow: 0rem 0.15rem 0.15rem rgba(247, 94, 156, 0.3);
    }
    .amount-text {
      padding: 0 0.2rem;
      font-size: 0.28rem;
      display: flex;
      align-items: center;
      .amount-text-title {
        width: 0.6rem;
      }
      .amount-text-number {
        flex: 1;
        text-align: right;
        .sign {
          padding-right: 0.1rem;
        }
      }
    }
  }
  .convert-ratio {
    .public-title {
      text-align: center;
    }
    .ratio-ul {
      display: flex;
      align-items: center;
      .ratio-list {
        height: 0.6rem;
        line-height: 0.6rem;
        position: relative;
        width: 50%;
        // display: flex;
        align-items: center;
        .ratio-list-title {
          font-size: 0.28rem;
        }
        .ratio-list-title {
          &.client-text {
            padding-right: 0.2rem;
          }
        }
        .ratio-list-text {
          font-size: 0.32rem;
          span {
            font-size: 0.24rem;
          }
          &.up {
            color: #ff6645;
          }
          &.down {
            color: #2d8e80;
          }
        }
        .ratio-list-icon {
          width: 0.17rem;
          height: 0.13rem;
          position: absolute;
          right: 0;
          top: 0.24rem;
        }
        .ratio-list-item{
          font-size: 0.28rem;
        }
        .ratio-list-item:nth-child(2) {
          padding: 0 0.15rem;
        }
      }
      .compare-list {
        box-sizing: border-box;
        padding-right: 0.2rem;
        display: flex;
        align-items: center;
        width: 50%;
        .ratio-list-title {
          flex: 1;
        }
        .compare-text {
          text-align: right;
          flex: 1;
        }
      }
    }
    .circle {
      width: 0.6rem;
      height: 0.6rem;
      position: relative;
      border-radius: 50%;
      margin: 0 auto;
      background: linear-gradient(to bottom, #60b1fb, #c096ff);
    }
    &.pay-ratio {
      .circle {
        background: linear-gradient(to bottom, #ce6ee5, #faa689);
      }
    }
    &.store-ratio {
      .circle {
        background: linear-gradient(to bottom, #ff7451, #ffb139);
      }
    }
    .circle-left,
    .circle-right {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      background: #f6f6f6;
    }
    .clip-left,
    .clip-right {
      width: 0.6rem;
      height: 0.6rem;
      position: absolute;
      top: 0;
      left: 0;
    }
    .circle-left,
    .clip-left {
      position: absolute;
      clip: rect(0, 0.3rem, auto, 0);
    }
    .circle-right,
    .clip-right {
      position: absolute;
      clip: rect(0, auto, auto, 0.3rem);
    }
    .mask {
      width: 0.36rem;
      height: 0.36rem;
      border-radius: 50%;
      left: 0.12rem;
      top: 0.12rem;
      background: #fff;
      position: absolute;
    }
  }
  .tips-content {
    padding: 0.4rem 0.4rem 0.6rem 0.1rem;
    border: none;
    .tips-content-text {
      background: #fbf7f0;
      padding: 0.2rem;
      .text-box {
        border: 0.01rem solid #e4d9cc;
        padding: 0.4rem 0.1rem 0.4rem 0.2rem;
        box-sizing: border-box;
        width: 100%;
        height: 3.2rem;
        position: relative;
        .text-box-title {
          font-size: 0.28rem;
          color: #937555;
          text-align: center;
          position: relative;
          &:before,
          &:after {
            content: '';
            position: absolute;
            top: 40%;
            background: #cdbca9;
            width: 12%;
            height: 0.04rem;
          }
          &:before {
            left: 25%;
          }
          &:after {
            right: 25%;
          }
        }
        .text-box-text {
          font-size: 0.3rem;
          padding-top: 0.4rem;
          word-break: normal;
          word-wrap: break-word;
          font-family: '微软雅黑';
        }
        .text-box-logo {
          padding: 0 0.2rem;
          width: 0.96rem;
          background: #fbf7f0;
          position: absolute;
          bottom: -0.15rem;
          left: 50%;
          margin-left: -0.48rem;
          img {
            width: 0.96rem;
            height: 0.15rem;
          }
        }
      }
    }
  }
}
</style>