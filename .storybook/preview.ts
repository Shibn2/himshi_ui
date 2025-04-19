import "../src/styles/main.scss";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypeRegex: "^on[A-Z].*" },
  },
};

export default preview;
