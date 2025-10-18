import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        svgo: true,
        titleProp: true,
        ref: true,
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
