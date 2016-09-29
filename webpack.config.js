var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    NamePlugin: ['./src/components/NamePlugin.js'],
    EmailPlugin: ['./src/components/EmailPlugin.js'],
    BadPlugin: ['./src/components/BadPlugin.js']
  },
  output: {
    filename: '[name].js',
    path: './dist',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'react-hot!babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
        exclude: /node_modules/
      }
    ]
  },
  babel: {
    presets: [
      "es2015",
      "react"
    ],
    plugins: [
      'transform-runtime'
    ]
  },
  port: 9090,
  devServer: {
    contentBase: './src'
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}