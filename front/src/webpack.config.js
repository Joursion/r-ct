var webpack = require('webpack');

module.exports = {
    entry:  './javascript/main.jsx',
    output: {
        path: './static',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
