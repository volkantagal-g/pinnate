import { defineConfig } from 'vitest/config';
import { webcrypto } from 'node:crypto';

// Ensure webcrypto exists before Vite server initializes (fixes getRandomValues)
// @ts-ignore
if (!(globalThis as any).crypto) {
  // @ts-ignore
  (globalThis as any).crypto = webcrypto as unknown as Crypto;
}
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@App': resolve(__dirname, 'src'),
      '@Components': resolve(__dirname, 'src/components'),
    },
  },
  test: {
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts', './test/shims/crypto.ts'],
    globals: true,
    css: false,
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});

