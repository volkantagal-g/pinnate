import '@testing-library/jest-dom';
import { webcrypto } from 'node:crypto';

// Fix for crypto.getRandomValues in Vitest + Vite
// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto as unknown as Crypto;

