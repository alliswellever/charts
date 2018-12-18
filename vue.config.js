// vue.config.js
const fs = require('fs')
var path = require('path')
process.env.NODE_ENV = 'production';
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('images', resolve('src/assets/images'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('utils', resolve('src/utils'))
      .set('api', resolve('src/api'))
      .set('baseUrl', './')
  }
}