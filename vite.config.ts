import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/aakashiitk.github.io/',
  server: {
    port: 5173
  }
})
