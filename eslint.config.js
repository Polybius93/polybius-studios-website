import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import perfectionist from "eslint-plugin-perfectionist";
import prettierConfig from "eslint-config-prettier";
import reactX from "eslint-plugin-react-x";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";
import importX from "eslint-plugin-import-x";
import { defineConfig } from "eslint/config";

export default defineConfig(
  { ignores: ["dist", "build", "coverage", "node_modules"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      reactX.configs["recommended-typescript"],
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      perfectionist,
      "unused-imports": unusedImports,
      "import-x": importX,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.recommended.rules,
      ...perfectionist.configs["recommended-natural"].rules,
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "unused-imports/no-unused-imports": "error",
    },
  },
  prettierConfig,
);
