import { createRouter, createWebHistory } from 'vue-router'
import { App } from 'vue'
import dashboards from '@/router/modules/dashboards'
import authorize from '@/router/modules/authorize'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', redirect: '/dashboards' }, ...dashboards, ...authorize]
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
