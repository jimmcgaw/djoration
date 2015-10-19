// webpack.config.js
module.exports = {
  entry: './public/static/js/index.jsx',
  output: {
    path: './public/static/js',
    filename: 'index.js'       
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader' }
    ]
  }
};