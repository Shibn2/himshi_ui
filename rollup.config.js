import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcssUrl from "postcss-url";
import path from "path";
import { fileURLToPath } from "url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.es.js",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      // Converts CommonJS modules to ES6
      commonjs({
        include: /node_modules/,
      }),

      // Compiles TypeScript
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),

      // Babel for JSX and modern JS features
      babel({
        babelHelpers: "bundled",
        extensions: [".js", ".ts", ".tsx"],
        presets: ["@babel/preset-react"],
      }),
      // Ensure peer deps like react are excluded from the bundle
      peerDepsExternal(),

      // Helps resolve modules from node_modules
      nodeResolve({
        extensions: [".js", ".ts", ".tsx"],
      }),

      // CSS Modules
      postcss({
        include: /\.module\.scss$/,
        extensions: [".scss"],
        extract: path.resolve("dist", "modules.css"),
        modules: {
          generateScopedName: "[name]__[local]__[hash:base64:5]",
        },
        use: ["sass"],
      }),

      // Global SCSS (non-module)
      postcss({
        include: /(?<!\.module)\.scss$/,
        extract: path.resolve("dist", "main.css"),
        modules: false,
        use: ["sass"],
        to: path.resolve("dist", "main.css"),
        plugins: [
          postcssUrl({
            url: "copy",
            assetsPath: "./assets",
            useHash: false,
          }),
        ],
      }),

      // Static asset handling (images etc.)
      url({
        include: [
          "**/*.png",
          "**/*.jpg",
          "**/*.webp",
          "**/*.svg",
          "**/*.jpeg",
          "**/*.gif",
        ],
        limit: 0,
        fileName: "[dirname][name][extname]",
        emitFiles: true,
        destDir: "dist/assets",
      }),
    ],
    external: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "react/jsx-runtime.js",
      "react/jsx-dev-runtime.js",
    ],
  },

  // Type declarations
  {
    input: "src/index.types.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [
      dts({
        compilerOptions: {
          skipLibCheck: true,
        },
        exclude: ["**/*.scss"],
      }),
    ],
  },
];
