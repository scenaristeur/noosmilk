import { createStore } from 'vuex'

export default createStore({
  state: {
    roomId: "",
    user: null
  },
  getters: {
  },
  mutations: {
    setRoomId(state, roomId){
      state.roomId = roomId
    }
  },
  actions: {
  },
  modules: {
  }
})
