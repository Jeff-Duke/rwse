const path = require('path');

module.exports = {
  entry: {
    main: './lib/index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!resolve-url!sass?sourceMap' },
      { test: /\.png$/, loader: 'url-loader', query: { mimetype: 'image/png'} },
      { test: /\.jpg$/, loader: 'url-loader', query: { mimetype: 'image/jpg'} },
      { test: /\.(jpg|png|svg)$/, loader: 'url-loader', options: { limit: 25000, },},
      { test: /\.(jpg|png|svg)$/, loader: 'file-loader', options: { name: '[path][name].[hash].[ext]',},},
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel',
        query: { presets: ['es2015', 'react'], },
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
};
