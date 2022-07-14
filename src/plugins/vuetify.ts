import { App } from 'vue'
import { createVuetify, ThemeDefinition } from 'vuetify'
import '@/styles/_variables.scss'
import '@mdi/font/css/materialdesignicons.css'
import theme from '@/theme'

const light: ThemeDefinition = {
  dark: false,
  colors: { ...theme.themes.light }
}

const dark: ThemeDefinition = {
  dark: true,
  colors: { ...theme.themes.dark }
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light,
      dark
    }
  }
})

export function setupVuetify(app: App<Element>) {
  app.use(vuetify)
}
