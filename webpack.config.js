const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry : [
    './src.index.js',
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
  modules: {
    rules: [
      {
        test: /\/js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          { loader: 'css=loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};