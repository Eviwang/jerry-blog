var Path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"main-[hash].js",
        path:Path.join(__dirname,"/dist/")
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.styl(us)?$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "stylus-loader",
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png)/,
                use:[
                    {
                        loader : "url-loader",
                        options:{
                            limit:1024,
                            name:"[name]-test.[ext]"
                        }
                    }
                ]
            }
        ]
    },
    devServer : {
        port:8000,
        host:"0.0.0.0",
        hot:true,
        overlay:{
            errors:true,//将错误显示到网页
        }
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}