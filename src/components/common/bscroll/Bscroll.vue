<template>
<!-- 封装better-scroll -->
  <div class="wrapper" ref='wrapper'>
      <div class="content">
          <!-- 在插槽中添加滚动内容 -->
          <slot></slot>
      </div>
  </div>
</template>

<script>
// 引入插件
import BScroll from 'better-scroll'

export default {
    name:'Bscroll',
    // props 接收父组件传递过来的参数
    props:{
        probeType:{
            // 类型为 Number
            type:Number,
            // 不传值默认为 0
            default: 0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        },
        pullup: {
            type: Boolean,
            default: false
        },
        // 横向滚动
        scrollX: {
            type: Boolean,
            default: false
        },
        // 纵向滚动
        scrollY: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            scroll: {}
        }
    },
    methods: {
        // 封装getScrollY
        // 获取滚动的高度
        getScrollY() {
            return this.scroll ? this.scroll.y : 0
        },

        initScroll() {
            if(!this.$refs.wrapper){
                return
            }
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType: this.probeType,
                // 上拉加载
                pullUpLoad: this.pullUpLoad,
                pullup: this.pullup,
                scrollX: this.scrollX,
                scrollY: this.scrollY,
                click: true
            })
            this.scroll.on('scrollEnd',() => {
                // 调用父组件的方法
                this.$emit('scrollToEnd');
                // 延时调用
                setTimeout(() => {
                    // 调用 finishPullUp 开始下一次事件触发
                    // this.scroll.finishscrollEnd()
                },2000)
            })
        }
    },
    // mounted生命周期函数  dom元素被挂载
    mounted () {
        setTimeout(() => {
            this.initScroll();
        }, 20)


        // scrollTo 方法滚动到指定的位置
        // 参数1：x 目标x坐标
        // 参数2：y 目标y坐标
        // 参数3：time 到达目标坐标的动画时间
        // this.scroll.scrollTo(0,0);

        // this.scroll.on('scroll', (position) => {
        //     // 子组件传递参数通过 $emit 自定义事件
        //     // 将 position 参数传递到 home 组件
        //     // this.$emit('homeBackTop',position)
        // })

        // 监听上拉到底部事件
        
    }
}

</script>
<style scoped>
</style>