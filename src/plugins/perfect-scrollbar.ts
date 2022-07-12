import { App } from 'vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

export function setupPerfectScrollbar(app: App<Element>) {
  app.use(PerfectScrollbar)
}
