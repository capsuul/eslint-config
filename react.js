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
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
  ],
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/indent": "off"
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
