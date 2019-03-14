const path = require('path');
// const devPath = path.;
const srcRoot = './src';
const devPath = './';

// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // 输入配置
    entry: [
      path.resolve(srcRoot,'./page/index/index.js')
    ],

    // 输出配置
    output: {
        path: path.resolve(__dirname, './dev'),

        filename: 'bundle.min.js'
    },
    plugins: [
      // new HtmlWebpackPlugin({
      //     filename: path.resolve(devPath, 'index.html'),
      //     template: path.resolve(srcRoot, './page/index/index.html'),
      // })
    ],
    mode:'development',//通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化
    module: {
    // 加载器配置
      rules: [
          { test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            include: path.resolve(srcRoot)
          },{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(srcRoot)
          },{
            test: /\.(png|jpg|jpeg)$/,
            use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]',
            include: path.resolve(srcRoot)
          },{
            test: /\.(js|jsx)$/,
            use: [{loader:'babel-loader'}] ,
            include: path.resolve(srcRoot)
          }
      ],
  }

};
