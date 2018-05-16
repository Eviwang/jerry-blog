// vue-loader.config.js
module.exports = (isDev) => {
  return {
     modules: true,              
     localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
    // hotReload: false, // 根据环境变量生成
  }
}