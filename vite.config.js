import { defineConfig } from 'vite';
import { fileUrlToPath } from 'url';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/gis-hub/' : './',
    resolve: {
      alias: {
        '@': fileUrlToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      emptyOutDir: true,
      outDir: 'dist',
    },
  };
});
