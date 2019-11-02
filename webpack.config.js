const rxPaths = require("rxjs/_esm5/path-mapping");
const workboxPlugin = require("workbox-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./assets/ts/app.ts",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets/js")
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },

  // Enable sourcemaps for debugging webpack's output.
  // devtool: "cheap-source-map",

  // devServer: {
  //   contentBase: path.join(__dirname, "assets/js"),
  //   compress: true,
  //   hot: true,
  //   open: true,
  //   openPage: 'yoyoyo',
  //   port: 4000
  // },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".js"],

    // 使用 "alias" 键来解析成 ESM 分发版
    alias: rxPaths()
  },

  module: {
    rules: [
      // All files with a '.ts' or '.js' extension will be handled by 'babel-loader'.
      {
        exclude: /node_modules/,
        test: /\.(t|j)s?$/,
        use: "babel-loader"
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new workboxPlugin.GenerateSW({
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: true
    })
  ]

  // Other options...
};
