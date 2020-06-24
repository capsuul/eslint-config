module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {},
  plugins: [],
  extends: [
    './base.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
  ],
  rules: {},
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
