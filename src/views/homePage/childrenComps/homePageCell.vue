<template>
  <div class="homePageCell">
      <div class="cellItem" @click="news">
          <!-- 路由跳转 tag 将router-link标签转为指定的标签 -->
        <div>
            <img src="~assets/img/homePageImg/xinwen.png" alt="">
        </div>
        <span>新闻资讯</span> 
      </div>
      <div class="cellItem">
          <div>
              <img src="~assets/img/homePageImg/ship.png" alt="">
          </div>
          <span>视频专区</span> 
      </div>
      <div class="cellItem">
          <div>
              <img class="shop" src="~assets/img/homePageImg/shangcheng.png" alt="">
          </div>
          <span>购物商城</span>    
      </div>
      <div class="cellItem" @click="photo">
          <div>
              <img src="~assets/img/homePageImg/picture.png" alt="">
          </div>
          <span>图片资讯</span> 
      </div>
      <div class="cellItem">
          <div>
              <img src="~assets/img/homePageImg/liuyan.png" alt="">
          </div>
          <span>留言反馈</span>      
      </div>
      <div class="cellItem">
          <div>
              <img src="~assets/img/homePageImg/lianxi.png" alt="">
          </div>
          <span>联系我们</span>     
      </div>
  </div>
</template>

<script>
export default {
    name: 'homePageCell',
    methods: {
        // 新闻组件路由跳转
        news(){
            this.$router.push('/homepage/newslist')
        },

        // 图片组件路由跳转
        photo(){
            this.$router.push('/homepage/photolist')
        }
    }
}

</script>
<style scoped>
    .homePageCell{
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: center;
    }
    .cellItem{
        margin-top: 15px;
        width: 33%;
        text-align: center;
        font-size: 14px;
        color: #000;
        text-decoration: none;
    }
    .shop{
        height: 63px;
    }
</style>