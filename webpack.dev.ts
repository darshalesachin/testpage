import webpack from 'webpack'
import { merge } from 'webpack-merge'

import config from './webpack.config'

const path = require('path')

const devConfig: webpack.Configuration = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/'),
    filename: 'poc-bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'assets'),
      publicPath: '/pub',
    },
    port: 9999,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    proxy: {
      '<URL /xyz>' : {
        target: '<to URL>',
        pathRewrite: {
          '<URL /xyz>' : ''
        }
      }
    }
  },
}

export default merge(config, devConfig)
