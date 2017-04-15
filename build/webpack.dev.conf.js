var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var CopyWebpackPlugin = require('copy-webpack-plugin');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                htmlLoader: {
                    whateverProp: true
                },
                minimize: true,
                babel: {
                    presets: ['es2015', 'es2017', 'stage-0'],
                    plugins: ['transform-runtime']
                },
                postcss: function() {
                    return [px2rem({ remUnit: 64 })];
                },
                less: {
                    lessPlugins: [
                        new LessPluginAutoPrefix()
                    ]
                },
                vue: {
                    loaders: {
                        css: 'style-loader!css-loader!postcss-loader!less-loader?sourceMap=true',
                        js: 'babel-loader'
                    }
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new CopyWebpackPlugin([{ 
                from : 'mock', 
                to   : 'mock'
        }]),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
})
