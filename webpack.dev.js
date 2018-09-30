const path = require("path");

module.exports = {
  mode: "development",
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, "build/dev"),
    pathinfo: false,
    filename: "[name].js",
    devtoolModuleFilenameTemplate: "../[resource-path]",
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./build",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
    ],
  },
  stats: true,
};
