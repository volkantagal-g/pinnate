import type { StorybookConfig } from '@storybook/react-vite';

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
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@App': '#App',
      '@Components': '#Components',
      '@App/theme/PinnateProvider': '#App/theme/PinnateProvider',
      '@App/icons': '#App/icons',
      '@App/icons/Notification/Close': '#App/icons/Notification/Close',
    };
    return config;
  },
};

export default config;
