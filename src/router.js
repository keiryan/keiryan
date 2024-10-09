import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import VueIosToggle from "./pages/VueIosToggle.vue";
import Contact from "./pages/Contact.vue";

// import AboutView from './AboutView.vue'

const routes = [
  { path: "/", component: Home },
  { path: "/vue-ios-toggle", component: VueIosToggle },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
