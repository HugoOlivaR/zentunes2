// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  site: 'https://zentunes.es/',
  base: '/zentunes2/',
  plugins: [react()],
})