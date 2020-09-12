<template>
  <div class="NewsListItem">
      <div class="navText">
          <img src="~assets/img/newsList/fxbottom.png" alt="">
          <span>分享</span>
      </div>
      <div class="navText">
          <img src="~assets/img/newsList/shoucang.png" alt="">
          <span>收藏</span>
      </div>
      <div @click="commentsClick" class="navText">
          <img src="~assets/img/newsList/pinglun.png" alt="">
          <span>评论</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NewsListItem',
    methods: {
        commentsClick(){
            this.$emit('openComment')
        }
    }
}

</script>
<style scoped>
    .NewsListItem{
        height: 20px;
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        /* line-height: 20px; */
    }
    .navText{
        line-height: 20px;
    }
    .navText img{
        margin-top: 1px;
        margin-right: 3px;
        float: left;
    }
</style>