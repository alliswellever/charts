<template>
  <section class="statement">
    <section class="statement-section conversion">
      <div class="conversion-title">
        <h1>
          <span class="num">{{headerDataNum[0]}}</span>
          <span class="text">.{{headerDataNum[1]}}</span>
        </h1>
        <p>昨日同步数据量（条）</p>
      </div>
      <ul class="conversion-content">
        <li class="item">
          <h5>已对接单位(家)</h5>
          <p>{{headerData.unit}}</p>
        </li>
        <li class="item">
          <h5>已对接系统(个)</h5>
          <p>{{headerData.system}}</p>
        </li>
        <li class="item">
          <h5>数据条数(条)</h5>
          <p>{{headerData.data}}</p>
        </li>
      </ul>
    </section>
    <section class="statement-section">
      <p class="public-title">系统数据量TOP10</p>
      <ul class="bar-list">
        <li class="bar-list-item" v-for="(item, index) in top10Data" :key="index">
          <div class="loader-container">
            <div class="loader-content">
              <span class="text">{{item.sum}}w</span>
              <span class="runner" :style="{'height': item.height}"></span>
            </div>
          </div>
          <p class="bar-title">{{item.sys_name}}</p>
        </li>
      </ul>
    </section>
    <section class="statement-section">
      <p class="public-title">七日数据增量</p>
      <div :style="{width: '100%', height: '300px'}">
        <IEcharts :option="bar" class="step_echarts"></IEcharts>
      </div>
    </section>
    <section class="statement-section">
      <ul class="doughnut-list">
        <li class="doughnut-list-item">
          <p class="public-title">系统对接完成率</p>
          <div class="item-circle">
            <div class="circle">
              <div
                class="circle-left"
                :style="{'transform': systemPercentNum > 50 ? 'rotate('+((systemPercentNum-50)*3.6)+'deg)' : 'none'}"
              >
                <div class="clip-left"></div>
              </div>
              <div
                class="circle-right"
                :style="{'transform': systemPercentNum > 50 ? 'rotate(0deg)' : 'rotate('+(systemPercentNum*3.6)+'deg)','background': systemPercentNum > 50 ? 'linear-gradient(to bottom, #1461C0, #34D8C0)' : '#f0f0f0'}"
              >
                <div class="clip-right"></div>
              </div>
              <div
                class="mask"
                :style="{'transform': systemPercentNum > 50 ? 'rotate('+((systemPercentNum-50)*3.6)+'deg)' : 'rotate('+(systemPercentNum*3.6-90)+'deg)'}"
              ></div>
              <div class="rate">{{systemPercentData.rate}}</div>
            </div>
          </div>
          <ul class="item-text">
            <li>
              <p>{{systemPercentData.sum}}</p>
              <p>系统总数(个)</p>
            </li>
            <li>
              <p>{{systemPercentData.undone_sum}}</p>
              <p>未对接(个)</p>
            </li>
          </ul>
        </li>
        <li class="doughnut-list-item">
          <p class="public-title">单位对接完成率</p>
          <div class="item-circle">
            <div class="circle">
              <div
                class="circle-left"
                :style="{'transform': companyPercentNum > 50 ? 'rotate('+((companyPercentNum-50)*3.6)+'deg)' : 'none'}"
              >
                <div class="clip-left"></div>
              </div>
              <div
                class="circle-right"
                :style="{'transform': companyPercentNum > 50 ? 'rotate(0deg)' : 'rotate('+(companyPercentNum*3.6)+'deg)','background': companyPercentNum > 50 ? 'linear-gradient(to bottom, #1461C0, #34D8C0)' : '#f0f0f0'}"
              >
                <div class="clip-right"></div>
              </div>
              <div
                class="mask"
                :style="{'transform': companyPercentNum > 50 ? 'rotate('+((companyPercentNum-50)*3.6)+'deg)' : 'rotate('+(companyPercentNum*3.6-90)+'deg)'}"
              ></div>
              <div class="rate">{{companyPercentData.rate}}</div>
            </div>
          </div>
          <ul class="item-text">
            <li>
              <p>{{companyPercentData.sum}}</p>
              <p>单位总数(家)</p>
            </li>
            <li>
              <p>{{companyPercentData.undone_sum}}</p>
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
        <dd class="dynamic-list-item" v-for="(item, index) in apiData" :key="index">
          <span>{{item.sys_name}}</span>
          <span>{{item.start_time}}</span>
          <span>{{item.refuses}}</span>
        </dd>
      </dl>
      <button class="load-more" @click="sheetSwitch">点击查看更多动态</button>
    </section>
    <section class="more-data-section" v-show="sheetVisible">
      <div class="opcity" @click="closeSheetSwitch" ></div>
      <section class="statement-section" id="moreData">
        <p class="public-title">接口动态</p>
        <div class="dynamic-list">
          <div class="dynamic-list-item title">
            <span>系统名称</span>
            <span>最新同步时间</span>
            <span>数据量(条)</span>
          </div>
          <ul class="dynamic-list-ul">
            <li class="dynamic-list-item" v-for="(item, index) in moreApiData" :key="index">
              <span>{{item.sys_name}}</span>
              <span>{{item.start_time}}</span>
              <span>{{item.refuses}}</span>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import init from "api";
