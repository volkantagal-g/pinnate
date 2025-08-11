import type { Preview } from 'storybook/react';
import './preview.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: '^on.*' },
  },
};

export default preview;

