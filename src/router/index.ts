import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tutorial",
    name: "Tutorial",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tutorial" */ "../views/Tutorial.vue")
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import(/* webpackChunkName: "faq" */ "../views/FAQ.vue")
  },
  {
    path: "/invest",
    name: "Invest",
    component: () => import(/* webpackChunkName: "invest" */ "../views/Invest.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/opengpg",
    name: "OpenPGP",
    component: () => import(/* webpackChunkName: "openpgp" */ "../views/OpenGPG.vue")
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () => import(/* webpackChunkName: "reviews" */ "../views/Reviews.vue")
  },
  {
    path: "/api",
    name: "API",
    component: () => import(/* webpackChunkName: "api" */ "../views/API.vue")
  },
  {
    path: "/mix/:mixCode/complete",
    name: "MixComplete",
    component: () => import(/* webpackChunkName: "mixComplete" */ "../views/MixComplete.vue")
  },
  {
    path: "/mix/:mixCode",
    name: "MixStatus",
    component: () => import(/* webpackChunkName: "mixStatus" */ "../views/Status.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
