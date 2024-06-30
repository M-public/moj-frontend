import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdmainView from "@/views/AdmainView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import HideView from "@/views/HideView.vue";
import ACCESS_ENUM from "@/access/ACCESSENUM";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },

  {
    path: "/",
    name: "浏览题目",
    component: HomeView,
  },
  {
    path: "/about",
    name: "关于我的",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/admain",
    name: "管理员页面",
    component: AdmainView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/noAuth",
    name: "无权限页面",
    component: NoAuthView,
  },
  {
    path: "/hide",
    name: "测试隐藏页面",
    component: HideView,
    meta: {
      hideInMenu: true,
    },
  },
];
