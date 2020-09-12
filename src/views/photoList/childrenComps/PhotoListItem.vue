<template>
  <div class="PhotoListItem">
      <div class="item" v-for="(item,index) in photoListContent" :key="index">
          <img v-lazy="item.img_url" alt="" @load="imgLoad">
          <div class="itemContent">
              <div class="itemTitle">
                  <div class="itemText">{{item.zhaiyao}}</div>
              </div>
              <div class="itemTime">
                  <span class="addTime">发布时间：{{item.add_time | getTime}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'PhotoListItem',
    props: ['photoListContent'],
    methods: {
        imgLoad(){
            this.$emit('photoLoad')
        }
    }
}

</script>
<style scoped>
    .PhotoListItem{
        width: 100%;
    }
    .item{
        width: 95%;
        margin-left: 2.5%;
        margin-top: 15px;
        border-radius: 5px;
        height: 240px;
        background-color: red;
        position: relative;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
    }
    .item img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    .itemContent{
        width: 100%;
        height: 100px;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        color: #fff;
        padding: 5px 5px 0;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .itemTitle{
        width: 100%;
        height: 63px;
        font-size: 15px;
        text-overflow: ellipsis;
        /* white-space: pre-wrap; */
        overflow: hidden;
    }
    .itemText{
        width: 100%;
        height: 63px;
        font-size: 15px;
        text-overflow: ellipsis;
        white-space: pre-line;
        overflow: hidden;
        float: left;
    }
    .itemTime{
        margin-top: 7px;
        font-size: 13px;
    }
</style>