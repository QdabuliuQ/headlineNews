<template>
  <div class="PhotoListInfo">
    <navbar class="infoNavbar">
      <div @click="back" class="leftbox" slot="left">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center">图片资讯</div>
    </navbar>
    <div class="mui-scroll-wrapper" style="top: 44px; bottom: 49px">
      <div class="mui-scroll">
        <div class="Photocontainer">
          <div class="PhotoTitle">{{imgInfo.title}}</div>
          <div class="PhotoSubTime">
            <!-- 使用全局过滤器 格式化时间 -->
            <span>发布时间：{{imgInfo.add_time | getTime}}</span>
            <span>点击：{{imgInfo.click}}次</span>
          </div>

          <!-- 缩略图 -->
          <div class="thumImg">
              
            <img class="preview-img"
            v-for="(item, index) in list"
            :src="item.src" height="100"
            @click="$preview.open(index, list)" :key="item.src">
          </div>
          <!-- 使用 v-html 指令可以解析 html 标签 -->
          <!-- content数据是html结构 -->
          <div class="PhotoContent" v-html="imgInfo.content"></div>
          <bottom-nav @openComment="openComment"></bottom-nav>
        </div>
      </div>
    </div>
    
    <!-- 评论组件遮罩层 -->
    <div v-show="isShow" class="box"></div>
    <!-- 评论组件 -->
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
      <comment-list :pIndex="id" v-show="isShow" @close="close" class="comment-list"></comment-list>
    </transition>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar"; // 顶部导航栏
import bottomNav from "components/context/bottomNav/BottomNav"; // 底部导航栏组件
import commentList from "components/context/commentList/CommentList"; // 评论组件

import { getPhotoListInfo,getPhotoThumImg } from "network/photoList"; // 图片详情请求

import mui from 'assets/mui/js/mui.min.js'   // 引入 mui js 文件

// 引入滑动模块
// .mui-scroll-wrapper 表示需要进行滑动的区域
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});


export default {
  name: "PhotoListInfo",
  data() {
    return {
      id: this.$route.params.id, // 保存路由传递的id参数
      imgInfo: {},  // 图片资讯内容
      isShow: false,   // 是否显示评论区
      list: []   // 图片缩略图
    };
  },
  methods: {
    // 返回上一层
    back() {
      this.$router.go(-1);
    },

    openComment() {
      this.isShow = true;
    },

    close() {
      this.isShow = false;
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

    handleClose () {
       console.log('close event')
    }
  },
  components: {
    navbar,
    bottomNav,
    commentList,
  },

  created() {
    // 获取请求
    getPhotoListInfo(this.id).then((res) => {
      this.imgInfo = res.data.message[0];
    })

    getPhotoThumImg(this.id).then(res => {        
        res.data.message.forEach(item => {
            item.msrc = res.data.message.src
            item.w = 600;
            item.h = 400;
        })
        this.list = res.data.message
        console.log(this.list);
    })
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
  }
};
</script>
<style scoped>
*{
  touch-action: none
}
.Photocontainer {
  position: relative;
  padding: 12px 7px;
}
.infoNavbar {
  background-color: var(--bgc);
  color: #fff;
}
.leftbox img {
  margin-top: 11px;
}
.PhotoTitle {
  text-align: center;
  margin: 7px 0;
  font-size: 20px;
}
.PhotoSubTime {
  font-size: 13px;
  color: var(--bgc);
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 10px;
  border-bottom: 1px solid #d1d1d3;
}
.PhotoContent {
  border-bottom: 1px solid #d1d1d3;
  padding-bottom: 10px;
  margin-top: 10px;
  font-size: 15px;
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
.comment-list {
  position: absolute;
  bottom: 49px;
  z-index: 20;
}
.imgs{
    width: 100px;
    margin: 5px;
    height: 90px;
}
.thumImg img{
    margin: 5px 0 0 10px ;
}
</style>