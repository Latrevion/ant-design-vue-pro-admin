import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import findLast from "lodash/findLast";
import { check, isLogin } from "../utils/auth";
import { notification } from "ant-design-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    hideInMenu: true,
    component: () =>
      import(/*webpackChunkName:'layout' */ "../layouts/UserLayout.vue"),
    children: [
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/*webpackChunkName:'user' */ "../views/User/LoginView.vue"),
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/*webpackChunkName:'user' */ "../views/User/RegisterView.vue"),
      },
    ],
  },
  {
    path: "/",
    meta: { authority: ["admin", "user"] },
    component: () =>
      import(/*webpackChunkName:'layout' */ "../layouts/BasicLayout.vue"),
    children: [
      {
        path: "/",
        redirect: "/dashboard/analysis",
      },
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { icon: "dashboard", title: "仪表盘" },
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            meta: { title: "分析页" },
            component: () =>
              import(
                /*webpackChunkName:'layout' */ "../views/DashBoard/Analysis.vue"
              ),
          },
        ],
      },
      {
        path: "/form",
        name: "form",
        meta: { icon: "form", title: "表单页", authority: ["admin"] },
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/form/basic-form",
            name: "basicform",
            meta: { title: "基础表单" },
            component: () =>
              import(
                /*webpackChunkName:'form' */ "../views/Forms/BasicForm.vue"
              ),
          },
          {
            path: "/form/step-form",
            name: "stepform",
            hideChildrenInMenu: true,
            meta: { title: "分步表单" },
            component: () =>
              import(/*webpackChunkName:'form' */ "../views/Forms/StepForm"),
            children: [
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info",
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () =>
                  import(
                    /*webpackChunkName:'form' */ "../views/Forms/StepForm/Step1.vue"
                  ),
              },
              {
                path: "/form/step-from/confirm",
                name: "confirm",
                component: () =>
                  import(
                    /*webpackChunkName:'form' */ "../views/Forms/StepForm/Step2.vue"
                  ),
              },
              {
                path: "/form/step-from/result",
                name: "result",
                component: () =>
                  import(
                    /*webpackChunkName:'form' */ "../views/Forms/StepForm/Step3.vue"
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    name: "403",
    hideInMenu: true,
    component: () =>
      import(/*webpackChunkName:'exception' */ "../views/Forbidden.vue"),
  },
  {
    path: "*",
    name: "404",
    hideInMenu: true,
    component: () =>
      import(/*webpackChunkName:'exception' */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    Nprogress.start();
  }
  const record = findLast(to.matched, (record) => record.meta.authority);
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== "/user/login") {
      next({
        path: "/user/login",
      });
    } else if (to.path !== "/403") {
      notification.error({
        message: "403",
        description: "你没有权限访问，请联系管理员",
      });
      next({
        path: "/403",
      });
    }
    Nprogress.done();
  }
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
