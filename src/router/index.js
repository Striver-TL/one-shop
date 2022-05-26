import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach(() => {});

export default router;
