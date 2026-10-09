import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  esbuild: {
    pure: ['console.log'],
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    legalComments: 'none',
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://shrayutechbackend.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
