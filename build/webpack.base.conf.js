var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')

var glob = require('glob');
var entries =  utils.getMultiEntry('./src/'+config.moduleName+'/**/**/*.js'); // 获得入口js文件
var chunks = Object.keys(entries);

const CopyWebpackPlugin = require('copy-webpack-plugin');

console.log(chunks)

var projectRoot = path.resolve(__dirname, '../')
const vuxLoader = require('vux-loader')

var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var webpackConfig = {

  entry:entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      },
      
    ]
  },
  plugins: [
      new CopyWebpackPlugin([{
          from: 'static',
          to: 'static'
      }])
  ]
}



module.exports = vuxLoader.merge(webpackConfig, {
    options: {
    
  },	
  plugins: ['vux-ui', 'progress-bar', 'duplicate-style']
})
