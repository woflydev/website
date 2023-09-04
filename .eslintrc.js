module.exports = {
  extends: ["./node_modules/gts/", "prettier", "prettier/react"],
  plugins: ["prettier"],
  env: {
    browser: true,
  },
  ignorePatterns: ["public/**/*", "models", "amplify/**/*", "*.md", "*.mdx"],
  rules: {
    "prettier/prettier": "error",
    quotes: [2, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "object-curly-spacing": [2, "always", { objectsInObjects: true, arraysInObjects: true }],
    "no-empty-pattern": 0,
    "node/no-unpublished-import": 0,
    "node/no-extraneous-import": 0,
    "max-len": [2, { code: 125, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
    "no-unused-vars": ["warn", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
  },
  overrides: [
    {
      files: ["aws-exports.js"],
      extends: "./node_modules/gts/",
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        "node/no-unpublished-import": 0,
      },
    },
  ],
};
