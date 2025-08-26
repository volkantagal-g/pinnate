import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { fileURLToPath } from 'url';
import { dirname, resolve as pathResolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const aliasConfig = {
  entries: [
    { find: '@App', replacement: pathResolve(__dirname, 'src') },
    { find: '@Components', replacement: pathResolve(__dirname, 'src/components') },
  ],
};

const jsConfig = {
  input: 'src/index.ts',
  external: ['react', 'react-dom'],
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true, // ✅ source map açık
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true, // ✅ source map açık
    },
  ],
  plugins: [
    peerDepsExternal(),
    alias(aliasConfig),
    resolve({
      browser: true,
      dedupe: ['react', 'react-dom'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      jsx: 'react-jsx',
      sourceMap: true,        // ✅ TS tarafında da sourceMap
      inlineSources: true,    // ✅ orijinal kaynak dosya içerilsin
      declaration: false,
      declarationMap: true,   // ✅ typings için map oluştur
    }),
    postcss({
      extract: 'index.css',
      minimize: false,        // ❗ debug ederken minimize kapat
      sourceMap: true,
      use: [
        ['sass', {
          includePaths: ['src'],
        }],
      ],
    }),
  ],
};

const dtsConfig = {
  input: 'src/index.ts',
  external: [/\.scss$/, /\.css$/],
  output: [
    {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    {
      file: 'dist/index.d.cts',
      format: 'cjs',
    },
  ],
  plugins: [
    alias(aliasConfig),
    dts({
      respectExternal: true,
    }),
  ],
};

export default [jsConfig, dtsConfig];
