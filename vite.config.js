import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  base: '/leonard-portfolio-v2/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          fontawesome: ['@fortawesome/react-fontawesome', '@fortawesome/free-brands-svg-icons']
        }
      }
    }
  }
})
