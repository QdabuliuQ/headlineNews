<template>
  <div class="GoodsListBNav">
      <div class="leftbox">
           <div class="box">
               <img class="img1" src="~assets/img/goodsListImg/dianpu.png" alt="">               
               <div class="text">店铺</div>
           </div>
           <div class="box centerbox">
               <img class="img1" src="~assets/img/goodsListImg/shoucang.png" alt="">               
               <div class="text">收藏</div>
           </div>
           <div class="box">
               <img class="img2" src="~assets/img/goodsListImg/kefu.png" alt="">              
               <div class="text2">客服</div>
           </div>
      </div>
      <div class="rightbox">
          <div class="toCart rbox" @click="addCart">加入购物车</div>
          <div class="buy rbox">下单</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'GoodsListBNav',
    data () {
        return {
            img: this.goodsSwiperImg[0],  // 保存图片
            info: this.goodsInfoContent   // 保存商品信息
        }
    },
    methods: {
        addCart(){
            let product = {}
            product.img = this.goodsSwiperImg;  // 图片
            product.title = this.goodsInfoContent.title;  // 标题
            product.price = this.goodsInfoContent.sell_price;  // 价格
            product.id = this.goodsInfoContent.goods_no;  // 商品id
            product.checked = false;  // 商品是否选中
            product.count = 1;  // 商品数量
            product.stock_quantity = this.goodsInfoContent.stock_quantity;  // 库存

            // dispatch 调用 Vuex中actions方法
            this.$store.dispatch('addGoodsCart',product).then(res => {
                this.$toast.show(res,1900)
            })
        }
    },
    props: ['goodsSwiperImg','goodsInfoContent']
}

</script>
<style scoped>
    .GoodsListBNav{
        height: 49px;
        display: flex;
        box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.2);
    }
    .leftbox{
        flex: 5;
        display: flex;
    }
    .box{
        flex: 1;
        text-align: center;
    }
    .box .img1{
        width: 23px;
        height: 23px;
        margin-top: 6px;
    }
    .box .text{
        font-size: 13px;
        margin-top: -5px;
        /* margin-top: 20px; */
    }
    .box .text2{
        font-size: 13px;
        margin-top: -7px;
    }
    .box .img2{
        width: 27px;
        height: 27px;
        margin-top: 4px;
    }
    .rightbox{
        flex: 5;
        display: flex;
        font-size: 16px;
    }
    .centerbox{
        box-sizing: border-box;
        border-left: 1px solid rgb(224, 224, 224);
        border-right: 1px solid rgb(224, 224, 224);
    }
    .rbox{
        flex: 1;
        text-align: center;
        line-height: 49px;
        color: #fff;
    }
    .toCart{
        background-color: rgb(231, 220, 60);
        
    }
    .buy{
        background-color: var(--bgc);
    }
</style>