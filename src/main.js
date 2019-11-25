import Vue from 'vue'
import App from './App.vue'
import router from './router'
//注册
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
Vue.prototype.$axios = axios
// 引入v-charts
import VCharts from 'v-charts'
Vue.use(VCharts)

import store from './store/index.js'

import '@/icons'; //引入svg模板
import VueProgressBar from 'vue-progressbar'; //引入进度条

// vue中导出excel表格模板
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
Vue.prototype.$FileSaver = FileSaver; //设置全局
Vue.prototype.$XLSX = XLSX; //设置全局

import md5 from "js-md5"; //前端js加密 md5
Vue.prototype.$md5 = md5;
// css
import '@/assets/css/global.css' // global css
import '@/assets/css/iconfont.css' // global css
const options = {
    color: '#29d', //进度条的颜色
    failedColor: 'red', //加载失败时进度条的颜色
    thickness: '2px', //进度条的厚度	
    transition: { //进度条的过渡速度/不透明度/终止
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true, //临时颜色更改将在完成或失败后自动恢复
    location: 'top', //更改进度栏的位置
    inverse: false //反转进度条的方向
}
Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

new Vue({
    store,

    router,
    render: h => h(App),
}).$mount('#app')