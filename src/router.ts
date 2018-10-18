import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NewList from "./views/News.vue";
import Detaile from "./views/Deataile.vue";
import Login from "./views/Login.vue";
import Reg from "./views/Reg.vue";
import Information from "./views/Information.vue";
import People from "./views/People.vue";
import Getmsg from "./views/Getmsg.vue";

Vue.use(Router);

export default new Router({
  routes: [
    // 主页
    {
      path: "/",
      name: "home",
      component: Home
    },
    // 新闻列表
    {
      path: "/news",
      name: "news",
      component: NewList
    },
    // 新闻详情
    {
      path: "/detaile",
      name: "detaile",
      component: Detaile
    },
    // 会员登陆
    {
      path: "/login",
      name: "login",
      component: Login
    },
    // 会员注册
    {
      path: "/reg",
      name: "reg",
      component: Reg
    },
    // 找回密码
    {
      path: "/getmsg",
      name: "getmsg",
      component: Getmsg
    },
    // 市场行情
    {
      path: "/information",
      name: "information",
      component: Information
    },
    // 个人中心
    {
      path: "/people",
      name: "people",
      component: People
    }
  ]
});
