module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: ['standard', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error']
  }
}
