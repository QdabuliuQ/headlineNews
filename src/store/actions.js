// import { reject, resolve } from "core-js/fn/promise"

export default {
    // context vuex的数据
    // payload 实参
    addGoodsCart(context,payload){
        // 返回一个 Promise   resolve 成功的回调
        return new Promise((resolve,reject) => {
            let oldProduct = null;
            
            // 遍历 购物车 数组
            for (let i = 0; i < context.state.cartList.length; i++) {
                // 发现 购物车中 id 和参数 id 一样
                if (context.state.cartList[i].id === payload.id) {
                    oldProduct = context.state.cartList[i]
                }
            }

            
            if (oldProduct) {
                context.commit('addGoodsCount',oldProduct)
                resolve('商品数量+1')
            } else {
                context.commit('addGoods',payload)  // 添加商品 mutations方法
                resolve('添加购物车成功:)')
            }
        })
    }   
}