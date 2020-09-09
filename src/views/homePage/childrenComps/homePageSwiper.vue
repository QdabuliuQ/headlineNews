<template>
  <div>
      <!-- 使用 vant 组件库 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="swiperItem" v-for="(item,index) in swiperImg" :key="index">
            <img :src="item.img" alt="">
        </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>

export default {
    name: 'homePageSwiper',
    components: {
    },
    // 获取父组件的数据
    props: ['swiperImg']
}

</script>
<style scoped>
    .my-swipe{
        width: 100%;
        height: 100%;
    }
    .swiperItem{
        height: 100%;
    }
    .swiperItem img{
        width: 100%;
        height: 100%;
    } 
</style>