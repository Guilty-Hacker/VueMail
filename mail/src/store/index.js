import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],
  },
  mutations: {
    AddCounter(state,payload){
      payload.counter++
    },
    AddToCart(state,payload){
      state.cartList.push(payload)
    }

  },
  actions: {
    addCart(context, payload){
      // let oldProduct = null
      // for(let item of state.cartList){
      //   if(item.iid === payload.iid){
      //     oldProduct = item
      //   }
      // }
      let oldProduct = context.state.cartList.find(item=> item.iid === payload.iid)
      if(oldProduct){
        // oldProduct.count += 1
        context.commit('AddCounter', oldProduct)
      }else {
        payload.count = 1
        // context.CartList.push(payload)
        context.commit('AddToCart',payload)
      }

    }
  },
  modules: {
  }
})
