 git clone https://github.com/jamal382/es6-tutorial.git es6-tutorial
  cd es6-tutorial/
  git rm -r *
  git status
  git reset HEAD README.md
  git status
  git checkout README.md
  git status

-- Setup Working Environment with Babel and Webpack
mpm init -y

touch .babelrc

{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
   "plugins": ["@babel/plugin-proposal-object-rest-spread"]
}

touch webpack.config.js
// Imports
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
require("babel-register");
// Webpack Configuration
const config = {
 entry: './src/index.js',
  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath:'/dist'
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files`
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
};
// Exports
module.exports = config;
===================================================================
https://medium.com/@jeffrey.allen.lewis/the-ultimate-2018-webpack-4-and-babel-setup-guide-npm-yarn-dependencies-compared-entry-points-866b577da6a

npm install webpack webpack-cli webpack-dev-server --save-dev
npm install @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-react @babel/register --save-dev
npm install babel-loader style-loader css-loader
npm install -D webpack-dev-server
npm run start