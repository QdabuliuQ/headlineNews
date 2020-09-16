<template>
  <div>
      <navbar class="navbar">
        <div slot="center">购物车({{cartLength}})</div>
      </navbar>
      <!-- 滚动区域 -->  
      <div class="mui-scroll-wrapper" style="top: 44px; bottom: 89px">
        <div class="mui-scroll">
          <div class="cartContent">
            <shop-cart-item></shop-cart-item>
          </div>
        </div>
      </div>
          
      <shop-cart-sell-goods class="sellgoods"></shop-cart-sell-goods>        
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import ShopCartItem from './childrenComps/ShopCartItem'   // 商品列表子组件
import ShopCartSellGoods from './childrenComps/ShopCartSellGoods'  // 结算组件

import mui from 'assets/mui/js/mui.js'

// 引入滑动模块
// .mui-scroll-wrapper 表示需要进行滑动的区域
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});


export default {
    name: 'ShopCart',
    components: {
      navbar,
      ShopCartItem,
      ShopCartSellGoods
    },
    computed: {
      cartLength(){
        return this.$store.state.cartList.length
      }
    },
    mounted () {
      mui('.mui-scroll-wrapper').scroll({
          bounce: true,  //是否回弹
          scrollY: true, //是否竖向滚动
          scrollX: false, //是否横向滚动
          startX: 0, //初始化时滚动至x
          startY: 0, //初始化时滚动至y
          indicators: false, //是否显示滚动条
      });
    }
}

</script>
<style scoped>
  * { touch-action: none } 
  .navbar{
    background-color: var(--bgc);
    color: #fff;
    position: relative;
  }
  .cartContent{
    /* width: 100%; */
    padding: 10px 8px;
    /* height: 300px; */
  }
  .sellgoods{
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
  }
</style>