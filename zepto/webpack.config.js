// const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// })

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/mian.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public',
        // colors: true,
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // 在开发环境使用 style-loader
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
    ]

    // plugins:[
    //     new BrowserSyncPlugin({
    //         host:'localhost', // 实时监听，webpack -w 可以实时更新硬盘中的文件js，css
    //         port:8080,
    //         file:'',
    //         server:{
    //             baseDir:'./app' // localhost地址对应的文件目录
    //         }
    //     })
    // ]
}