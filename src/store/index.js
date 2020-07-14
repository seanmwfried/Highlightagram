import Vue from "vue";
import Vuex /*, { Store }*/ from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  /***********
   * STATE
   ***********/
  state: {
    userName: "Noxious",
    currentList: null,
    sideBarIsExpanded: false
  },
  /***********
   * MUTATIONS
   ***********/
  mutations: {
    //Setting user ID after login
    setUserName: (state, payload) => (state.userName = payload.userName),
    //Setting current DB query for never ending scrolling
    setCurrentList: (state, payload) => (state.currentList = payload.currentList),
    //Setting current state of sidebar to update app styles
    setSideBarIsExpanded: (state, payload) => (state.sideBarIsExpanded = payload.sideBarIsExpanded)
  },
  /***********
   * ACTIONS
   ***********/
  actions: {
    //Setting user ID after login
    setUserName: ({ commit }, payload) => {
      commit("setUserName", {
        userName: payload.userName
      });
    },
    //Setting current DB query for never ending scrolling
    setCurrentList: ({ commit }, payload) => {
      commit("setCurrentList", {
        currentList: payload.currentList
      });
    },
    //Setting current state of sidebar to update app styles
    setSideBarIsExpanded: ({ commit }, payload) => {
      commit("setSideBarIsExpanded", {
        sideBarIsExpanded: payload.sideBarIsExpanded
      });
    }
  },
  /***********
   * GETTERS
   ***********/
  getters: {
    getUserName: state => state.userName,
    getCurrentList: state => state.currentList,
    getSideBarIsExpanded: state => state.sideBarIsExpanded
  }
});
