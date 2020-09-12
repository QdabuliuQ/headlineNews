<template>
  <div id="NewsInfo" v-if="newsData">
    <navbar class="navbar">
      <div class="leftbox" slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div class="rightbox" slot="right">
        <img src="~assets/img/common/fenxiang.png" alt />
      </div>
    </navbar>
    <bscroll ref="newsInfobscroll" class="newsScroll">
      <!-- 通过 $route.params.id 获取路由中传递的 id -->
      <div class="Newscontainer">
        <div class="NewsTitle">{{newsData.title}}</div>
        <div class="NewsSubTime">
          <!-- 使用全局过滤器 格式化时间 -->
          <span>发布时间：{{newsData.add_time | getTime}}</span>
          <span>点击：{{newsData.click}}次</span>
        </div>
        <!-- 使用 v-html 指令可以解析 html 标签 -->
        <!-- content数据是html结构 -->
        <div class="NewsContent" v-html="newsData.content"></div>
        <!-- 底部按钮组件 -->
        <news-list-item @openComment="openComment"></news-list-item>
      </div>
    </bscroll>
    <!-- 评论组件遮罩层 -->
    <div v-show="commentShow" class="box"></div>
    <!-- 评论组件 -->
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
      <comment-list :pIndex="id" v-show="commentShow" class="comment-list" @close="close"></comment-list>
    </transition>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar"; // 顶部导航栏组件
import Comment from "components/context/comment/Comment"; // 评论栏组件
import NewsListItem from "./NewsNavBottom"; // 底部按钮组件
import CommentList from "components/context/commentList/CommentList"; // 评论组件

import { getNewsInfo, getComments } from "network/newsList"; // 新闻内容网络请求

import Bscroll from "components/common/bscroll/Bscroll"; // 滚动组件

export default {
  name: "NewsInfo",
  data() {
    return {
      id: this.$route.params.id, // 保存传递过来的 id 参数
      newsData: null, // 保存新闻内容数据
      commentShow: false,
    };
  },
  components: {
    navbar,
    Bscroll,
    Comment,
    NewsListItem,
    CommentList,
  },
  methods: {
    // 返回上一个组件
    back() {
      this.$router.go(-1);
    },

    // 关闭评论组件
    close() {
      this.commentShow = false;
    },

    // 开启评论组件
    openComment() {
      this.commentShow = true;
    },

    // 半场动画函数
    beforeEnter(el) {
      el.style.transform = "translateY(350px)";
    },
    enter(el, done) {
      // 强制执行动画
      el.offsetWidth;
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.3s linear";
      // done()
    },
    afterEnter(el, done) {},
  },
  created() {
    // 新闻内容请求
    getNewsInfo(this.id).then((res) => {
      this.newsData = res.data.message[0];
    })
  },
};
</script>
<style scoped>
#NewsInfo {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.Newscontainer {
  padding: 12px 7px;
}
.navbar {
  background-color: var(--bgc);
  color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
}
.leftbox {
  text-align: center;
}
.leftbox img {
  margin-top: 11px;
}
.rightbox {
  text-align: center;
}
.rightbox img {
  width: 25px;
  height: 25px;
  margin-top: 9px;
}
.NewsTitle {
  text-align: center;
  margin: 7px 0;
  font-size: 20px;
}
.NewsSubTime {
  font-size: 13px;
  color: var(--bgc);
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 10px;
  border-bottom: 1px solid #d1d1d3;
}
.NewsContent {
  border-bottom: 1px solid #d1d1d3;
  padding-bottom: 10px;
  margin-top: 10px;
  font-size: 15px;
}
.newsScroll {
  overflow: hidden;
  /* height: calc(100% - 44px - 49px - 38px); */
  height: calc(100% - 44px - 49px);
}
.comment {
  background-color: rgba(241, 241, 241, 0.637);
}
.comment-list {
  position: absolute;
  bottom: 49px;
  z-index: 20;
}
.box {
  /* height: 100%; */
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>