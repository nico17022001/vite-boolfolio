import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Error404 from './pages/Error404.vue';
import Blog from './pages/Blog.vue';


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
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/blog',
      name: 'blog',
      component: Blog
    }
  ]
})

export {router};