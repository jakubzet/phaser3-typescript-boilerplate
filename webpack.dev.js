const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    game: "./src/main.ts",
  },
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./build",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    pathinfo: false,
    filename: "[name].js",
    devtoolModuleFilenameTemplate: "../[resource-path]",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  stats: true,
  plugins: [
    new webpack.DefinePlugin({
      "typeof SHADER_REQUIRE": JSON.stringify(false),
      "typeof CANVAS_RENDERER": JSON.stringify(true),
      "typeof WEBGL_RENDERER": JSON.stringify(true),
    }),
    new CopyWebpackPlugin([
      {
        from: "./assets",
        to: "./assets",
        force: true,
      },
    ]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
  ],
};
