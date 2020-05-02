var webpack = require('webpack');
var path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = env =>
  merge(baseConfig(env), {
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, '../build/dist/'),
      port: 8080,
      publicPath: '/',
      hot: true,
      https: true,
      historyApiFallback: true
    },
    devtool: 'inline-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()]
  });
