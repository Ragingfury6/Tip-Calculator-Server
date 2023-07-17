import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
        external: [
            "./node_modules/sweetalert2",
            "./node_modules/number-to-words",
            "./node_modules/convert-time"
        ],
    }
},
})
