import { defineStore } from 'pinia'
import theme from '../../theme'

export const useAppConfigStore = defineStore('APPLICATION', {
  state: () => {
    return {
      appName: theme.app.name,
      appLogo: theme.app.logo,
      appIsDark: theme.app.isDark,
      appContentLayoutNav: theme.app.contentLayoutNav,
      appRouteTransition: theme.app.routeTransition,
      appMenuIsVerticalNavMini: theme.app.menuIsVerticalNavMini,
      appMenuIsMenuHidden: theme.app.menuIsMenuHidden,
      appVerticalMenuAccordion: theme.app.verticalMenuAccordion,
      appContentWidth: theme.app.contentWidth,
      appLanguage: theme.app.language
    }
  },
  getters: {},
  actions: {
    setAppContentLayoutNav(value: 'vertical' | 'horizontal') {
      this.appContentLayoutNav = value
    },
    setAppLanguage(value: 'en' | 'zh') {
      this.appLanguage = value
    }
  }
})
