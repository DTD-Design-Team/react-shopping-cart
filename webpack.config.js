const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: ['./index.js', './styles/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["react", "stage-0"],
          plugins: ["transform-class-properties", "transform-decorators-legacy"]
        }
      }
    ]
  },
  devServer: {
    contentBase: './'
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new UglifyJsPlugin()
  ]
}