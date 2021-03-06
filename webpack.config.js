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