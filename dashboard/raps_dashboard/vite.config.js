import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 5173,
        strictPort: true  // Will fail if port 5173 is already in use (instead of picking another)
    }
})
