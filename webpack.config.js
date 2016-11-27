module.exports = {
    entry: "./index.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: { presets: ['es2015'] },
                exclude: '/node_modules/'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: "url-loader?limit=30000&name=[name]-[hash].[ext]",
                exclude: '/node_modules/'
            }
        ],
    }
};