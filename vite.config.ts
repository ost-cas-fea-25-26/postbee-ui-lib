/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  build: {
    emptyOutDir: true,
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      output: {
        entryFileNames: `index.js`,
        format: 'es',
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        svgo: true,
        titleProp: true,
        ref: true,
      },
    }),
    dts({
      tsconfigPath: 'tsconfig.build.json',
    }),
  ],
  test: {},
});
