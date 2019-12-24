module.exports = {
  extends: ['plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: { es6: true },
  rules: {
    'no-tabs': ['error', { allowIndentationTabs: true }],
    semi: ['error', 'never'], // 禁用分号
    quotes: ['error', 'single'], // 单引号
    // 去除行末空格
    'no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          VariableDeclarator: true,
          ImportDeclaration: true,
        },
      },
    ],
    'space-before-function-paren': ['error', 'always'], // function 名称前增加空格
    'block-spacing': 'error',
  },
}
