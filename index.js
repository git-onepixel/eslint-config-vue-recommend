module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
  },

  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],

  parser: 'vue-eslint-parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: [
    'vue',
  ],

  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'linebreak-style': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'global-require': 0,
    'no-new': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': 0,
  },

  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js', '.vue'],
  },
};
