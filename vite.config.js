import { defineConfig } from 'vite';

export default defineConfig({
  base: '/gis-hub/',
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
