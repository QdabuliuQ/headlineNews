<template>
  <div class="GoodsList">
    <navbar class="navbar">
      <div class="leftbox" slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center">购物商城</div>
    </navbar>
    <!-- <div class="mui-scroll-wrapper" id="refreshContainer" style="top: 44px; bottom: 49px">
      <div class="mui-scroll">
        <goods-list :goods="goods"></goods-list>
        <div class="getMoreGoods" @click="getMore" v-show="isGetGoodsBtn">点击加载更多</div>
      </div>
    </div>-->
    <mui-scroll
      style="top: 44px; bottom: 49px"
      :scrollY="true"
      @listenerMSC="listenerMSC"
      ref="mscroll"
    >
      <goods-list :goods="goods"></goods-list>
      <div class="getMoreGoods" @click="getMore" v-show="isGetGoodsBtn">点击加载更多</div>
    </mui-scroll>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar";
import goodsList from "components/context/goods/goodsList"; // 商品列表组件

import muiScroll from "components/common/muiScroll/MuiScroll";

import mui from "assets/mui/js/mui.min.js"; // 引入 mui js 文件

import { getGoodsList } from "network/goodsList"; // 商品列表网络请求

export default {
  name: "GoodsList",
  data() {
    return {
      pageIndex: 1,
      goods: [],
      isGetGoodsBtn: true,
      yScroll: 0,
      beforeY: 0,
    };
  },
  components: {
    navbar,
    goodsList,
    muiScroll,
  },
  methods: {
    // 通过 muiScroll 组件事件传播
    listenerMSC(y) {
      // 保存滚动位置
      this.yScroll = y;
    },
    back() {
      this.$router.go(-1);
    },

    // 获取网络请求
    MgetGoodsList() {
      getGoodsList(this.pageIndex).then((res) => {
        if (res.data.message.length > 0) {
          this.goods = this.goods.concat(res.data.message);
        } else {
          this.$toast.show("没有更多商品了:(", 1900);
          this.isGetGoodsBtn = false;
        }
      });
    },

    // 获取更多数据
    getMore() {
      this.pageIndex++;
      this.MgetGoodsList();
    },
  },

  // 页面创建的时候 请求数据
  created() {
    this.MgetGoodsList();
  },
  // 页面处于活跃状态
  activated() {
    // 页面在创建的时候 跳转到最后浏览的位置
    // mscroll 是 refs 属性
    // muiscroll 是 muiscroll 本身
    // 调用 scrollTo 方法
    this.$refs.mscroll.muiscroll.scrollTo(0, this.yScroll);
  },

  // 页面处于不活跃状态
  deactivated() {
  },
  mounted() {},
};
</script>
<style scoped>
.GoodsList {
  touch-action: none;
}
.navbar {
  background-color: var(--bgc);
  color: #fff;
}
.leftbox img {
  margin-top: 11px;
}
.getMoreGoods {
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