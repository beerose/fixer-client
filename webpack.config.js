const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://0.0.0.0:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    // 'babel-polyfill',

    './index.jsx',
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath: 'http://127.0.0.1:8080/',
    // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server
    port: 8080,
    host: '0.0.0.0',

    contentBase: resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/',
    headers: { 'Access-Control-Allow-Origin': '*' },
    // match the output `publicPath`
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer'),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions',
      },
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};
