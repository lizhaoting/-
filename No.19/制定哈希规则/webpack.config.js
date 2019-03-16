const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[path]-[name]-[local]-[hash:base64:5]'
                }
              }
            ],
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ]
};