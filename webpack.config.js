const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  mode: 'production',//设置生成模式
  entry:{
    "prototype-add-method":[path.resolve(APP_PATH + '/detanx.js'),
    path.resolve(APP_PATH + '/hyden-tan.js'),
    path.resolve(APP_PATH + '/hzdgood.js'),
    path.resolve(APP_PATH + '/mschange.js')]
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true, //实时刷新
    port: 3000,
  },
  module:{
    rules:[
    {
      test: /\.js$/, // babel 转换为兼容性的 js
      exclude: /node_modules/,
      use:{
        loader: 'babel-loader',
        query: {
          presets:['latest','stage-0'],  // 加入stage-0 尝试使用es7，
        }
      }
    }]
  },
  plugins:[
    new uglify()//压缩
  ]
}