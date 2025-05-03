
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    hmr: {
      clientPort: 443,
      host: 'localhost'
    },
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    watch: {
      usePolling: true
    },
    allowedHosts: ['localhost', '.replit.dev', '.repl.co']
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
