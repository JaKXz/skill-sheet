'use strict';

const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production'
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].bundle.js'),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
    minify: false
  })
];

const devPlugins = [];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    compress: {
      warnings: false
    }
  })
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

module.exports = {

  entry: {
    app: './src/index.ts',
    vendor: [
      'es6-shim',
      'angular2/bundles/angular2-polyfills',
      'angular2/bootstrap',
      'angular2/platform/browser',
      'angular2/platform/common_dom',
      'angular2/core',
      'angular2/router',
      'angular2/http',
      'redux',
      'redux-thunk',
      'ng2-redux',
      'redux-logger'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: "/",
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  plugins: plugins,

  module: {
    preLoaders: [{
      test: /\.ts$/,
      loader: 'tslint'
    }],
    loaders: [
      { test: /\.ts$/, loader: 'ts', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },
      { test: /\.svg/, loader: 'url' },
      { test: /\.eot/, loader: 'url' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  }
    
}
