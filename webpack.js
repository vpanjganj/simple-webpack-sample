var path = require('path');
var webpack = require('webpack');

// usual Webpack configuration
module.exports = {
  // having 2 entries to have 2 chunks. The vendor one hardly changes and gets cached
    entry: [ "./app/main.js" ],
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js" // todo: maybe change this name?
    },

  module: {
    rules: [
      { test: /\.js$/, use: [ { loader: 'babel-loader' } ], exclude: /node_modules/ }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true, // tells loaders we are in minimise mode so they do their job according to that
      debug: false // speeds up build time
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};

