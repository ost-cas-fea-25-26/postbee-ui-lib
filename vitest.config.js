import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

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
