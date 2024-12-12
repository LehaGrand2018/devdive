import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  envPrefix: 'REACT_APP',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: './',
  root: './',
  server: {
    open: '/',
    port: 3030,
  }
});
