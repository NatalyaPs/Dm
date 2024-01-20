import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PostPage from '@/pages/PostPage'
import AboutPage from '@/pages/AboutPage'
import NotFound from '@/pages/NotFound'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/:pathMatch(.*)*', 
		name: '404', 
		component: NotFound, 
	}, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
