module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    project: ['tsconfig.json'],
    tscinfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ["spellcheck"],
  rules: {
    "spellcheck/spellchecker": [
      "warn", {
        "skipWords": ["rect", "keydown"]
      }
    ]
  },
}
