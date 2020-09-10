<template>
  <div class="homePage">
    <home-page-navbar class="navbar">
      <div slot="center">首页</div>
    </home-page-navbar>
    <home-page-swiper class="swiper" :swiperImg="swiperImg"></home-page-swiper>
    <home-page-cell></home-page-cell>
  </div>
</template>

<script>
import homePageNavbar from 'components/common/navbar/navbar'  // 顶部导航栏组件
import homePageSwiper from './childrenComps/homePageSwiper'  // 轮播图组件
import homePageCell from './childrenComps/homePageCell'  // 宫格组件

// 网络请求
import {getSwiper} from 'network/homePage'  // 轮播图请求

export default {
    name: 'HomePage',
    components: {
      homePageNavbar,
      homePageSwiper,
      homePageCell
    },
    data () {
      return {
        swiperImg: []  // 轮播图
      }
    },
    methods: {
    },
    created () {
      // 轮播图数据
      getSwiper().then(res => {
        this.swiperImg = res.data.message
      })
    }
}

</script>
<style scoped>
  .homePage{
    width: 100%;
  }
  .swiper{
    width: 100%;
    height: 180px;
  }
  .navbar{
    
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    /* 使用css变量 var(变量名) */
    background-color: var(--bgc);
  }
</style>