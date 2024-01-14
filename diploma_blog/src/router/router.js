import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PostPage from '@/pages/PostPage'
import AboutPage from '@/pages/AboutPage'
import PostPageById from '@/pages/PostPageById'
import PostPageBeforeVueX from '@/pages/PostPageBeforeVueX'
import NotFound from '@/pages/NotFound'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  // 000000000000000000000000000000
  {
    path: '/store',
    name: 'store',
    component: PostPageBeforeVueX
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
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/posts/:id',
    name: 'postId',
    component: PostPageById
  },
  {
    path: '/:pathMatch(.*)*', 
		name: '404', 
		component: NotFound, 
	}, 
    // {
  //   path: '/404', 
	// 	name: '404', 
	// 	component: NotFound, 
	// }, 
  // { 
	// 	path: '*', 
	// 	redirect: '/404' 
	// }
  
  // {
  //   path: '/store',
  //   name: 'store',
  //   component: PostPage 
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
