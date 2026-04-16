import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined

          if (id.includes('react-dom') || id.includes('react/')) return 'react'
          if (id.includes('react-router-dom') || id.includes('react-router/')) return 'router'
          if (id.includes('@tanstack/react-query')) return 'react-query'
          if (id.includes('framer-motion')) return 'framer-motion'
          if (id.includes('lucide-react')) return 'lucide'
          if (id.includes('@radix-ui/')) return 'radix'
          if (id.includes('@supabase/supabase-js')) return 'supabase'
          if (id.includes('sonner')) return 'sonner'
          if (id.includes('tailwindcss') || id.includes('postcss')) return 'styles'

          return 'vendor'
        },
      },
    },
  },
})
