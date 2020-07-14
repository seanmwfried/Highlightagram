import Vue from "vue";
import VueRouter from "vue-router";
import Feed from "../components/Feed";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Feed",
    component: Feed
  }
];

const router = new VueRouter({
  routes
});

export default router;
