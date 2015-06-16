module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: './public',
    filename: 'bundle.js',
    sourceMapFile: 'bundle.map'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          stage: 0
        }
      }
    ]
  }
};
