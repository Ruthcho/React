import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // מאזין על IPv4 מפורשות. ללא זה חלק מגרסאות Node מאזינות רק על
    // IPv6 ([::1]), ואז גישה דרך 127.0.0.1 או localhost נכשלת.
    host: '127.0.0.1',
    port: 5173,
  },
})
