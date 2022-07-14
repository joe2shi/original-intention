import { createI18n } from 'vue-i18n'

import localeZh from '@/locales/zh.json'
import localeEn from '@/locales/en.json'
import { App } from 'vue'

const messages = {
  zh: { ...localeZh },
  en: { ...localeEn }
}

const i18n = createI18n({
  legacy: false,
  allowComposition: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: messages
})

export function setupI18n(app: App<Element>) {
  app.use(i18n)
}
