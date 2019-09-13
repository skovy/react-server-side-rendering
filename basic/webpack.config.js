const nodeExternals = require("webpack-node-externals");
const path = require("path");

const js = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
};

const serverConfig = {
  mode: "development",
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, "src/server/index.js"),
  module: {
    rules: [js]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js"
  }
};

const clientConfig = {
  mode: "development",
  target: "web",
  entry: path.resolve(__dirname, "src/browser/index.js"),
  module: {
    rules: [js]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "[name].js"
  }
};

module.exports = [serverConfig, clientConfig];
