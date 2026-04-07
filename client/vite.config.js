import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React related libs
          if (
            id.includes('react') ||
            id.includes('react-dom') ||
            id.includes('react-router-dom')
          ) {
            return 'vendor'
          }

          // Framer Motion
          if (id.includes('framer-motion')) {
            return 'framer'
          }

          // Icons
          if (id.includes('lucide-react')) {
            return 'icons'
          }

          // Baaki sab node_modules
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
})