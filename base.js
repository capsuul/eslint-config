module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {},
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'airbnb-typescript/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'prettier/standard',
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    "import/prefer-default-export": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'import/no-unresolved': 0,
        'no-undef': 'off',
      },
    },
  ],
}
