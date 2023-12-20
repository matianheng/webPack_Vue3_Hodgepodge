// 开发测试打包环境配置
const { merge } = require('webpack-merge');
const common = require('../webpack.config.js');
console.log('环境变量2：', process.env.NODE_ENV)
module.exports = merge(common, {
    mode: 'development',
    devServer: {
    proxy: {
      "/serviceEmp": {
        target:'http://mpl.qa.sgmlink.com/middle_platform/web/ibuick', // 你请求的第三方接口
        changeOrigin: true,
        pathRewrite: {
          // '^/serviceEmp': ''
        }
      }
    },
    compress: true,
    port: 8088,
    hot: true,
    // contentBase: common.path.resolve(__dirname, '../dist')
  }
})
