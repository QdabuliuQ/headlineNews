<template>
  <div class="Comment">
      <div class="commentText" ref="box">
           <input type="text"
           class="textBox"
           placeholder="发表评论吧~"
           @focus="commentChange"
           @blur="commentBlur"
           v-model="commentsText"
           :class="{changeBorder : changeShow}"
           >
      </div>
      <div class="commentSub">
          <button @click="sendComment">发表</button>
      </div>
  </div>
</template>

<script>

export default {
    name: 'Comment',
    data () {
        return {
            changeShow: false,
            commentsText: ""  
        }
    },
    props: ['commentArr'],
    methods: {
        commentChange(){
            this.changeShow = true
        },
        commentBlur(){
            this.changeShow = false
            
        },
        sendComment(){
            
            if(this.commentsText === ""){
                this.$toast.show("输入内容不能为空",1900)
            }else {
                // 获取数据数组  unshift  添加
                // {以对象的形式}
                this.commentArr.unshift({add_time:new Date(), content: this.commentsText, user_name: "匿名用户"})
                // 清空 v-model 变量
                this.commentsText = ""
            }
            // console.log(this.commentsText);
        }
    },
    created () {
        
    },
    mounted () {
        this.$nextTick(() => {
        })
        // this.$refs.bsItem.scroll.refresh();
    }
}

</script>
<style scoped>
    .Comment{
        width: 100%;
        height: 38px;

        box-sizing: border-box;
        /* border-top: 1px solid rgb(214, 214, 214); */
    }
    .commentText{
        width: 75%;
        height: 30px;
        /* margin-top: 3px; */
        position: relative;
        top: 2.5px;
        margin-left: 2.5%;
        float: left;
    }
    .textBox{
        font-size: 14px;
        width: 100%;
        height: 32px;
        border: 1px solid #cdcdcd;
        /* border: 1px solid var(--bgc); */
        resize: none;
        line-height: 32px;
        text-indent: 1em;
        border-top-left-radius: 32px;
        border-bottom-left-radius: 32px;
        overflow-y: hidden;
    }
    .commentSub{
        width: 20%;
        height: 32px;
        float: left;
    }
    .commentSub button{
        width: 100%;
        height: 100%;
        border: 0;
        outline: none;
        color: #fff;
        background-color: var(--bgc);
        position: relative;
        top: 2.5px;
        border-top-right-radius: 32px;
        border-bottom-right-radius: 32px;
    }
    .changeBorder{
        border: 1px solid var(--bgc);
    }
</style>