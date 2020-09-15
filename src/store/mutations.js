export default {
    // 添加商品
    addGoods(state,payload){
        state.cartList.unshift(payload)
    },

    // 添加数量
    addGoodsCount(state,payload){
        payload.count++
    },

    // 减少商品
    lessGoodsCount(state,payload){
        payload.count--
    },

    // 修改是否选中
    isChecked(state,payload){
        state.checked = !payload
        // for (const item of state.cartList) {
        //     if (!item.checked) {
                
        //     }
        // }
    },

    allChecked(state,payload){
        for (let i = 0; i < state.cartList.length; i++) {
            state.cartList[i].checked = payload
        }
    }
}