import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Home from "../views/Home.vue";
import Error from "../views/Error.vue";

Vue.use(VueRouter);

const DEFAULT_TITLE = "FoxMixer - High Quality Bitcoin Mixer";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {title: "FoxMixer - High Quality Bitcoin Mixer"}
  },
  {
    path: "/mixer",
    name: "Mixer",
    component: () => import(/* webpackChunkName: "mixer" */ "../views/Mixer.vue"),
    meta: {title: "FoxMixer - Start"}
  },
  {
    path: "/tutorial",
    name: "Tutorial",
    component: () => import(/* webpackChunkName: "tutorial" */ "../views/Tutorial.vue"),
    meta: {title: "FoxMixer - Tutorial"}
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import(/* webpackChunkName: "faq" */ "../views/FAQ.vue"),
    meta: {title: "FoxMixer - FAQ"}
  },
  {
    path: "/invest",
    name: "Invest",
    component: () => import(/* webpackChunkName: "invest" */ "../views/Invest.vue"),
    meta: {title: "FoxMixer - Invest"}
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
    meta: {title: "FoxMixer - Contact"}
  },
  {
    path: "/opengpg",
    name: "OpenPGP",
    component: () => import(/* webpackChunkName: "openpgp" */ "../views/OpenGPG.vue"),
    meta: {title: "FoxMixer - OpenPGP Public Key"}
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () => import(/* webpackChunkName: "reviews" */ "../views/Reviews.vue"),
    meta: {title: "FoxMixer - Reviews"}
  },
  {
    path: "/api",
    name: "API",
    component: () => import(/* webpackChunkName: "api" */ "../views/API.vue"),
    meta: {title: "FoxMixer - Developer API"}
  },
  {
    path: "/mix/:mixCode/complete",
    name: "MixComplete",
    component: () => import(/* webpackChunkName: "mixComplete" */ "../views/MixComplete.vue"),
    meta: {title: "FoxMixer - Your Mix is Ready!"}
  },
  {
    path: "/mix/:mixCode",
    name: "MixStatus",
    component: () => import(/* webpackChunkName: "mixStatus" */ "../views/Status.vue"),
    meta: {title: "FoxMixer - Status of Mix"}
  },
  {
    path: "/why",
    name: "Why",
    component: () => import(/* webpackChunkName: "why" */ "../views/Why.vue"),
    meta: {title: "FoxMixer - Why You should Mix Your Bitcoins"}
  },
  {
    path: "*",
    name: "Error",
    component: Error,
    meta: {title: "FoxMixer"}
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to?.meta?.title || DEFAULT_TITLE;
  });
});

export default router;
