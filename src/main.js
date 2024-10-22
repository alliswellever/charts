import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'assets/styles/reset.css'
import echarts from 'echarts'

// Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false

export default new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')