import echarts from 'echarts'
import IEcharts from 'vue-echarts-v3'
import 'echarts/lib/chart/line'
const $ = require('jquery');

export default {
  data() {
    return {
      headerData: {},
      headerDataNum: [],
      top10Data: [],
      systemPercentData: {},
      systemPercentNum: '',
      companyPercentData: {},
      companyPercentNum: '',
      apiData: [],
      moreApiData: [],
      sheetVisible: false,
      bar: {},
      xAxisData: [],
      seriesData: [],
    };
  },
  components: {
    IEcharts
  },
  mounted() {
    this.drawLineChart();
    this.getDatas();
  },
  methods: {
    sheetSwitch() {
      this.sheetVisible = true
      $("#moreData").animate({height:"80%"},"normal","linear");
    },

    closeSheetSwitch() {
      $("#moreData").animate({height:"0"},"normal","linear");
      this.sheetVisible = false
    },

    getDatas() {
      init()
      .then(result => {
        this.headerData = result.query
        this.headerDataNum = this.headerData.number.split('.')
        result.query1.map((item, index) => {
          item.sum = (parseInt(item.sum) / 10000).toFixed(0);
          item.height = (item.sum / 500 ) * 3.3 + 'rem';
        })
        this.top10Data = result.query1
        result.query2.map((item, index) => {
          let days = item.before_7day.split('-')
          let dayText = days[1] + '.' + days[2]
          this.xAxisData.push(dayText)
          this.seriesData.push((parseInt(item.sum) / 10000).toFixed(1))
        })
        this.systemPercentData = result.query3
        this.systemPercentNum = this.systemPercentData.rate.split('.')[0]
        this.companyPercentData = result.query4
        this.companyPercentNum = this.companyPercentData.rate.split('.')[0]
        this.apiData = result.query5.splice(0,10)
        this.moreApiData = result.query5
      })
      .catch(e => {
        console.log('errorMsg', e);
      });
    },

    drawLineChart() {
      let _this = this;
      this.bar = {
        tooltip: {},
          xAxis: {
              data: _this.xAxisData,
              axisTick:{
                  alignWithLabel:true
              }
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  formatter: '{value} w'
              }
          },
          series: [{
                name: 'Clouds',
                type: 'line',
                data: _this.seriesData,
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                  }
                },
                itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [
                              {offset: 0, color: '#1461C0'},
                              {offset: 1, color: '#34D8C0'}
                          ]
                      )
                  }
                },
                areaStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "rgba(20,65,192,0.66)"
                      },
                      {
                        offset: 1,
                        color: "rgba(52,216,192,0.66)"
                      }
                    ])
                  }
                }
          }]
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.statement {
  background: rgba(244, 244, 244, 1);
  position: relative;
  .statement-section {
    padding: 0.4rem;
    margin-bottom: 0.3rem;
    background: #fff;
    .public-title {
      font-size: 0.28rem;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      padding-bottom: 0.3rem;
    }
  }
  .conversion {
    height: 4.3rem;
    background: linear-gradient(
      106deg,
      rgba(20, 97, 192, 1) 0%,
      rgba(52, 216, 192, 1) 100%
    );
    position: relative;
    .conversion-title {
      padding: 0.5rem 0 0.6rem;
      h1 {
        color: rgba(255, 255, 255, 1);
        line-height: 0.56rem;
        .num {
          font-size: 1.4rem;
          font-weight: 400;
        }
        .text {
          font-size: 0.5rem;
          font-weight: 400;
        }
      }
      p {
        font-size: 0.3rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
    .conversion-content {
      display: flex;
      width: 6.7rem;
      height: 1.3rem;
      border-radius: 10px 10px 0px 0px;
      background: rgba(51, 51, 51, 0.2);
      position: absolute;
      bottom: 0;
      .item {
        flex: 1;
        text-align: center;
        h5 {
          height: 0.2rem;
          font-size: 0.2rem;
          font-weight: normal;
          color: rgba(255, 255, 255, 1);
          padding-top: 0.2rem;
        }
        p {
          height: 0.37rem;
          font-size: 0.5rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          padding-top: 0.35rem;
        }
      }
    }
  }
}

.doughnut-list {
  overflow: hidden;
  .doughnut-list-item {
    float: left;
    width: 50%;
    .public-title {
      text-align: center;
      font-size: 0.28rem;
      font-weight: bold;
      color: rgba(102, 102, 102, 1);
    }
    .item-circle {
      padding: 0.5rem 0 0.3rem;
      .circle {
        width: 2.3rem;
        height: 2.3rem;
        position: relative;
        border-radius: 50%;
        margin: 0 auto;
        background: linear-gradient(to bottom, #1461c0, #34d8c0);
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
      .rate{
        width: 2.3rem;
        line-height: 2.3rem;
        position: absolute;
        text-align: center;
        font-size: 0.4rem;
        font-weight:bold;
        color:rgba(102,102,102,1);
      }
    }
    .item-text {
      overflow: hidden;
      width: 90%;
      margin: 0 auto;
      li {
        float: left;
        width: 50%;
        font-size: 0.2rem;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        text-align: center;
        p {
          &:first-child {
            padding-bottom: 0.2rem;
          }
        }
      }
    }
  }
}

.bar-list {
  overflow: hidden;
  .bar-list-item {
    float: left;
    width: 0.2rem;
    margin: 0 0.235rem;
    &:last-child {
      margin-right: 0;
    }
    .loader-container {
      position: relative;
      height: 3.3rem;
      border-radius: 10px;
      background: rgba(159, 159, 159, 0.16);
      .loader-content {
        position: absolute;
        left: 0;
        bottom: 0;
        span {
          display: inline-block;
          &.text {
            margin-left: -0.17rem;
            width: 0.54rem;
            font-size: 0.2rem;
            color: rgba(51, 51, 51, 1);
            text-align: center;
            padding-bottom: 0.1rem;
          }
          &.runner {
            width: 0.2rem;
            border-radius: 10px;
            background: linear-gradient(
              0deg,
              rgba(20, 97, 192, 1) 0%,
              rgba(52, 216, 192, 1) 100%
            );
          }
          &.more {
            background: linear-gradient(
              180deg,
              rgba(242, 225, 31, 1) 0%,
              rgba(205, 51, 34, 1) 100%
            );
          }
        }
      }
    }
    .bar-title {
      font-size: 0.2rem;
      color: rgba(102, 102, 102, 1);
    }
  }
}

.dynamic-list {
  padding-bottom: 0.4rem;
  .dynamic-list-item {
    display: flex;
    &.title {
      padding: 0.2rem 0;
      border-bottom: 2px solid rgba(170, 170, 170, 1);
      font-size: 0.28rem;
      font-weight: bold;
      color: rgba(102, 102, 102, 1);
      margin-bottom: 0.1rem;
    }
    span {
      text-align: center;
      &:first-child {
        width: 30%;
        white-space: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        word-wrap: break-word;
        word-break: break-all;
        text-align: left;
        overflow: hidden;
      }
      &:nth-child(2) {
        width: 40%;
      }
      &:last-child {
        width: 30%;
      }
    }
  }
  dd {
    padding: 0.09rem 0.05rem;
    span {
      font-size: 0.2rem;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
}

.load-more {
  width: 100%;
  height: 0.9rem;
  background: rgba(52, 216, 192, 1);
  border-radius: 0.45rem;
  text-align: center;
  line-height: 0.9rem;
  color: #fff;
  font-size: 0.28rem;
  font-weight: bold;
  border: none;
}

.more-data-section{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  .opcity{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(1,1,1,0.3)
  }
  .statement-section{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;
    margin-bottom: 0 !important;
    width: 100%;
    height: 0;
    .public-title{
      text-align: center;
      font-size: 0.32rem;
      color:rgba(51,51,51,1);
    }
    .dynamic-list-item.title {
      border-bottom: 2px solid rgba(52,216,192,1);
    }
    .dynamic-list{
      position: relative;
      width: 100%;
      height: 100%;
    }
    .dynamic-list-ul{
      width: 100%;
      height: 85%;
      position: absolute;
      overflow-x: hidden;
      overflow-y: auto;
      li{
        padding: 0.09rem 0.05rem;
      }
      &::-webkit-scrollbar {/*滚动条整体样式*/
        width: 0.1rem;
        height: 2.73rem;
      }
      &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(52,216,192,1);
        background: rgba(52,216,192,1);
      }
      &::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(208,208,208,1);
        border-radius: 0;
        background: rgba(208,208,208,1);
      }
    }
  }
} 
</style>