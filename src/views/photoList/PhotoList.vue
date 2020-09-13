<template>
  <div class="PhotoList">
    <!-- 顶部导航栏 -->
    <navbar class="navbar">
        <div 
        class="leftbox"
        slot="left"
        @click="back">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center">图片资讯</div>
    </navbar>
    <!-- 分类导航栏 -->
    <div class="mui-content" style="">
        <div id="slider" class="mui-slider" style="background-color: #FFF; height: 30px; line-height: 30px; box-shadow: 0 2px 2px rgba(0,0,0,0.1)">
            <div id="sliderSegmentedControl"
             class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
             style="height: 30px; line-height: 30px">
                <div 
                class="mui-scroll"
                 style="height: 30px; line-height: 30px">
                    <a
                     v-for="(item,index) in navItemTitle"
                     :key="index"
                     @click="tabClick(item.id)"
                     style="fontSize: 14px; height: 100%; line-height: 30px"
                     :class="{'mui-active': index === currutIndex}"
                     class="mui-control-item"
                     href="#item1mobile">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- 图片列表 -->
    <bscroll
    v-show="photoListContent.length !== 0" 
    class="photoContent"
    ref="photo">
        <photo-list-item      
        :photoListContent="photoListContent"
        @photoLoad="photoLoad"></photo-list-item>
    </bscroll>
    <div class="noPhoto" v-show="photoListContent.length === 0">
        没有更多内容了:(
    </div>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'   // 顶部导航栏组件
import TransverseNav from 'components/common/transverseNav/TransverseNav'   // 横向导航栏
import PhotoListItem from './childrenComps/PhotoListItem'   // 图片列表组件

import mui from 'assets/mui/js/mui.min.js'   // 引入 mui js 文件
import bscroll from 'components/common/bscroll/Bscroll'   // 滚动组件

import {getPhotoListTitle,getPhotoListPic} from 'network/photoList'   // 网络请求

// 引入滑动模块
// .mui-scroll-wrapper 表示需要进行滑动的区域
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});


export default {
    name: 'PhotoList',
    data () {
        return {
            currutIndex: 0,  // 标记索引
            navItemTitle: [],  // 标题数据
            navTitleId: 0,  // 标题id
            photoListContent: []  // 图片列表数据
        }
    },  
    methods: {
        // 返回上一步
        back(){
            this.$router.go(-1)
        },

        // 导航栏切换
        tabClick(id){
            // 调用方法 发送请求
            this.photoListPic(id)
            // this.$refs.photo.scroll.refresh();
        },

        // 封转网络请求函数
        photoListPic(id){
            // 图片列表请求
            getPhotoListPic(id).then(res => {
                this.photoListContent = res.data.message;
            })
        },

        // 监听图片加载  重新计算高度
        photoLoad(){
            this.$refs.photo.scroll.refresh();
        }
    },
    created () {
        // 图片标签请求
        getPhotoListTitle().then(res => {
            // 保存数据
            this.navItemTitle = res.data.message
            // console.log(this.navItemTitle);
            // 由于数据中没有 全部 分类，需要手动添加
            this.navItemTitle.unshift({id: 0, title: '全部'})
        }),

        // 获取图片列表数据
        getPhotoListPic(this.navTitleId).then(res => {
            this.photoListContent = res.data.message;
        })
    },
    mounted () {
        mui('.mui-scroll-wrapper').scroll({
            bounce: true,  //是否回弹
            scrollY: false, //是否竖向滚动
            scrollX: true, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0, //初始化时滚动至y
            indicators: true, //是否显示滚动条
        });

        this.$nextTick(() => {
            if(this.photoListContent.length !== 0){
                this.$refs.photo.scroll.refresh();
            }
            
        })
    },
    components: {
        navbar,
        TransverseNav,
        PhotoListItem,
        bscroll
    }
}

</script>
<style scoped>
    .PhotoList{
        position: relative;
        height:100vh;
    }
    .photoContent{
        position: absolute;
        top: 74px;
        left: 0;
        right: 0;
        bottom: 49px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .noPhoto{
        position: absolute;
        top: 74px;
        left: 0;
        right: 0;
        bottom: 49px;
        text-align: center;
        height: 300;
        line-height: 300px;
        font-size: 30px;
        color: var(--bgc);
        font-weight: 550;
        overflow-y: hidden;
    }
    .navbar{
        background-color: var(--bgc);
        color: #fff;
        position: relative;
        z-index: 40;
    }
    .leftbox img{
        margin-top: 11px;
    }
    .mui-active{
        color: var(--bgc);
    }
</style>