import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "umd",
      file: `dist/bundle.js`,
      name: "simpleEmitter",
    },
    {
      format: "cjs",
      file: `lib/bundle.js`,
    },
    {
      format: "es",
      file: `es/bundle.js`,
    },
  ],
  plugins: [typescript({ lib: ["es5", "es6", "dom"], target: "es5" })],
};
