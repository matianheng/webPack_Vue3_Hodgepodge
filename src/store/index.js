import { createStore } from 'vuex'

const store = createStore({
  state: {
    customNodeObjVuex:{},
    cellChangedNode:{}
  },
  getters: {},
  mutations: {
    changeCustomNodeObjVuex(state,customNodeObjVuex){
      state.customNodeObjVuex = customNodeObjVuex;
  },
  cellChangedNodefn(state,cellChangedNode){
    state.cellChangedNode = cellChangedNode;
},
  },
  actions: {}
})

export default store
