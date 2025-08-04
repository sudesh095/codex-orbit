import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/codex-orbit/', // Replace with your repo name
  plugins: [react()],
})
