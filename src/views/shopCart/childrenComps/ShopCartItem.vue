<template>
  <div class="ShopCartItem">
      <van-swipe-cell class="swipercell" v-for="(item,index) in goodsListShopCart" :key="index">
        <div class="item">
            <div class="left">
                <van-checkbox class="checkboxs" @click="check(item.checked)" v-model="item.checked"></van-checkbox>
            </div>
            <div class="center">
                <div class="goodsImg">
                    <img :src="item.img[0].src" alt="">
                </div>
            </div>
            <div class="right">
                <div class="goodsInfo">
                    <div class="title">{{item.title}}</div>
                    <div class="info">
                        商品货号：{{item.id}}
                        <br>
                        商品库存：{{item.stock_quantity - 1}}
                    </div>
                    <div class="goodsPrice">
                        <span class="price">￥{{item.price}}</span>
                        <div class="stepper">
                            <div class="reduce" @click="reduce(item)">-</div>
                            <input class="num" type="text" :value="item.count">
                            <div class="add" @click="add(item)">+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template #right>
            <van-button @click="delGoods(index)" square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
  </div>
</template>

<script>
export default {
    name: 'ShopCartItem',
    data () {
        return {
            // checked: true,
            goodsListShopCart: [],
            value: 1
        }
    },
    methods: {
        // 减少
        reduce(item){
            if (item.count > 1) {
                this.$store.commit('lessGoodsCount', item)
            }
        },

        // 增加
        add(item){
            this.$store.commit('addGoodsCount', item)
        },

        // 选中/选不中
        check(checked){
            // 调用 vuex 的方法
            this.$store.commit('isChecked', checked)
            // 遍历 商品 数组
            for (const item of this.$store.state.cartList) {
                // if 判断出 checked 为 fasle 的选项
                if (!item.checked) {
                    // 将全选框设置为 false
                    this.$store.state.allChecked = false
                    // break 退出循环
                    break;
                }
                // 没有进入 if 判断设置为 true
                this.$store.state.allChecked = true
            }
        },

        // 移出商品
        delGoods(index){
            this.$store.state.cartList.splice(index,1)
        }
    },
    created () {
        this.goodsListShopCart = this.$store.state.cartList
    }
}

</script>
<style scoped>
    .swipercell{
        margin-top: 10px;
        border-radius: 8px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    }
    .delete-button {
        height: 100%;
    }
    .item{
        display: flex;
        height: 120px;
        background-color: #fff;
    }
    .left{
        flex: 0.8;
        text-align: center;
    }
    .checkboxs{
        margin-top: 47px;
        margin-left: 5px;
    }
    .center{
        flex: 3;
    }
    .goodsImg{
        width: 100%;
        height: 90%;
        margin-top: 5.2%;
        box-sizing: border-box;
        border-left: 1px solid #cdcdcd;
        border-right: 1px solid #cdcdcd;
    }
    .goodsImg img{
        width: 100%;
        height: 100%;
    }
    .right{
        flex: 6;
    }
    .goodsInfo{
        width: 100%;
        height: 90%;
        margin-top: 2.6%;
        padding-left: 8px;
        padding-right: 8px;
        position: relative;
    }
    .title{
        font-size: 15px;
        height: 42px;
        overflow: hidden;
    }
    .goodsPrice{
        position: absolute;
        bottom: 0;
        left: 8px;
        right: 8px;
        height: 25px;
        line-height: 25px;
    }
    .price{
        color: var(--bgc);
        font-size: 19px;
    }
    .info{
        font-size: 12px;
        color: #818181;
    }
    .stepper{
        width: 50%;
        /* height: 100%; */
        height: 25px;
        float: right;
        display: flex;
    }
    .stepper .reduce{
        flex: 2;
        background-color: var(--bgc);
        color: #Fff;
        text-align: center;
        line-height: 25px;
        border-radius: 3px;
    }
    .num{
        flex: 4;
        height: 25px;
        text-align: center;
        padding: 0 0;
        margin-left: 3px;
        margin-right: 3px;
    }
    .add{
        flex: 2;
        background-color: var(--bgc);
        color: #Fff;
        text-align: center;
        line-height: 25px;
        border-radius: 3px;
    }
</style>