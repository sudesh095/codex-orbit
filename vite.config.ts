import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for Vercel (no base path, React Router handles routes)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 5173,
    open: true,
  }
})
