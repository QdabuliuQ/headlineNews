<template>
  <div class="GoodsList">
      <navbar class="navbar">
          <div class="leftbox" slot="left" @click="back"><img src="~assets/img/common/back.svg" alt=""></div>
          <div slot="center">购物商城</div>
      </navbar>
      <div class="mui-scroll-wrapper" id="refreshContainer" style="top: 44px; bottom: 49px">
        <div class="mui-scroll">
            <goods-list :goods="goods"></goods-list>
            <div class="getMoreGoods" @click="getMore" v-show="isGetGoodsBtn">点击加载更多</div>
        </div>
      </div>  
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import goodsList from 'components/context/goods/goodsList'  // 商品列表组件

import mui from 'assets/mui/js/mui.min.js'   // 引入 mui js 文件

import {getGoodsList} from 'network/goodsList'  // 商品列表网络请求

export default {
    
    name: 'GoodsList',
    data () {
        return {
            pageIndex: 1,
            goods: [],
            isGetGoodsBtn: true
        }
    },  
    components: {
        navbar,
        goodsList
    },
    methods: {
        back(){
            this.$router.go(-1)
        },

        // 获取网络请求
        MgetGoodsList(){
            getGoodsList(this.pageIndex).then(res => {     
                if (res.data.message.length > 0) {
                    this.goods = this.goods.concat(res.data.message);
                } else {
                    this.$toast.show('没有更多商品了:(',1900)
                    this.isGetGoodsBtn = false;
                }
            })
        },

        // 获取更多数据
        getMore(){
            this.pageIndex++;
            this.MgetGoodsList();
        },
    },
    created () {
        this.MgetGoodsList()
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

        // console.log(mui('#refreshContainer').scroll().y);
    }
}

</script>
<style scoped>
    .GoodsList{ touch-action: none; }
    .navbar{
        background-color: var(--bgc);
        color: #fff;
    }
    .leftbox img{
        margin-top: 11px;
    }
    .getMoreGoods{
        width: 95%;
        height: 30px;
        border-radius: 5px;
        font-size: 14px;
        color: #fff;
        line-height: 30px;
        text-align: center;
        margin-left: 2.5%;
        margin-top: 5px;
        background-color: var(--bgc);
    }
</style>