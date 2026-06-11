# gis-hub

GIS Hub

## 部署方式1

```js
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
```

```script
npm install gh-pages -D

npm run build
npm run deploy
```
