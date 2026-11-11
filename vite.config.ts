import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project-page base so assets resolve on GitHub Pages at /osama-khan/
export default defineConfig({
  plugins: [react()],
  base: '/osama-khan/',
})
