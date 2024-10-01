# Omni Calculator eslint config ⚙️

This is eslint configuration meant to be used across different projects and/or repositories within [Omni Calculator](https://www.omnicalculator.com) company.

## Usage

### Prerequisites
- [eslint](https://www.npmjs.com/package/eslint) — version 9.x must be installed in your projext.

### Installation
Simply install omnicalculator-eslint-config with your favorite package manager as **development dependency**
```bash
npm install -D omnicalculator-eslint-config

#or
pnpm i -D omnicalculator-eslint-config

#or
yarn add -D  omnicalculator-eslint-config
```

### Usage
Use this configuration preset in you `eslint.config.js` file. If you do not need to extend this configuration simply reexport:
```js
// eslint.config.js
const omniCalculatorEslintConfig = require(' omnicalculator-eslint-config');

module.exports = omniCalculatorEslintConfig;
```

In case yoy need to extend thuis configuration simply add your config at the end to exported array:
```js
// eslint.config.js
const omniCalculatorEslintConfig = require(' omnicalculator-eslint-config');

module.exports = [
  ...omniCalculatorEslintConfig,
  {
    files: ['**/legacy'],
    rules: { complexity: 'off'},
  }
];

```

## Development

### Prerequisites

- [Node.js](https://nodejs.org) — version 20.x
- [pnpm](https://pnpm.io/) — version 9.x


### Install

Install dependencies with:

```sh
$ pnpm install
```

### Running

Once you installed depedencies you are good to start development, no other action is required.


## Version update

- Open PR.
- Set the **label** with the version update, you need to apply: ```major```,  ```minor``` or  ```patch```.
- After merging the PR to the main, the version should be updated automatically according to the label.


## Publication

To publish next version of this npm package first create a branch from `main`. Release branch should be named: `release-[versionTag]`, where `[versionTag]` is tag of version you want to publish.

Push such branch to github and follow github instructions on [creating and publishing release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release) in github GUI.

