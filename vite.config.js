import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    host: true,
    allowedHosts: ['medicalplus-botica.onrender.com']
  },
  preview: {
    port: process.env.PORT || 3000,
    host: true,
    allowedHosts: ['medicalplus-botica.onrender.com']
  }
})