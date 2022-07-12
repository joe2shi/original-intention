import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
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
        '#': resolve(__dirname, 'types')
      }
    },
    plugins: [vue(), vueJsx()]
  })
