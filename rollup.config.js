import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "umd",
      file: "lib/bundle.umd.js",
    },
    {
      format: "cjs",
      file: "lib/bundle.cjs.js",
    },
    {
      format: "es",
      file: "es/bundle.es.js",
    },
  ],
  plugins: [typescript()],
};
