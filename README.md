Base :

npm install --save-dev eslint prettier eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin eslint-plugin-import eslint-config-prettier eslint-plugin-eslint-comments @typescript-eslint/parser
yarn add --dev eslint prettier eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin eslint-plugin-import eslint-config-prettier eslint-plugin-eslint-comments @typescript-eslint/parser

React :
npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin
yarn add --dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin

React-native :
npm install --save-dev @react-native-community/eslint-config
yarn add --dev @react-native-community/eslint-config

Nodejs :
npm install --save-dev eslint-plugin-node
yarn add --dev eslint-plugin-node

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx,.json",
    "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx,.json --fix"
  }
}
```
