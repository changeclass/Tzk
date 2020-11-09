import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 共享数据
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      // 变更状态
      state.count++
    },
    addN (state, step) {
      // 变更状态
      state.count += step
    },
    sub (state) {
      state.count--
    }
  },
  actions: {
    // actions 不能直接修改state中的数据 必须通过context.commit触发
    AsyncAdd (context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    }
  },
  getters: {
    showNum: state => {
      return '当前最新数量是' + state.count
    }
  },
  modules: {}
})
