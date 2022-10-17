import {
  createRouter,
  createWebHistory,
  useRoute,
  useRouter,
} from 'vue-router'

const routes = [
  // {
  //   path: '/buttons',
  //   name: ROUTE_NAMES.buttons,
  //   component: () => import('@/pages/ButtonsPage.vue'),
  // },
  // {
  //   path: '/inputs',
  //   name: ROUTE_NAMES.inputs,
  //   component: () => import('@/pages/InputsPage.vue'),
  // },
  // {
  //   path: '/forms',
  //   name: ROUTE_NAMES.forms,
  //   component: () => import('@/pages/FormsPage.vue'),
  // },
  {
    path: '/app',
    name: 'app',
    component: () => import('../App.vue'),
  },
  // {
  //   path: '/web3',
  //   name: ROUTE_NAMES.web3,
  //   component: () => import('@/pages/Web3Page.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0, left: 0 }),
})

export { router, useRouter, useRoute }
