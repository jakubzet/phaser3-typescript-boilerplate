import * as path from "path";
import * as webpack from "webpack";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  entry: {
    game: "./src/main.ts",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "./",
    filename: "[name].min.js",
  },
  optimization: {
    minimize: true,
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
  stats: false,
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

export default config;
