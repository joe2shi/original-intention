import { createApp } from 'vue'
import App from '@/App.vue'
import router, { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupPerfectScrollbar } from '@/plugins/perfect-scrollbar'
import { setupVuetify } from '@/plugins/vuetify'
import { setupI18n } from '@/plugins/i18n'

const app = createApp(App)
// router
setupRouter(app)
// store
setupStore(app)
// perfect-scrollbar
setupPerfectScrollbar(app)
// vuetify
setupVuetify(app)
// i18n
setupI18n(app)

router.isReady().then(() => {
  app.mount('#app')
})
