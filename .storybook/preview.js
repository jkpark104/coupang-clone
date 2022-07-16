import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/styles/GlobalStyle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
));
