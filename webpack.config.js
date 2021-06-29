const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

const isProductionBuild = process.env.NODE_ENV === "production";
const mode = isProductionBuild ? "production" : "development";
const devtool = isProductionBuild ? undefined : "source-map";

console.log(`Build mode: ${mode}`);

module.exports = {
    output: { filename: "[name].js", path: path.join(__dirname, "bundle") },
    mode,
    devtool,
    entry: {
        index: path.join(__dirname, "index.ts"),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ["file-loader"],
            },
            {
                test: /\.png$/,
                use: ["file-loader"],
            },
        ],
    },
    resolve: {
        alias: {
            vue: "@vue/runtime-dom",
        },
        extensions: [".ts", ".js"],
    },
    plugins: [new VueLoaderPlugin()],
    target: "web",
};
