# eslint-config-vue-recommend

[![npm][npm]][npm-url] 
[![downloads][downloads]][downloads-url]
[![license][license]][license-url]

The eslint recommend configuration for vue.

[npm]: https://img.shields.io/npm/v/eslint-config-vue-recommend.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-vue-recommend
[downloads]: https://img.shields.io/npm/dm/eslint-config-vue-recommend.svg
[downloads-url]: https://npmcharts.com/compare/eslint-config-vue-recommend?minimal=true
[license]: https://img.shields.io/npm/l/eslint-config-vue-recommend.svg
[license-url]:https://github.com/git-onepixel/eslint-config-vue-recommend/blob/master/LICENSE

## Install

```bash
# use npm
npm i eslint-config-vue-recommend -D
# use yarn
yarn add eslint-config-vue-recommend
```

## Usage

Create `.eslintrc.js` file in the root of your project as below: 

```javascripts
module.exports = {
  extends: [
    'vue-recommend'
  ],
};
```

## Testing
Add npm script as follow:


```bash
"scripts": {
  "lint": "eslint --ext .js,.vue src"
}
```

then

```bash
npm run lint
```