import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "weight.js",
      format: "umd",
      name: "cssWeight"
    },
    {
      file: "weight.min.js",
      format: "umd",
      name: "cssWeight",
      plugins: [terser()]
    },
  ],
  plugins: [babel({ babelHelpers: "bundled" }), typescript()],
};
