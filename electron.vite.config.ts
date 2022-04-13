import { defineConfig } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        external: ['@electron-toolkit/utils']
      }
    }
  },
  preload: {
    build: {
      rollupOptions: {
        external: ['@electron-toolkit/preload'],
        input: {
          index: resolve(__dirname, 'src/preload/index.ts'),
          view: resolve(__dirname, 'src/preload/view.ts')
        }
      }
    }
  },
  renderer: {
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/renderer/index.html'),
          view: resolve(__dirname, 'src/renderer/view.html')
        }
      }
    }
  }
})
