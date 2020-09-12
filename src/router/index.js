import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件懒加载
const homePage = () => import('views/homePage/HomePage')  // 首页组件
const member = () => import('views/member/Member')  // 会员组件
const shopCart = () => import('views/shopCart/ShopCart')  // 购物车组件
const search = () => import('views/search/Search')  // 搜索组件

const newsList = () => import('views/newsList/NewsList')  // 新闻组件
const newsInfo = () => import('views/newsList/childrenComps/NewsInfo')  // 新闻详情组件
const photoList = () => import('views/photoList/PhotoList')

Vue.use(VueRouter)

const routes = [
  // 路由重定向  默认显示 homepage 组件
  { path: '/', redirect: '/homepage' },
  { path: '/homepage', component: homePage },
  // 新闻资讯组件
  { path: '/homepage/newslist', component: newsList },
  // 图片资讯组件
  { path: '/homepage/photolist', component: photoList },
  // 新闻详情页  :id   获取id值
  { path: '/homepage/newslist/newsInfo/:id', component: newsInfo },
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
