<template>
  <div class="GoodsListInfo">
      <navbar class="navbar">
          <div class="left" slot="left" @click="back"><img src="~assets/img/common/back.svg" alt=""></div>
          <div slot="center">商品详情</div>
          <div class="right" slot="right"><img src="~assets/img/common/fenxiang.png" alt=""></div>
      </navbar>
      <!-- 轮播图组件 -->
      <van-swipe class="my-swipe" style="height: 300px" :autoplay="3000" indicator-color="var(--bgc)">
        <van-swipe-item class="swiperItem" v-for="(item,index) in goodsSwiperImg" :key="index">
            <img :src="item.src" alt="">
        </van-swipe-item>
      </van-swipe>
      <div class="goodsContent">
          <div class="title">{{goodsInfoContent.title}}</div>
          <div class="price">
              <!-- <span class="now">现售价:￥{{goodsInfoContent.sell_price}}</span>
              <span class="old"><s>售价:￥{{goodsInfoContent.market_price}}</s></span> -->
              <div class="pricebox now"><span>售价:￥{{goodsInfoContent.sell_price}}</span></div>
              <div class="pricebox old"><s>￥{{goodsInfoContent.market_price}}</s></div>
              <div class="pricebox quant">销量：{{goodsInfoContent.stock_quantity}}件</div>
          </div>
          <div class="goodsText">
              <div class="id">商品ID：{{goodsInfoContent.goods_no}}</div>
              <div class="time">商品发布时间：{{goodsInfoContent.add_time | getTime}}</div>
          </div>
      </div>
      
      <goods-list-b-nav class="bnav" 
      :goodsSwiperImg="goodsSwiperImg" 
      :goodsInfoContent="goodsInfoContent"></goods-list-b-nav>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'   // 顶部导航栏
import GoodsListBNav from './GoodsListBNav'  // 底部导航栏
import {getGoodsListSwiper,getGoodsInfo} from 'network/goodsList'  // 数据请求

export default {
    name: 'GoodsListInfo',
    data () {
        return {
            goodsId: this.$route.params.id, // 路由传递的id
            goodsSwiperImg: [],  // 轮播图数据
            goodsInfoContent: {}   // 商品详情数据
        }
    },
    methods: {
        back(){
            this.$router.go(-1)
        }  
    },
    created () {
        // 轮播图数据
        getGoodsListSwiper(this.goodsId).then(res => {
            this.goodsSwiperImg = res.data.message
        })

        // 商品详情数据
        getGoodsInfo(this.goodsId).then(res => {
            this.goodsInfoContent = res.data.message[0]
        })
    },
    components: {
        navbar,
        GoodsListBNav
    }
}

</script>
<style scoped>
    .GoodsListInfo{
        position: relative;
        background-color: #fff;
        z-index: 200;
        height: 100vh;
    }
    .swiperItem img{
        width: 100%;
        height: 100%;
    }
    .navbar{
        background-color: var(--bgc);
        color: #fff;
    }
    .left img{
        margin-top: 11px;
    }
    .right img{
        width: 24px;
        height: 24px;
        margin-top: 10px;
    }
    .goodsContent{
        padding: 7px 8px;
    }
    .title{
        font-size: 20px;
        font-weight: 500;
    }
    .price{
        margin-top: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid rgb(224, 224, 224);
        display: flex;
    }
    .pricebox{
        flex: 1;
        text-align: center;
    }
    .now{
        font-size: 18px;
        color: var(--bgc);
    }
    .old{
        font-size: 13px;
        /* margin-left: 15px; */
        color:  rgb(158, 158, 158);
    }
    .bnav{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .quant{
        font-size: 15px;
    }
    .goodsText{
        padding-top: 8px;
        font-size: 14px;
        color: rgb(158, 158, 158);
    }
</style>