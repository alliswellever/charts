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
      <ul class="bar-list">
        <li class="bar-list-item">
          <div class="loader-container">
            <div class="loader-content">
              <span class="text">444w</span>
              <span class="runner"></span>
            </div>
          </div>
          <p class="bar-title">名字一名字一</p>
        </li>
        <li class="bar-list-item">
          <div class="loader-container">
            <div class="loader-content">
              <span class="text">444w</span>
              <span class="runner"></span>
            </div>
          </div>
          <p class="bar-title">名字二名字二</p>
        </li>
        <li class="bar-list-item">
          <div class="loader-container">
            <div class="loader-content">
              <span class="text">444w</span>
              <span class="runner"></span>
            </div>
          </div>
          <p class="bar-title">名字三名字三</p>
        </li>
        <li class="bar-list-item">
          <div class="loader-container">
            <div class="loader-content">
              <span class="text">444w</span>
              <span class="runner"></span>
            </div>
          </div>
          <p class="bar-title">名字四名字四</p>
        </li>
        <li class="bar-list-item">
          <div class="loader-container">
            <div class="loader-content">
              <span class="text">444w</span>
              <span class="runner"></span>
            </div>
          </div>
          <p class="bar-title">名字五名字五</p>
        </li>
        <li class="bar-list-item">
          <div class="loader-container">
            <div class="loader-content">
              <span class="text">444w</span>
              <span class="runner"></span>
            </div>
          </div>
          <p class="bar-title">名字六名字六</p>
        </li>
        <li class="bar-list-item">
          <div class="loader-container">
            <div class="loader-content">
              <span class="text">444w</span>
              <span class="runner"></span>
            </div>
          </div>
          <p class="bar-title">名字七名字七</p>
        </li>
        <li class="bar-list-item">
          <div class="loader-container">
            <div class="loader-content">
              <span class="text">444w</span>
              <span class="runner"></span>
            </div>
          </div>
          <p class="bar-title">名字八名字八</p>
        </li>
        <li class="bar-list-item">
          <div class="loader-container">
            <div class="loader-content">
              <span class="text">444w</span>
              <span class="runner"></span>
            </div>
          </div>
          <p class="bar-title">名字九名字九</p>
        </li>
        <li class="bar-list-item">
          <div class="loader-container">
            <div class="loader-content">
              <span class="text">444w</span>
              <span class="runner"></span>
            </div>
          </div>
          <p class="bar-title">名字十名字十</p>
        </li>
      </ul>
    </section>
    <section class="statement-section">
      <p class="public-title">七日数据增量</p>
      <div id="lineChart" :style="{width: '100%', height: '300px'}"></div>
    </section>
    <section class="statement-section">
      <ul class="doughnut-list">
        <li class="doughnut-list-item">
            <p class="public-title">系统对接完成率</p>
            <div class="item-circle">
                <div class="circle">
                    <div class="circle-left" :style="{'transform': orderLastWeekNum > 50 ? 'rotate('+((orderLastWeekNum-50)*3.6)+'deg)' : 'none'}">
                        <div class="clip-left"></div>
                    </div>
                    <div class="circle-right" :style="{'transform': orderLastWeekNum > 50 ? 'rotate(0deg)' : 'rotate('+(orderLastWeekNum*3.6)+'deg)','background': orderLastWeekNum > 50 ? 'linear-gradient(to bottom, #1461C0, #34D8C0)' : '#f0f0f0'}">
                        <div class="clip-right"></div>
                    </div>
                    <div class="mask" :style="{'transform': orderLastWeekNum > 50 ? 'rotate('+((orderLastWeekNum-50)*3.6)+'deg)' : 'rotate('+(orderLastWeekNum*3.6-90)+'deg)'}"></div>
                </div>
            </div>
            <ul class="item-text">
              <li>
                <p>62</p>
                <p>系统总数(个)</p>
              </li>
              <li>
                <p>20</p>
                <p>未对接(个)</p>
              </li>
            </ul>
        </li>
        <li class="doughnut-list-item">
            <p class="public-title">单位对接完成率</p>
            <div class="item-circle">
                <div class="circle">
                    <div class="circle-left" :style="{'transform': orderLastWeekNum > 50 ? 'rotate('+((orderLastWeekNum-50)*3.6)+'deg)' : 'none'}">
                        <div class="clip-left"></div>
                    </div>
                    <div class="circle-right" :style="{'transform': orderLastWeekNum > 50 ? 'rotate(0deg)' : 'rotate('+(orderLastWeekNum*3.6)+'deg)','background': orderLastWeekNum > 50 ? 'linear-gradient(to bottom, #1461C0, #34D8C0)' : '#f0f0f0'}">
                        <div class="clip-right"></div>
                    </div>
                    <div class="mask" :style="{'transform': orderLastWeekNum > 50 ? 'rotate('+((orderLastWeekNum-50)*3.6)+'deg)' : 'rotate('+(orderLastWeekNum*3.6-90)+'deg)'}"></div>
                </div>
            </div>
            <ul class="item-text">
              <li>
                <p>62</p>
                <p>单位总数(家)</p>
              </li>
              <li>
                <p>20</p>
                <p>未对接(家)</p>
              </li>
            </ul>
        </li>
      </ul>
    </section>
    <section class="statement-section">
      <p class="public-title">接口动态</p>
      <dl class="dynamic-list">
        <dt class="dynamic-list-item title">
          <span>系统名称</span>
          <span>最新同步时间</span>
          <span>数据量(条)</span>
        </dt>
        <dd class="dynamic-list-item">
          <span>交通局内网办公...</span>
          <span>2018-11-14 01:50:03</span>
          <span>20690</span>
        </dd>
        <dd class="dynamic-list-item">
          <span>交通局内网办公...</span>
          <span>2018-11-14 01:50:03</span>
          <span>20690</span>
        </dd>
        <dd class="dynamic-list-item">
          <span>交通局内网办公...</span>
          <span>2018-11-14 01:50:03</span>
          <span>20690</span>
        </dd>
        <dd class="dynamic-list-item">
          <span>交通局内网办公...</span>
          <span>2018-11-14 01:50:03</span>
          <span>20690</span>
        </dd>
      </dl>
      <button class="load-more">点击查看更多动态</button>
    </section>
  </section>
