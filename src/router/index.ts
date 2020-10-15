import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ToDo from '../views/ToDo.vue';

Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDo
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
