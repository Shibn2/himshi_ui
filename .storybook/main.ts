import type { StorybookConfig } from "@storybook/react-vite";
// import baseViteConfig from "../vite.config";
// import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react-vite",
  viteFinal: async (config) => {
    config.css = {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/styles/variables.scss";
          @import "@/styles/mixins.scss";`,
        },
      },
    };
    return config;
  },
};

export default config;
