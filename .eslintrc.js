module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    }
  },
  rules: {
    'no-tabs': [ 'error', { allowIndentationTabs: true } ],
    semi: [ 'error', 'never' ],
    quotes: [ 'error', 'single' ],
    'no-trailing-spaces': [ 'error', { skipBlankLines: true, ignoreComments: true } ],
    'no-multi-spaces': [ "error", {
      ignoreEOLComments: true,
      exceptions: {
        Property: true,
        VariableDeclarator: true,
        ImportDeclaration: true
      },
    }, ],
    'space-before-function-paren': [ 'error', 'always' ],
    'block-spacing': "error"
  }
};