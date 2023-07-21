import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
        external: [
            "sweetalert2",
            // fileURLToPath(new URL('')),
            "number-to-words",
            "convert-time",
            /node_modules/
        ],
    }
},
})
