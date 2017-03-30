var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [ "./app/main.js" ],
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js"
    },

  module: {
    rules: [
      { test: /\.js$/, use: [ { loader: 'babel-loader' } ], exclude: /node_modules/ }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};

