const path = require('path');

module.exports = {
  entry: {
    tabs: "./src/js/background.js"
         },
  output: {
    path: "./privatepage/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};

