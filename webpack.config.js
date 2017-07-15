const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, loader: 'babel-loader', 
        exclude: /node_modules/, 
        query: {
            presets:["es2015", "stage-0", "react"]
        }
      }, { 
        test: /\.(sass|scss)$/, use: [
        'style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'sass-loader']}
    ]
  },

  plugins: [HtmlWebpackPluginConfig]
}
