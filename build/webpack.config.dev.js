var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = merge.smart(base, {
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader'
            // localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 在 webpack 1 中使用 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    })
  ]
})

console.log(config.module.rules.map(x => console.log(x)))
module.exports = config
