
// 生产打包环境配置
const { merge } = require('webpack-merge');
const common = require('../webpack.config.js');
console.log('环境变量2：', process.env.NODE_ENV)
module.exports = merge(common, {
    mode: 'production',
    performance: {
    hints: 'warning', // 枚举 false关闭
    maxEntrypointSize: 100000000, // 最大入口文件大小
    maxAssetSize: 100000000, // 最大资源文件大小
        assetFilter: function(assetFilename) { //只给出js文件的性能提示
              return assetFilename.endsWith('.js');
        }
}
})