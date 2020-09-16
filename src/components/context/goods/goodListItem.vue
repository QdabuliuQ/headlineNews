<template>
  <div class="goods-item" @click="goodsInfo(goodsItem.id)">
      <!-- 获取图片数据 -->
      <img v-lazy="goodsItem.img_url" alt="" @load="imgLoad">
      <div class="goods-info">
          <!-- 商品标题 -->
          <p>{{goodsItem.title}}</p>
          <div class="price">
            ￥{{goodsItem.sell_price}}
            <span class="oldPrice"><s>￥{{goodsItem.market_price}}</s></span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'goodListItem',
  // 接收父组件的数据
  props: ['goodsItem'],
  computed: {
  },
  methods: {
    imgLoad(){
      this.$emit('goodsImgLoad')
    },

    goodsInfo(id){
      this.$router.push('/homepage/goodslist/goodsListInfo/' + id)
    }
  }
}

</script>
<style scoped>
  .goods-item {
    padding-bottom: 40px;
    height: 240px;
    position: relative;
    /* min-height: 220px; */
    /* height: auto; */
    width: 48%;
    background-color: #fff;
    margin-left: 2.5px;
    margin-right: 2.5px;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }

  .goods-item img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 13px;
    width: 100%;
    margin-top: -7px;
    height: 45px;
    overflow: hidden;
  }

  .goods-info p {
    overflow: hidden;
    color: #000 !important;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 2px;
    margin-bottom: 3px;
    margin-left: 4px;
    margin-right: 3px;
  }

  .goods-info .price {
    font-size: 17px;
    margin-top: -4px;
    margin-left: 5px;
    color: var(--bgc);
  }
  .collect{
    position: relative;
  }
  .collect img{
    width: 17px;
    height: 17px;
    position: absolute;
    left: -17px;
    top: 0px;
  }
  .oldPrice{
    font-size: 12px;
    margin-left: 10px;
    color: rgb(158, 158, 158);
  }
</style>