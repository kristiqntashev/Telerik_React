const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: 'public', to: '' },
          ],
        }),
      ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|browser_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"],
                    plugins: ['react-hot-loader/babel']
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: "3000",
        publicPath: "http://localhost:3000/dist/"
    }

};