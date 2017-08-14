module.exports = {
    entry: "./index.html",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                use: [
                    { loader: "babel-loader" },
                    { loader: "polymer-webpack-loader" }
                ]
            }
        ]
    }
};