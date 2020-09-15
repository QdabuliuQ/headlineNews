<template>
  <div class="ShopCartSellGoods">
      <div class="checked">
          <van-checkbox class="checkboxs" @click="all($store.state.allChecked)" v-model="$store.state.allChecked"></van-checkbox>
          <span>全选</span>
      </div>
      <div class="price">
          <span>￥{{sumPrice}}</span>
      </div>
      <div class="sell">
          <div class="btnsell">去结算</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ShopCartSellGoods',
    data () {
        return {
            checked: false
        }
    },
    computed: {
        // 计算总价
        sumPrice(){
            return this.$store.state.cartList
            .filter(item => item.checked)
            .reduce((pre, item) => pre + item.price * item.count, 0)
            .toFixed(2)
        }
    },
    methods: {
        all(checked){
            console.log(this.$store.state.allChecked);
            this.$store.commit('allChecked', checked)
        }
    }
}

</script>
<style scoped>
    .ShopCartSellGoods{
        display: flex;
        background-color: #fff;
        box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
    }
    .checked{
        flex: 2;
        line-height: 40px;
    }
    .checked span{
        margin-left: 5px;
    }
    .checkboxs{
        float: left;
        margin-top: 10px;
        margin-left: 17px;
    }
    .price{
        flex: 2;
        line-height: 40px;
        font-size: 20px;
        color: var(--bgc);
        text-align: center;
    }
    .sell{
        flex: 4;
    }
    .btnsell{
        width: 80%;
        height: 35px;
        color: #Fff;
        border-radius: 35px;
        background-color: var(--bgc);
        text-align: center;
        line-height: 35px;
        margin-left: 10%;
        font-size: 20px;
        margin-top: 2.5px;
    }
</style>