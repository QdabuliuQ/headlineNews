import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// npm install vant --save 安装 vant 组件库
// 引入 轮播图 组件
import { Swipe, SwipeItem } from 'vant';
// 引入css样式
import 'vant/lib/index.css';
Vue.use(Swipe)  // 安装组件
Vue.use(SwipeItem)


// 格式化事件插件
import moment from 'moment'   // npm install moment --save
// 过滤器  pattern 时间格式
Vue.filter('getTime',function(date,pattern="YYYY-MM-DD HH:MM:SS"){
  // 调用 moment 方法传入时间 获取指定的时间
  // 调用 format 格式化时间
  return moment(date).format(pattern)
})

Vue.config.productionTip = false

// render函数将 app 根组件渲染在页面上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
