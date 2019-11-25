var path = require('path');
const webpack = require('webpack')
module.exports = {
  target: 'web',//定义目标是文本平台
  entry: path.join(__dirname, 'src/main.js'),//入口文件
  output: {//输出文件
    filename: 'bundle.js',//输出文件名
    path: path.join(__dirname, 'dist');//输出文件路径
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      //将小于1024d的图片转为base64，减少http请求
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name].[ext]',
              outputPath: 'assets/img/'
            }
          }
        ]
      }
    ]
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,//切服务都启用 gzip 压缩
  //   port: 8080,//指定要监听请求的端口号
  //   host: '0.0.0.0',//指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问
  //   proxy: {//反向代理
  //     '/api': 'http://localhost:3000'
  //   },
  //   allowedHosts: [
  //     // 添加白名单：允许一些开发服务器访问
  //   ],
  //   disableHostCheck: false,//设置为 true 时，此选项绕过主机检查。不建议这样做，因为不检查主机的应用程序容易受到 DNS 重新连接攻击。
  //   lazy: true,
  //   filename: 'bundle.js',
  //   headers: {//在所有响应中添加首部内容：
  //     'X-Custom-Foo': 'bar'
  //   },
  //   historyApiFallback: {
  //     rewrites: [
  //       { from: /./, to: '/pages/error404.js' }
  //     ]
  //   }
  // },


}