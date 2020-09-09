import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件懒加载
const homePage = () => import('views/homePage/HomePage')  // 首页组件
const member = () => import('views/member/Member')  // 会员组件
const shopCart = () => import('views/shopCart/ShopCart')  // 购物车组件
const search = () => import('views/search/Search')  // 搜索组件

const newList = () => import('views/newsList/NewsList')  // 新闻组件

Vue.use(VueRouter)

const routes = [
  // 路由重定向  默认显示 homepage 组件
  { path: '/', redirect: '/homepage' },
  { path: '/homepage', component: homePage },
  { path: '/homepage/newslist', component: newList },
  { path: '/member', component: member },
  { path: '/shopcart', component: shopCart },
  { path: '/search', component: search }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
