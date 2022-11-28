import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
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
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
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
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/form/basic-form",
            name: "basicform",
            component: () =>
              import(
                /*webpackChunkName:'form' */ "../views/Forms/BasicForm.vue"
              ),
          },
          {
            path: "/form/step-form",
            name: "stepform",
            component: () =>
              import(
                /*webpackChunkName:'form' */ "../views/Forms/StepForm/index.vue"
              ),
            children: [
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info",
              },
              {
                path: "/form/step-from/info",
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
    name: "404",
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
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
