// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import jest from "eslint-plugin-jest";
import testingLibrary from "eslint-plugin-testing-library";
/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Configuração recomendada para JavaScript
  pluginJs.configs.recommended,

  // Configuração recomendada para React usando o novo flat config
  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    env: {
      jest: true, // Adiciona o ambiente Jest
      node: true, // Se necessário, adicione outros ambientes, como node
      browser: true, // Se você estiver usando no navegador
    },
    plugins: {
      jest,
      "testing-library": testingLibrary,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
      "testing-library/no-node-access": "error",
      // Adicione outras regras personalizadas aqui
    },
  },
];
