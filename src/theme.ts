import logo from './assets/images/logo.svg'

const theme = {
  app: {
    logo: logo,
    name: 'Cabbage',
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
      primary: '#9155FD',
      accent: '#0d6efd',
      secondary: '#8A8D93',
      success: '#56CA00',
      info: '#16B1FF',
      warning: '#FFB400',
      error: '#FF4C51'
    },
    dark: {
      background: '#000',
      surface: '#000',
      primary: '#9155FD',
      accent: '#0d6efd',
      secondary: '#8A8D93',
      success: '#56CA00',
      info: '#16B1FF',
      warning: '#FFB400',
      error: '#FF4C51'
    }
  }
}

export default theme
