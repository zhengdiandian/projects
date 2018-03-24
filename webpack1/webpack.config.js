var UglifyJs = require('uglifyjs-webpack-plugin')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var providePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery'
})
const newLocal = '/out'

module.exports = {
  entry: {
    index: './src/js/entry.js',
    index2: './src/js/entry2.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/out',
    publicPath: 'http://localhost:8080/out/'
  },
  module: {
    rules: [
      { test: /.js$/, use: ['babel-loader'] },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      { test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {
        test: /.jpg|png|gig|svg/,
        use: ['url-loader?limit=8192&name=./[name].[ext]']
      }
    ]
  },
  plugins: [
    new UglifyJs(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    }),
    new ExtractTextPlugin('[name].css'),
    providePlugin
  ]
}
