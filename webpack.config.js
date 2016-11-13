module.exports = {
    entry: "./index.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: { presets: ['es2015'] },
                exclude: '/node_modules/'
            },
        ],
    }
};