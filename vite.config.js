import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build can be hosted at any path (root, sub-folder, CDN).
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
