import { createRouter, createWebHashHistory } from 'vue-router';
import App from '../App.vue';

const routes = [
  { path: '/', component: App },
];

const router = createRouter({
  history: createWebHashHistory(),  // Aquí usamos hash mode
  routes,
});

export default router;
