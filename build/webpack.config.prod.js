var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var config = merge.smart(base, {
  module: {
    rules: [
        {
            test: /\.styl(us)?$/,
            use: 
            ExtractTextPlugin.extract({
                fallback: "vue-style-loader",
                use: [
                    {
                      loader: 'css-loader',
                      options:{
                        minimize: true
                      }
                    },
                    {
                      loader: 'postcss-loader',
                      options: {
                        sourceMap: true
                      }
                    },
                    'stylus-loader'
                  ]
              })            
        },
        {
            test: /\.html$/,
            use: [ {
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }],
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',
        minify: { // 压缩 HTML 的配置
            minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
            minifyJS: true // 压缩 HTML 中出现的 JS 代码
        }
      })
  ]
})

console.log(config.module.rules.map(x => console.log(x)))
module.exports = config
