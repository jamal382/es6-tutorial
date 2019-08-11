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
  ]
}

touch webpack.config.js
===================================================================
https://medium.com/@jeffrey.allen.lewis/the-ultimate-2018-webpack-4-and-babel-setup-guide-npm-yarn-dependencies-compared-entry-points-866b577da6a

npm install webpack webpack-cli webpack-dev-server --save-dev
npm install @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-react @babel/register --save-dev
npm install babel-loader style-loader css-loader
npm install -D webpack-dev-server