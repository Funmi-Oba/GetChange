
import { createStore } from 'vuex'

// Create a new store instance.
export const counterStore = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state, payload) {
      state.count = payload
    },
     decrement (state) {
      state.count--
    }
  }
})