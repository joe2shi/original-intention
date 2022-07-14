import logo from './assets/images/logo.svg'

const theme = {
  app: {
    logo: logo,
    name: 'Original',
    isDark: true,
    contentLayoutNav: 'vertical', // support "vertical" and "horizontal"
    routeTransition: 'scroll-x-transition',
    menuIsVerticalNavMini: false,
    menuIsMenuHidden: false,
    verticalMenuAccordion: true,
    contentWidth: 'boxed', // "boxed" and "full"
    language: 'en' // "en" or "zh"
  },
  themes: {
    light: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      primary: '#9155fd',
      secondary: '#8a8d93',
      accent: '#0d6efd',
      error: '#F83E70',
      info: '#16B1FF',
      success: '#3CD1C2',
      warning: '#FFAA2C'
    },
    dark: {
      background: '#000000',
      surface: '#000000',
      primary: '#9155fd',
      secondary: '#8a8d93',
      accent: '#0d6efd',
      error: '#F83E70',
      info: '#16B1FF',
      success: '#3CD1C2',
      warning: '#FFAA2C'
    }
  }
}

export default theme
