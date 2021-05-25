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

// dsa utils
/*import * as dsaUtils from 'dsa-utils'
Vue.prototype.$_d = dsaUtils*/

// bbo
/*import bbo from 'bbo'
Vue.prototype.$_b = bbo*/

// 当前模块全局 mqtt连接
/*import { client, listen, stop } from './libs/mqtt'
Vue.prototype.$_mqtt = client
Vue.prototype.$_listen = listen
Vue.prototype.$_stop = stop*/

// 图表
/*let echarts = require('echarts')
Vue.prototype.$_echarts = echarts*/

// 设置根字体
import './libs/rem'

Vue.config.productionTip = false

// eslint-disable-next-line vue/require-name-property
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
