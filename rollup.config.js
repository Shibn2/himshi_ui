import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import commonjs from "@rollup/plugin-commonjs";

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
    nodeResolve({
      extensions: [".js", ".ts", ".tsx"],
    }),
    commonjs({
      include: /node_modules/,
    }),
    typescript(),
    babel({ babelHelpers: "bundled", presets: ["@babel/preset-react"] }),
    postcss({
      extract: true,
      modules: false,
      inject: true,
    }),
    url({
      include: [
        "**/*.woff",
        "**/*.woff2",
        "**/*.ttf",
        "**/*.eot",
        "**/*.png",
        "**/*.jpg",
        "**/*.webp",
        "**/*.svg",
        "**/*.jpeg",
        "**/*.gif",
      ],
      limit: 10000,
      emitFiles: true,
    }),
  ],
  external: ["react", "react-dom"],
};
