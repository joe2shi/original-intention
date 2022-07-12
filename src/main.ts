import { createApp } from 'vue'
import App from '@/App.vue'
import router, { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupPerfectScrollbar } from '@/plugins/perfect-scrollbar'

const app = createApp(App)
// router
setupRouter(app)
// store
setupStore(app)
// perfect-scrollbar
setupPerfectScrollbar(app)

router.isReady().then(() => {
  app.mount('#app')
})
