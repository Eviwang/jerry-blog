var merge = require("webpack-merge");
var base = require("./webpack.config.base");
var webpack = require("webpack");
var config = merge.smart(base,{
    module: {
      rules: [             
      ]
    },
    devServer : {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        hot: true
    },
    resolve:{
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 在 webpack 1 中使用 'vue/dist/vue.common.js'
        }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
});

console.log(config.module.rules.map(x=>console.log(x)));
module.exports = config;