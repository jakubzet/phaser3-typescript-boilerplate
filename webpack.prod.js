const path = require("path");

module.exports = {
  mode: "production",
  optimization: {
    minimize: true,
  },
  output: {
    path: path.resolve(__dirname, "build/prod"),
    filename: "[name].min.js",
    publicPath: "./",
  },
  stats: false,
};
