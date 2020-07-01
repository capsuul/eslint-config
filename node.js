module.exports = {
  parserOptions: {},
  settings: {},
  plugins: [],
  extends: ['./base.js', 'plugin:node/recommended-module'],
  rules: {
    'no-underscore-dangle': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
  },
  overrides: [],
}
