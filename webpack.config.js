const rxPaths = require('rxjs/_esm5/path-mapping');
const webpack = require('webpack');
const path = require("path");

module.exports = {
  mode: "development",
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
  devtool: "cheap-source-map",

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
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],

    // 使用 "alias" 键来解析成 ESM 分发版
    alias: rxPaths(),
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]

  // Other options...
};