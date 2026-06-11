import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/gis-hub/' : './',
    resolve: {
      alias: {
        '@': './src',
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      emptyOutDir: true,
      outDir: 'dist',
    },
  };
});
