import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    back: true,
    api: "http://localhost:4000/",
    title: "外汇新闻网"
  },
  mutations: {},
  actions: {}
});
