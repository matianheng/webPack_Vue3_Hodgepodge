module.exports = {
    plugins: [
      require('postcss-pxtorem')({
        rootValue: 75,    // 结果为：设计稿元素尺寸/75
        minPixelValue: 2,  // 小于等于 2 的元素不做处理
        PRopWhITeList: []
      })
    ]
  }