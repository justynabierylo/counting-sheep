var webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
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
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
          'TweenLite': 'gsap/src/minified/TweenLite.min.js',
          'TweenMax': 'gsap/src/minified/TweenMax.min.js',
          'TimelineLite': 'gsap/src/minified/TimelineLite.min.js',
          'TimelineMax': 'gsap/src/minified/TimelineMax.min.js',
          'ScrollMagic': 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
          'animation.gsap': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
          'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",  
            jQuery: "jquery" 
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
