<template>
  <div id="app">
    <!-- 路由占位符 -->
    <!-- keep-alive 路由占位符区域不会被销毁 -->
    <keep-alive>
      <!-- 在组件切换的时候添加动画 -->
      <transition mode="">
        <router-view></router-view>
      </transition>
    </keep-alive>
    <!-- 底部导航栏 -->
    <tabbar class="apptabbar">
      <tabbaritem path="/homepage" activeColor='#1296db'>
        <img slot="item-icon" src="~assets/img/tabbarImg/index.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/indexactive.png" alt="">
        <div class="item-text" slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="member" activeColor='#1296db'>
        <img slot="item-icon" src="~assets/img/tabbarImg/huiyuan.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/huiyuanactive.png" alt="">
        <div class="item-text" slot="item-text">会员</div>
      </tabbaritem>
      <tabbaritem path="shopcart" activeColor='#1296db'>
        <img slot="item-icon" src="~assets/img/tabbarImg/wg.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/wgactive.png" alt="">
        <div class="item-text" slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="search" activeColor='#1296db'>
        <img slot="item-icon" src="~assets/img/tabbarImg/search.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/searchactive.png" alt="">
        <div class="item-text" slot="item-text">搜索</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>

// 引入底部导航栏组件
import tabbar from 'components/common/tabbar/tabbar'
import tabbaritem from 'components/common/tabbar/tabbaritem'

export default {
  name: 'App',
  components: {
    tabbar,
    tabbaritem
  }
}
</script>

<style>
  * { touch-action: pan-y; }
  @import '~assets/css/base.css';
  #app{
    overflow-x: hidden;
    width: 100%;
  }
  .apptabbar{
    width: 100%;
    z-index: 99;
  }
  .item-text{
    font-size: 13px;
    margin-top: 2px;
  }
  .v-enter{
    opacity: 0;
    /* 进来的时候从右 */
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    /* 离开的时候向左 */
    transform: translateX(-100%);
    position: absolute;
  }

  /* 动画执行期间 */
  .v-enter-active,.v-leave-active{
      /* 添加动画效果 */
      transition: all 0.2s linear;
  }
  .tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
