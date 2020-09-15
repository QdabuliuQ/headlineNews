import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 移动端300ms延迟
import fastClick from 'fastclick'
// 调用 attach 方法 作用于 body 上
fastClick.attach(document.body)


// 引入 mui 基本css样式
import 'assets/mui/css/mui.css'


// 图片懒加载框架
import VueLazyLoad from 'vue-lazyload'
// 安装框架
// 将需要使用懒加载的 img 标签不再使用 src 来引入图片，而是通过 v-lazy 来使用
Vue.use(VueLazyLoad,{
  // 懒加载图片
  loading: require("./assets/img/common/loading2.gif")
})


// npm install vant --save 安装 vant 组件库
// 引入 轮播图 组件
import { Swipe, SwipeItem } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';  // 复选框
import { SwipeCell } from 'vant';   // 滑块
import { Button } from 'vant';


// 引入css样式
import 'vant/lib/index.css';
Vue.use(Swipe)  // 安装组件
Vue.use(SwipeItem)
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SwipeCell);
Vue.use(Button);


// 格式化事件插件
import moment from 'moment'   // npm install moment --save
// 过滤器  pattern 时间格式
Vue.filter('getTime',function(date,pattern="YYYY-MM-DD  HH:MM:SS"){
  // 调用 moment 方法传入时间 获取指定的时间
  // 调用 format 格式化时间
  return moment(date).format(pattern)
})

// 引入缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// 引入 toast 组件
import toast from 'components/common/toast'
Vue.use(toast)  // 安装 toast 组件

Vue.config.productionTip = false

// render函数将 app 根组件渲染在页面上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
