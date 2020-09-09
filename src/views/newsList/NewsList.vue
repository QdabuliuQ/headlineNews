<template>
  <div class="NewList">
    <news-list-navbar class="navbar">
      <div @click="back" class="left" slot="left">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">新闻咨询</div>
    </news-list-navbar>
    <bscroll
     class="bscontent"
      ref="bscroll"
     :probeType="3">
      <news-list-item class="listitem" :newslist="newslist"></news-list-item>
    </bscroll>
  </div>
</template>

<script>
import newsListNavbar from 'components/common/navbar/navbar'  // 顶部导航栏
import newsListItem from './childrenComps/NewsListItem'  // 新闻列表组件

import bscroll from 'components/common/bscroll/Bscroll'    // 滚动组件

import {getNewsList} from 'network/newsList'  // 网络请求

export default {
    name: 'NewList',
    data () {
      return {
        newslist: []  
      }
    },
    methods: {
      back(){
        // 通过 $router 调用 go 方法
        // -1 表示返回上一层
        this.$router.go(-1)
      }
    },
    created () {
      // 获取新闻列表数据
      getNewsList().then(res => {
        this.newslist = res.data.message
        console.log(this.newslist);
      })
    },
    components: {
      newsListNavbar,
      newsListItem,
      bscroll
    }
}

</script>
<style scoped>
  .NewList{
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
  .navbar{
    color:#fff;
    background-color: var(--bgc);
  }
  .left{
    text-align: center;
  }
  .left img{
    margin-top: 11px;
  }
  .bscontent{
    width: 100%;
    height: calc(100% - 44px - 49px);
    overflow-y: hidden;
    /* position: relative;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px; */
  }
</style>