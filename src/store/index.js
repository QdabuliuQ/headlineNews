import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'  // 将actions单独抽离
import mutations from './mutations'

export default new Vuex.Store({
  state: {
    cartList: [],  // 保存商品信息
    allChecked: false
  },
  mutations,
  actions,
  modules: {
  }
})
