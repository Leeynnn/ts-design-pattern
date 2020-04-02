const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const entryName = require('./entry.config.js')
const production = process.env.NODE_ENV === 'production'

const configureWebpack = {
  output: {
    filename: `js/[name].js${production ? '?t=[chunkhash]' : ''}`,
    chunkFilename: `js/[name].js${production ? '?t=[chunkhash]' : ''}`
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: process.env.NODE_ENV
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@js': path.resolve(__dirname, './src/js/'),
      '@api': path.resolve(__dirname, './src/api/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@images': path.resolve(__dirname, './src/images/'),
      '@components': path.resolve(__dirname, './src/components/')
    },
    extensions: ['.ts', '.js', '.json']
  }
}

const pages = {}
if (entryName === '*' || production) {
  fs.readdirSync('./src/entries/').forEach(moduleName => {
    pages[moduleName] = {
      entry: path.resolve(__dirname, `./src/entries/${moduleName}/index.ts`),
      template: path.resolve(__dirname, `./src/entries/${moduleName}/index.html`),
      filename: `${moduleName}/index.html`,
      chunks: ["chunk-vendors", "chunk-common", moduleName]
    }
  })
} else if (entryName !== '*') {
  pages[entryName] = {
    entry: path.resolve(__dirname, `./src/entries/${entryName}/index.js`),
    template: path.resolve(__dirname, `./src/entries/${entryName}/index.html`),
    filename: `${entryName}/index.html`,
    chunks: ["chunk-vendors", "chunk-common", entryName]
  }
}

module.exports = {
  assetsDir: './',
  css: {
    extract: {
      filename: `css/[name].css${production ? '?t=[contenthash]' : ''}`,
      chunkFilename: `css/[name].css${production ? '?t=[contenthash]' : ''}`
    }
  },
  chainWebpack: config => {
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('file-loader')
      .options({
        name: `img/[name].[ext]${production ? '?t=[contenthash]' : ''}`
      })
    config.module.rule('svg')
      .test(/\.(svg)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: `img/[name].[ext]${production ? '?t=[contenthash]' : ''}`
      })
  },
  configureWebpack,
  pages,
  productionSourceMap: false
}