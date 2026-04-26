import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: true,
      include: 'src/**/*',
      exclude: ['node_modules', 'cypress/**', '**/*.d.ts'],
      extension: ['.ts', '.tsx'],
    }),
  ],
  server: {
    port: 4000,
    strictPort: true,
  },
  build: {
    sourcemap: true,
  },
})
