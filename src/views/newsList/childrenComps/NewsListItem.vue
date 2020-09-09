<template>
  <div class="NewsListItem">
      <div class="listItem" v-for="(item,index) in newslist" :key="index">
          <div class="context">
              <img :src="item.img_url" alt="">
              <div class="ititle">
                 {{item.title}}
              </div>
              <div class="bottontext">
                  <!-- 过滤器格式化时间 -->
                  <span>发表时间：{{item.add_time | getTime}}</span>
                  <span class="clickCount">点击：{{item.click}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NewsListItem',
    props: ['newslist'],     // 保存数据
}

</script>
<style scoped>
    .NewsListItem{
        width: 100%;
    }
    .listItem{
        width: 95%;
        margin-left: 2.3%;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #cdcdcd;
    }
    .context{
        width: 100%;
        height: 45px;
        position: relative;
        top: 7.5px;
    }
    .context img{
        height: 45px;
        width: 50px;
        float: left;
        margin-right: 5px;
    }
    .ititle{
        width: auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
        font-size: 14px;
    }
    .bottontext{
        width: 84%;
        font-size: 12px;
        color: var(--bgc);
        position: absolute;
        
        bottom: 0;
        left: 55px;
    }
    .clickCount{
        float: right;
    }
</style>