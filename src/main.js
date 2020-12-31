import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

import DsaDesign from 'dsa-design'
import 'dsa-design/lib/theme-chalk/index.css'
Vue.use(DsaDesign)

// 挂载api
import api from './api'
Vue.prototype.$_api = api

// 当前模块全局 mqtt连接
import { client, listen, stop } from './libs/mqtt'
Vue.prototype.$_mqtt = client
Vue.prototype.$_listen = listen
Vue.prototype.$_stop = stop

// 图表
let echarts = require('echarts')
Vue.prototype.$_echarts = echarts

// HighCharts 补充Echarts 特别是3D方面
/*import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
import Highmaps from 'highcharts/modules/map';
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
Highmaps(Highcharts);
Vue.prototype.$_highCharts = Highcharts*/

/**
 * 多模块相同集中配置
 * rem响应设置 样式重置 基本过渡效果 字体文件
 */
// 动态响应rem
import './libs/rem'
// 重置样式
import './assets/style/base.css'
// 全局过渡效果
import './assets/style/transition.css'
// 滚动条样式
import './assets/style/webkit-scrollbar.css'
// 字体文件
import './assets/font/font.css'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
