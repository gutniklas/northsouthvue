module.exports = {
　　　　devServer: {
　　　　　　open: true,
　　　　　　host: 'localhost',
　　　　　　port: 8080,
　　　　　　https: false,
　　　　　　//以上的ip和端口是本机的;下面为需要跨域的
　　　　　　proxy: {  //配置跨域
　　　　　　　　'/api': {
　　　　　　　　　　target: 'http://localhost:8443/api',  
　　　　　　　　　　ws: true,
　　　　　　　　　　changOrigin: true,  //允许跨域
　　　　　　　　　　pathRewrite: {
　　　　　　　　　　　　'^/api': ''  //请求的时候使用这个api就可以
　　　　　　　　　　}
　　　　　　}
　　　　}
　　}
}
const path = require('path');
module.exports = {
pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/common/global.less')
      ]
    }
  }
}