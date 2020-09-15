<template>
  <div>
      <navbar class="navbar">
        <div slot="center">购物车({{cartLength}})</div>
      </navbar>
      <div class="cartContent">
        <shop-cart-item></shop-cart-item>
      </div>
      <shop-cart-sell-goods class="sellgoods"></shop-cart-sell-goods>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import ShopCartItem from './childrenComps/ShopCartItem'   // 商品列表子组件
import ShopCartSellGoods from './childrenComps/ShopCartSellGoods'  // 结算组件

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
    }
}

</script>
<style scoped>
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