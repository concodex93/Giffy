const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/main/index.js'], // Polyfill features we cannot convert
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },

    // auto bundle js files and reload when new file added/modified
    devServer: {
        contentBase: './dist'       
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html' 
        })
    ], 

    // babel-loader setup
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /\node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }

};