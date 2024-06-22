const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    library: 'ChatComponent',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'assets/',
              publicPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CompressionPlugin({
      test: /\.(js|css|html|ttf|woff|woff2)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  performance: {
    maxAssetSize: 512000, // 500 KiB
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
