<template>
  <div class="NewList">
    <news-list-navbar class="navbar">
      <div @click="back" class="left" slot="left">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">新闻咨询</div>
    </news-list-navbar>
    <bscroll ref="newsScroll" class="itemcontent">
      <!-- 监听图片加载事件 -->
      <news-list-item 
      class="newslistitem"
      :newslist="newslist"
      @newsImgLoad="newsImgLoad"></news-list-item>
    </bscroll> 
  </div>
</template>

<script>
import newsListNavbar from 'components/common/navbar/navbar'  // 顶部导航栏
import newsListItem from './childrenComps/NewsListItem'  // 新闻列表组件
import newsInfo from './childrenComps/NewsInfo'  // 新闻详情组件

import bscroll from 'components/common/bscroll/Bscroll'    // 滚动组件

import {getNewsList} from 'network/newsList'  // 网络请求

export default {
    name: 'NewList',
    data () {
      return {
        newslist: []  // 新闻数据
      }
    },
    methods: {
      // 返回上一页
      back(){
        // 通过 $router 调用 go 方法
        // -1 表示返回上一层
        this.$router.go(-1)
      },

      // 监听图片加载
      newsImgLoad(){
        // 通过 refs 获取 bscroll 调用 refresh 方法重新计算滚动高度
        this.$refs.newsScroll.scroll.refresh();
      }
    },
    created () {
      // 获取新闻列表数据
      getNewsList().then(res => {
        this.newslist = res.data.message
      })
      
    },
    // 注册组件
    components: {
      newsListNavbar,
      newsListItem,
      newsInfo,
      bscroll,
    }
}

</script>
<style scoped>
  .NewList{
    height: 100vh;
    overflow: hidden;
    position: relative;
    /* overflow-x: hidden; */
  }
  .navbar{
    color:#fff;
    position: relative;
    z-index: 20;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--bgc);
  }
  .left{
    text-align: center;
  }
  .left img{
    margin-top: 11px;
  }
  .itemcontent{
    width: 100%;
    /* height: calc(100% - 44px - 49px); */
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    
  }
  .listitem{
    position: relative;
    top: 44px;
    background-color: #fff;
  }
</style>