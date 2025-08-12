import { defineConfig } from 'tsup';
import { resolve } from 'node:path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  target: 'es2020',
  css: true,
  loader: {
    '.scss': 'css',
  },
  alias: {
    '@App': resolve(__dirname, 'src'),
    '@Components': resolve(__dirname, 'src/components'),
  },
});

