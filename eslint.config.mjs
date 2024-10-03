import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'


export default [
  {
    ignores: [".node_modules/*"]
},
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: {globals: globals.node }},
  {
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "no-unused-expressions":"error",
      "no-undef":"error",
      "no-console":"warn",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // eslintPluginPrettierRecommended,
];