</template>

<script>
// import {
//   getConversion,
// } from 'api/bossStatement/statement'

// import IEcharts from 'vue-echarts-v3'
// import 'echarts/lib/chart/line'

export default {
  data() {
    return {
      orderLastWeekNum: 50,
    }
  },
  mounted() {
    this.drawLineChart();
  },
  methods: {
    drawLineChart(){
        // 基于准备好的dom，初始化echarts实例
        let lineChart = this.$echarts.init(document.getElementById('lineChart'))
        // 绘制图表      
        lineChart.setOption({
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {
                normal: {
                    color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: 'rgba(80,141,255,0.39)'
                    }, {
                        offset: .34,
                        color: 'rgba(56,155,255,0.25)'
                    },{
                      offset: 1,
                      color: 'rgba(38,197,254,0.00)'
                    }
                    ])
                }
            },
          }]
        })

    }
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
      font-size: 0.28rem;
      font-weight: bold;
      color:rgba(51,51,51,1);
      padding-bottom: 0.3rem;
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

.doughnut-list{
  overflow: hidden;
  .doughnut-list-item{
    float: left;
    width: 50%;
    .public-title{
      text-align: center;
      font-size: 0.28rem;
      font-weight:bold;
      color:rgba(102,102,102,1);
    }
    .item-circle{
      padding: 0.5rem 0 0.3rem;
      .circle {
        width: 2.3rem;
        height: 2.3rem;
        position: relative;
        border-radius: 50%;
        margin: 0 auto;
        background: linear-gradient(to bottom, #1461C0, #34D8C0);
      }
      .circle-left,
      .circle-right {
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        background: #f0f0f0;
      }
      .clip-left,
      .clip-right {
        width: 2.3rem;
        height: 2.3rem;
        position: absolute;
        top: 0;
        left: 0;
      }
      .circle-left,
      .clip-left {
        position: absolute;
        clip: rect(0, 1.15rem, auto, 0);
      }
      .circle-right,
      .clip-right {
        position: absolute;
        clip: rect(0, auto, auto, 1.15rem);
      }
      .mask {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        left: 0.25rem;
        top: 0.25rem;
        background: #fff;
        position: absolute;
      }
    }
    .item-text{
      overflow: hidden;
      width: 90%;
      margin: 0 auto;
      li{
        float: left;
        width: 50%;
        font-size:0.2rem;
        font-weight:400;
        color:rgba(102,102,102,1);
        text-align: center;
        p{
          &:first-child{
            padding-bottom: 0.2rem;
          }
        }
      }
    }
  }
}

.bar-list{
  overflow: hidden;
  .bar-list-item{
    float: left;
    width: 0.2rem;
    margin: 0 0.235rem;
    &:last-child{
      margin-right: 0;
    }
    .loader-container {
      position: relative;
      height: 3.3rem;
      border-radius:10px;
      background:rgba(159,159,159,0.16);
      .loader-content{
        position: absolute;
        left: 0;
        bottom: 0;
        span{
          display: inline-block;
          &.text{
            margin-left: -0.17rem;
            width: 0.54rem;
            font-size: 0.2rem;
            color:rgba(51,51,51,1);
            text-align: center;
            padding-bottom: 0.1rem;
          }
          &.runner{
            width: 0.2rem;
            height: 2rem;
            border-radius:10px;
            background:linear-gradient(0deg,rgba(20,97,192,1) 0%,rgba(52,216,192,1) 100%);
          }
        }
      }
    }
    .bar-title{
      font-size: 0.2rem;
      color:rgba(102,102,102,1);
    }
    &:first-child{
      .loader-container{
        .loader-content{
          span{
            &.runner{
              background:linear-gradient(180deg,rgba(242,225,31,1) 0%,rgba(205,51,34,1) 100%);
            }
          }
        }
      }
    }
  }
}

.dynamic-list{
  padding-bottom: 0.4rem;
  .dynamic-list-item{
    display: flex;
    &.title{
      padding: 0.2rem 0;
      border-bottom: 2px solid rgba(170,170,170,1);
      font-size: 0.28rem;
      font-weight:bold;
      color:rgba(102,102,102,1);
      margin-bottom: 0.1rem;
    } 
    span{
      text-align: center;
      &:first-child{
        width: 30%;
      }
      &:nth-child(2){
        width: 45%;
      }
      &:last-child{
        width: 25%;
      }
    }
  }
  dd{
    padding: 0.09rem 0.05rem;
    span{
      font-size: 0.2rem;
      font-weight:400;
      color:rgba(102,102,102,1);
    }
  }
}

.load-more{
  width: 100%;
  height: 0.9rem;
  background:rgba(52,216,192,1);
  border-radius: 0.45rem;
  text-align: center;
  line-height: 0.9rem;
  color: #fff;
  font-size: 0.28rem;
  font-weight: bold;
  border: none;
}
</style>