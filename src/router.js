import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/',
      name: 'contacts',
      component: Contacts
    },

    {
      path: '/',
      name: 'about',
      component: About
    }
  ]
})

export {router};