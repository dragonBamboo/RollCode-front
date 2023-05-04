import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionsView from '../views/QuestionsView.vue'
import InterView from '../views/InterView.vue'
import AboutView from '../views/AboutView.vue'
import Recommendations from '../components/Recommendations.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      { path: '', component: Recommendations, name: 'recommendations'},
      { path: 'home', component: HomeView, name: 'home' },
      { path: 'about', component: InterView, name: 'about' }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/questions',
    name: 'questions',
    component: QuestionsView
  },
  {
    path: '/interviews',
    name: 'interviews',
    component: InterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
