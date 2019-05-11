import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  //  组件可以直接调用commit进行修改数据，可以不进行事件的派发dispatch
  //   actions: {
  //     changeCity (ctx, city) {
  //       //  通过触发commit事件，来触发mutations来修改数据
  //       ctx.commit('changeCity', city)
  //     }
  //   },
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
