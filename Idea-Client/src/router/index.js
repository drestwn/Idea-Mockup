import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import RegisPage from "../views/RegisPage.vue";
import DetailPage from "../views/DetailPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/loginPage",
      name: "loginPage",
      component: LoginPage,
    },
    {
      path: "/regisPage",
      name: "regisPage",
      component: RegisPage,
    },
    {
      path: "/fav",
      name: "favorite",
      component: () => import("../views/Favorite.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: DetailPage,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

// router.beforeEach(async (to, from, next) => {
//   if (to.name === "loginPage" && localStorage.getItem("access_token")) {
//     next({ name: 'HomePage' })
//   }
// })
//router
export default router;
