import type { StorybookConfig } from 'storybook/types';
import { resolve } from 'node:path';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || { alias: {} };
    // @ts-expect-error vite types
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@App': resolve(__dirname, '../src'),
      '@Components': resolve(__dirname, '../src/components'),
    };
    return config;
  },
};

export default config;

