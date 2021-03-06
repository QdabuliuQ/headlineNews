import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件懒加载
const homePage = () => import('views/homePage/HomePage')  // 首页组件
const member = () => import('views/member/Member')  // 会员组件
const shopCart = () => import('views/shopCart/ShopCart')  // 购物车组件
const search = () => import('views/search/Search')  // 搜索组件

const newsList = () => import('views/newsList/NewsList')  // 新闻组件
const newsInfo = () => import('views/newsList/childrenComps/NewsInfo')  // 新闻详情组件
const photoList = () => import('views/photoList/PhotoList')  // 图片资讯组件
const photoListInfo = () => import('views/photoList/childrenComps/PhotoListInfo') // 图片详情组件
const goodsList = () => import('views/goodsList/GoodsList')   // 商城组件
const goodsListInfo = () => import('views/goodsList/childrenComps/GoodsListInfo') // 商品详情组件

Vue.use(VueRouter)

const routes = [
  // 路由重定向  默认显示 homepage 组件
  { path: '/', redirect: '/homepage' },
  { path: '/homepage', component: homePage }, // 新闻资讯组件
  { path: '/homepage/newslist', component: newsList },
  { path: '/homepage/newslist/newsInfo/:id', component: newsInfo }, // 新闻详情页  :id   获取id值
 
  { path: '/homepage/photolist', component: photoList }, // 图片资讯组件
  { path: '/homepage/photolist/photoListInfo/:id', component: photoListInfo }, // 图片详情 

  { path: '/homepage/goodslist', component: goodsList },  // 商城组件
  { path: '/homepage/goodslist/goodsListInfo/:id', component: goodsListInfo },  // 商品详情组件
  
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
