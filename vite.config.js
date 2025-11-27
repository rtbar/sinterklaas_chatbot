import { defineConfig } from 'vite';

export default defineConfig({
    base: '/mijnrijkswaterstaat/',
    build: {
        outDir: 'docs',
    },
    server: {
        host: true, // Listen on all local IPs
        port: 5173, // Try to stick to 5173
        strictPort: false, // But allow fallback if busy
    }
});
