//设置绝对路径
const path = require('path');

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin(
    'css/[name].style.css'
);

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //运行环境的上下文，值为运行文件的根目录路径path.join(__dirname)以当前环境为绝对路径起点
  context: path.join(__dirname),
  //文件打包入口--/app/index.js //传入字符串或数组为单入口 ，对象为多入口
  entry: {
    main:path.join(__dirname, 'index.js')/*,
    b:path.join(__dirname,'script/b.js')*/
  },
  //文件出口
  output: {
    //文件打包后输出路径           //生成文件在dist目录下
    path: path.join(__dirname, 'dist'),
    //文件打包后名称 [name]是entry对象的属性名 [hash]每次是打包时的hash值 [chunkhash]是打包文件后hash值，只有文件有修改打包后才会改变
              //生成的js在js下
    filename: "js/[name]-[hash].js"
    //publicPath:'http://www.baidu.com' //打包后js文件引用的地址开头设置
  }, // js/nav.js
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ],
    alias: {
      //src/xx.js 直接简写xx
      js: path.join(__dirname, 'src', 'js'),
      scss: path.join(__dirname, 'src', 'scss')
    },
    extensions: ['.js', '.scss']
  },
  module: {
    rules: [
      {
        //匹配js文件
        test: /\.js$/,
        //使用的loader
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015'],
              ['react']
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },{
        test:/\.(jpg|png)$/,
        loaders:['url-loader?limit=20000&name:img/[name]-[hash:5].[ext]'
        ]
      }
    ]
  },
  //html  不需要引入js，css文件插件
  //引入插件后初始化插件
  plugins: [
    new HtmlWebpackPlugin({
      //模板路径
      filename: 'index.html',
      template: 'index.html',
      trunks:['main']
      /*上线时压缩文件
      minify:{
          //删除注释
         removeComment:true,
         //删除空格
         removeWhitespace:true
       }
      */
    })/*,
    new HtmlWebpackPlugin({
      filename: 'productDoc.html',
      template: 'productDoc.html',
      trunks:['b']
    })*/,
    extractSass
  ]
};