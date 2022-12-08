import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import 'webpack-dev-server'

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    publicPath: './',
    path: path.resolve(__dirname, 'dist/'),
    filename: 'poc-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/i,
        use: 'file-loader',
      },
      {
        test: /\.(eot|ttf|woff2?)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    alias: {
      stitches: path.resolve(__dirname, 'src/utils/stitches'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.node'],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist/')],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}

export default config
