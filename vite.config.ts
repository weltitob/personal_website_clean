
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: 443,
      host: '0.0.0.0'
    },
    watch: {
      usePolling: true
    },
    allowedHosts: 'all'
  }
})
