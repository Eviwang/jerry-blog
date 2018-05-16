const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'main-[hash].js',
    path: path.join(__dirname, '../dist/')
  },
  module: {
    rules: [
      // {
      //     test: /\.(vue|js|jsx)$/,
      //     loader: 'eslint-loader',
      //     exclude: /node_modules/,
      //     enforce: 'pre' //在其他这几种文件的loader处理之前，都先用eslint-loader处理
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(eot|woff|svg|ttf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(gif|jpg|jpeg|png)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
