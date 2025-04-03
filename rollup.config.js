import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      source: true,
    },
    {
      file: "dist/index.es.js",
      format: "es",
      source: true,
    },
  ],
  plugins: [
    nodeResolve(),
    typescript(),
    babel({ babelHelpers: "bundled", presets: ["@babel/preset-react"] }),
    postcss({ extract: true }),
  ],
  external: ["react", "react-dom"],
};
