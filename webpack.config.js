const path = require("path");
module.exports = {
  entry: {
    app: "./src/bundles/bundle.js",
    display: "./src/bundles/amiibo-display.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/js")
  },
  devServer: {
    contentBase: "./dist"
  },
  watchOptions: {
    ignored: ["node_modules"]
  },
  watch: true
};