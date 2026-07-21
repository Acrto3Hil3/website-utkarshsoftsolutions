import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // In development, run `npm run dev:api` alongside `npm run dev`;
    // the SPA proxies API calls to the Express server.
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
