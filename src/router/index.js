import Vue from 'vue';
import Router from 'vue-router';

// Containers === Smart Components === Pages!
import AppHome from '@/containers/AppHome';
import AppProjects from '@/containers/AppProjects';

// Use Vue Router
Vue.use(Router);

// Application Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: AppHome,
  },
  {
    path: '/projects',
    name: 'projects',
    component: AppProjects,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
