import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default ({ mode }: ConfigEnv) =>
  defineConfig({
    server: {
      host: '0.0.0.0',
      port: Number(loadEnv(mode, process.cwd(), '')) || 80,
      open: false
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '#': resolve(__dirname, 'types'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({
        autoImport: true
      }),
      vueI18n({
        include: resolve(__dirname, 'src/locales/**')
      })
    ]
  })
