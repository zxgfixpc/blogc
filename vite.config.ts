import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/blogs': {
        target: 'http://127.0.0.1:8090',   //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blogs/, '/blogs')
      }
    }
  }
})
