'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
console.log('环境变量：', process.env.NODE_ENV)
module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext]'
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx", ".json"]
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 CSS 插入到 HTML 文件中的 <style> 标签
          'style-loader',
          // 解析 CSS 文件
          'css-loader',
          // 将 SCSS 编译为 CSS
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly:true
        }
    },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      }
      
    
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new VueLoaderPlugin(),
 
 
    // new pxtorem({
    //   rootValue: 100,
    //   minPixelValue: 2,
    //   propWhiteList: []
    // })
  ],
  // devServer: {
  //   proxy: {
  //     "/serviceEmp": {
  //       target:'http://mpl.qa.sgmlink.com/middle_platform/web/ibuick', // 你请求的第三方接口
  //       changeOrigin: true,
  //       pathRewrite: {
  //         // '^/serviceEmp': ''
  //       }
  //     }
  //   },
  //   compress: true,
  //   port: 8088
  // }
  
}

