import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
  server: {
    port: 80,
    strictPort: true,
    host: true,
    allowedHosts: ['sandbox.test'],
    watch: {
      usePolling: true,
      interval: 100
    }
  },
})
