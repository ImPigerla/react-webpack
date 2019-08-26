const {resolve} = require('path'),
  srcPath = resolve(__dirname, '../src')

module.exports = {
  srcPath: srcPath,
  distPath: resolve(__dirname, '../dist'),
  commonScssFile: [`${srcPath}/style/variables/system-variable.scss`, `${srcPath}/style/base/mixins.scss`], // 配置全局scss变量
  publicPath: '/',
  assets: 'assets',
  limit: 1024 * 5,                            // url-loader limit参数
  htmlPlugin: {                               // html-webpack-plugin config
    title: 'react webpack',
    template: 'index.html',
    favicon: './src/images/favicon.ico'
  },
}
