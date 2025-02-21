import { defineConfig } from 'vite'

export default defineConfig({
    base: '/os-simple-notifications-ui/',
    build: {
        minify: 'terser',
        cssMinify: true,
        rollupOptions: {
            output: {
                manualChunks: undefined
            }
        }
    }
})
