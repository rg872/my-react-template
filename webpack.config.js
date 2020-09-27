const HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack'),
  path = require('path'),
  TerserPlugin = require('terser-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const KILOBYTES = 1024;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.tsx',
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '.json'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader', 'eslint-loader'],
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  devServer: {
    port: 8080,
    hot: true,
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new OptimizeCSSAssetsPlugin({}),
  //     new TerserPlugin({
  //       sourceMap: true,
  //       extractComments: false,
  //       terserOptions: { output: { comments: false } },
  //     }),
  //   ],
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  // performance: {
  //   hints: 'warning',
  //   maxEntrypointSize: 200 * KILOBYTES,
  //   maxAssetSize: 100 * KILOBYTES,
  //   assetFilter: (fileName) => !fileName.endsWith('.css') && !fileName.endsWith('.map'),
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new BundleAnalyzerPlugin({ generateStatsFile: true }),
  ],
};
