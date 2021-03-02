import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "intro",
    component: () => import("@/views/base/intro.vue")
  },
  {
    path: "/template-syntax",
    name: "templateSyntax",
    component: () => import("@/views/base/template-syntax.vue")
  },
  {
    path: "/computed-and-watcher",
    name: "computedWatcher",
    component: () => import("@/views/base/computed-and-watcher.vue")
  },
  {
    path: "/class-and-style",
    name: "classStyle",
    component: () => import("@/views/base/class-and-style.vue")
  },
  {
    path: "/condition-and-list-render",
    name: "conditionList",
    component: () => import("@/views/base/condition-and-list-render.vue")
  },
  {
    path: "/event-handle",
    name: "eventHandle",
    component: () => import("@/views/base/event-handle.vue")
  },
  {
    path: "/form-input-bind",
    name: "formInputBind",
    component: () => import("@/views/base/form-input-bind.vue")
  },
  {
    path: "/lifecycle",
    name: "lifeCycle",
    component: () => import("@/views/base/lifecycle.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
