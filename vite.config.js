import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/detect': {
                target: process.env.VITE_BACKEND_URL || 'http://localhost:5000',
                changeOrigin: true,
            }
        }
    },
    build: {
        outDir: 'dist'
    }
})
