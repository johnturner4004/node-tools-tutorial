1. npm init
  Creates package.json
2. npm i typescript --save-dev
  Installs typescript
3. Add "build": "tsc" to package.json
  Compiles ts files
4. npx tsc --init
  Creates tsconfig.json
5. Edit tsconfig
  Change module to esnext
  Change target to esnext
6. Change package.json to module
  Add "type": "module"
7. Add <script src="dist/src/index.js" type="module"></script> to index.html
8. npm init @eslint/config
  use common setup and javascript settings
9. In .eslintrc.cjs add:
  "parserOptions": {
    "project": ["tsconfig.json"],
    "tsconfigRootDir": __dirname, // JavaScript code
    "ecmaVersion": "latest"
  }
  the use of __dirname — this allows the linter to find the tsconfig.json file from anywhere in the project folder structure
  running npx eslint <file> runs eslint on that file
10. npm i eslint-plugin-spellcheck --save-dev
  Add:
    "plugins": ["spellcheck"],
    "rules": {
      "spellcheck/spell-checker": [
        "warn", {
          "skipWords": ["rect", "keydown"]
        }
      ]
    }
  to eslintrc
  add any project specific words that aren't in the default dictionary to the skipWords
  add "prebuild": "eslint ." to the package.json scripts
11. npm i @types/mocha jsdom jsdom-global ts-node mocha --save-dev
  Create .mocharc.json and add:
    {
      "require": ["jsdom-global/register"],
      "loader": "ts-node/esm",
      "extensions": ["ts"],
      "spec": ["tests/**/*.test.ts"]
    }
  Add "test": "mocha" to package.json