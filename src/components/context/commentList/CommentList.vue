<template>
  <div class="CommentList">
    <navbar class="commentTitle">
      <div class="leftbox" slot="left" @click="closeComment">
        <img src="~assets/img/newsList/guanbi.png" alt />
      </div>
      <div slot="center">{{commentArr.length}}条评论</div>
    </navbar> 
    <bscroll 
    ref="bsComment"
    class="itemContent"
    :probeType="3"
    :pullup="true"
    :pullUpLoad="true"
    @scrollToEnd="scrollToEnd">
      <div class="bsItem" v-if="commentArr.length !== 0">
        <div class="commentItem" v-for="(item,index) in commentArr" :key="index">
          <div class="useName">
            <span>{{item.user_name}}</span>
            : {{item.content}}
          </div>
          <div class="addTime">发布时间：{{item.add_time | getTime}}</div>
        </div>
      </div>
      <div class="noComment" v-else>没有更多评论了:(</div>
    </bscroll>
    <comment 
    class="comment"
    :commentArr="commentArr"></comment>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar"; // 顶部导航栏组件
import Comment from "components/context/comment/Comment"; // 评论组件

import bscroll from "components/common/bscroll/Bscroll";

import { getComments } from "network/newsList"; // 评论信息组件

export default {
  name: "CommentList",
  props: ["pIndex"],
  data() {
    return {
      commentArr: [],
      index: 0,
      timer: null
    };
  },
  methods: {
    // 关闭按钮事件
    closeComment() {
      // 传递事件
      this.$emit("close");
    },

    // 获取评论数据
    MgetComments(id) {
      let pageIndex = 1;
      // 调用 方法 发送请求
      getComments(id, pageIndex).then((res) => {
        // 判断是否有 评论 数据
        if (res.data.message.length !== 0) {
          this.commentArr = res.data.message;
          console.log(this.commentArr);
          // pageIndex 自增 获取下一页的数据
          pageIndex++;
        }
      });
    },
    scrollToEnd(){
      // this.MgetComments(this.$route.params.id)
    }
  },
  components: {
    navbar,
    Comment,
    bscroll,
  },
  created() {
    this.MgetComments(this.pIndex);   // 获取评论数据
    // 定时器
    // this.timer = setInterval(() => {
    //     this.index ++;
    //     // 判断是否 index 到 30
    //     if(this.commentArr.length !== 0){
    //         if (this.index > 20) {
    //           // 计算滚动高度
    //           this.$refs.bsItem.scroll.refresh();
    //           // 清除定时器
    //           clearInterval(this.timer)
    //           this.index = 0
    //         }
    //     }
    // },100)
  },
  mounted () {
    // this.$nextTick(() => {
    //   console.log(this.$refs.bsComment);
    // })
  },
  update () {
    this.$refs.bsComment.scroll.refresh()
  }
};
</script>
<style scoped>
.bsItem {
    /* height: 100%;
    position: relative; */
}
.CommentList {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 350px;
  background-color: #fff;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}
.commentTitle {
  width: 100%;
  height: 35px;
  text-align: center;
  line-height: 35px;
  color: #000;
  background-color: #fff;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.7);
}
.commentItem {
  width: 100%;
}
.useName {
  padding: 8px 10px;
  font-size: 18px;
}
.useName span {
  font-weight: 550;
}
.addTime {
  width: 95%;
  /* padding: 0 10px; */
  margin-left: 2.5%;
  font-size: 13px;
  color: var(--bgc);
  padding-bottom: 5px;
  border-bottom: 1px solid #cdcdcd;
}
.leftbox img {
  width: 15px;
  height: 15px;
  margin-top: 9.5px;
}
.comment {
  position: absolute;
  bottom: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
}
.noComment {
  height: 277px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
}
.itemContent {
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 38px;
  overflow: hidden;
}
</style>