import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import login from "./modules/login";
Vue.use(Vuex);
const store = new Vuex.Store({
  // 定义初始化变量
  state: {},
  // 获取状态管理器里的值
  getters: {},
  // 更新状态管理器
  mutations: {},
  // 异步更新状态管理器
  actions: {},
  //   其它模块状态
  modules: {
    login,
  },
  plugins: [
    createPersistedState({ storage: window.sessionStorage, key: "vue-theme" }),
  ],
});

export default store;
