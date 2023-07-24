import type { Preview } from "@storybook/react";

import '../src/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F2F4FF',
        },
        {
          name: 'dark',
          value: '#373F68',
        }
      ]
    }
  },
};

export default preview;
