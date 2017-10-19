import Vue from 'vue';
import Router from 'vue-router';

// Containers === Smart Components === Pages & SubPages
import AppHome from '@/containers/home/AppHome';
import AppProjects from '@/containers/projects/AppProjects';
import AppTimeline from '@/containers/timeline/AppTimeline';

import AppTimelineHome from '@/containers/timeline/content/AppTimelineHome';
import AppTimelineAccount from '@/containers/timeline/content/AppTimelineAccount';
import AppTimelineMessages from '@/containers/timeline/content/AppTimelineMessages';
import AppTimelineNotifications from '@/containers/timeline/content/AppTimelineNotifications';


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
  {
    path: '/timeline/',
    name: 'timeline',
    component: AppTimeline,
    children: [
      {
        name: 'timeline-home',
        path: '',
        component: AppTimelineHome,
      },
      {
        name: 'timeline-account',
        path: 'account',
        component: AppTimelineAccount,
      },
      {
        name: 'timeline-messages',
        path: 'messages',
        component: AppTimelineMessages,
      },
      {
        name: 'timeline-notifications',
        path: 'notifications',
        component: AppTimelineNotifications,
      },
    ],
  },
];

export default new Router({
  mode: 'history',
  routes,
});
