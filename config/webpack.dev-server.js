const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const externals = require("./node-externals");

module.exports = {
  name: "server",
  target: "node",
  externals,
  entry: "./server/render.js",
  mode: "development",
  output: {
    filename: "dev-server-bundle.js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "../build"),
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              exportOnlyLocals: true,
              modules: true,
              localIdentName: "[local]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss"
            }
          }
        ]
      },
      {
        test: /\.(jpg|svg|png|ico|gif|eot|woff|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "/images/[name].[ext]",
              emitFile: false
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "markdown-with-front-matter-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        BROWSER: false
      }
    })
  ]
};
