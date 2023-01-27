const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = { 
  mode: process.env.NODE_ENV === 'productions' ? 'production' : 'development',
  entry: [
    './src/index.js',
  ],
  output: {
    publicPath: '/',
    path: __dirname + '/dist',
    filename: 'app.bundle.js',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
  },
  module: { 
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          { loader: 'css-loader' },
        ],
      },
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' },
      ],
    }),
  ],
};
