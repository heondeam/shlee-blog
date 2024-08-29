const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/app.tsx",
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript",
                            ],
                        },
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
                test: /.css?$/,
                exclude: [],
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            filename: "index.html",
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        hot: true,
        open: true,
    },
    mode: "development",
    devtool: "inline-source-map",
};
