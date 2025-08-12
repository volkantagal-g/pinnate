import { webcrypto } from 'node:crypto';
// @ts-ignore
if (!(globalThis as any).crypto) {
  // @ts-ignore
  (globalThis as any).crypto = webcrypto as unknown as Crypto;
}

export {};
