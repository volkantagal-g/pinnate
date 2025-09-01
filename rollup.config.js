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
      sourceMap: true, // ✅ TS tarafında da sourceMap
      inlineSources: true, // ✅ orijinal kaynak dosya içerilsin
      declaration: false,
      declarationMap: true, // ✅ typings için map oluştur
    }),
    postcss({
      extract: 'index.css',
      minimize: false, // ❗ debug ederken minimize kapat
      sourceMap: true,
      use: [
        [
          'sass',
          {
            includePaths: ['src'],
          },
        ],
      ],
    }),
  ],
};

// Token subpath builds
const tokensConfig = {
  input: 'src/tokens/index.ts',
  external: ['react', 'react-dom'],
  output: [
    {
      file: 'dist/tokens/index.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/tokens/index.cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    alias(aliasConfig),
    resolve({
      browser: true,
      dedupe: ['react', 'react-dom'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      jsx: 'react-jsx',
      sourceMap: true,
      inlineSources: true,
      declaration: false,
      declarationMap: true,
    }),
  ],
};

const colorsConfig = {
  input: 'src/tokens/colors/index.ts',
  external: ['react', 'react-dom'],
  output: [
    {
      file: 'dist/tokens/colors/index.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/tokens/colors/index.cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    alias(aliasConfig),
    resolve({
      browser: true,
      dedupe: ['react', 'react-dom'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      jsx: 'react-jsx',
      sourceMap: true,
      inlineSources: true,
      declaration: false,
      declarationMap: true,
    }),
  ],
};

const spacingConfig = {
  input: 'src/tokens/spacing/index.ts',
  external: ['react', 'react-dom'],
  output: [
    {
      file: 'dist/tokens/spacing/index.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/tokens/spacing/index.cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    alias(aliasConfig),
    resolve({
      browser: true,
      dedupe: ['react', 'react-dom'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      jsx: 'react-jsx',
      sourceMap: true,
      inlineSources: true,
      declaration: false,
      declarationMap: true,
    }),
  ],
};

const typographyConfig = {
  input: 'src/tokens/typography/index.ts',
  external: ['react', 'react-dom'],
  output: [
    {
      file: 'dist/tokens/typography/index.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/tokens/typography/index.cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    alias(aliasConfig),
    resolve({
      browser: true,
      dedupe: ['react', 'react-dom'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      jsx: 'react-jsx',
      sourceMap: true,
      inlineSources: true,
      declaration: false,
      declarationMap: true,
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

// DTS configs for token subpaths
const tokensDtsConfig = {
  input: 'src/tokens/index.ts',
  external: [/\.scss$/, /\.css$/],
  output: [
    {
      file: 'dist/tokens/index.d.ts',
      format: 'esm',
    },
    {
      file: 'dist/tokens/index.d.cts',
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

const colorsDtsConfig = {
  input: 'src/tokens/colors/index.ts',
  external: [/\.scss$/, /\.css$/],
  output: [
    {
      file: 'dist/tokens/colors/index.d.ts',
      format: 'esm',
    },
    {
      file: 'dist/tokens/colors/index.d.cts',
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

const spacingDtsConfig = {
  input: 'src/tokens/spacing/index.ts',
  external: [/\.scss$/, /\.css$/],
  output: [
    {
      file: 'dist/tokens/spacing/index.d.ts',
      format: 'esm',
    },
    {
      file: 'dist/tokens/spacing/index.d.cts',
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

const typographyDtsConfig = {
  input: 'src/tokens/typography/index.ts',
  external: [/\.scss$/, /\.css$/],
  output: [
    {
      file: 'dist/tokens/typography/index.d.ts',
      format: 'esm',
    },
    {
      file: 'dist/tokens/typography/index.d.cts',
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

export default [
  jsConfig,
  tokensConfig,
  colorsConfig,
  spacingConfig,
  typographyConfig,
  dtsConfig,
  tokensDtsConfig,
  colorsDtsConfig,
  spacingDtsConfig,
  typographyDtsConfig,
];
