const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = 'build';
const SOURCE_DIR = 'src';
const MODE_TYPES = { DEV: 'dev', BETA: 'beta', RELEASE: 'release' };
const MODE = MODE_TYPES[process.env.NODE_ENV] || MODE_TYPES.DEV;

const config = {
    mode: MODE === MODE_TYPES.DEV ? 'development' : 'production',
    entry: {
        embedded: path.resolve(__dirname, SOURCE_DIR, 'index-embedded.js'),
    },
    devtool: MODE === MODE_TYPES.DEV ? 'eval-source-map' : false,
    output: {
        path: path.resolve(__dirname, BUILD_DIR, MODE),
        filename: '[name].js',
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'url-loader',
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                },
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ['to-string-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /src\/gm\.js/,
            'gm-empty.js',
        ),
        new webpack.DefinePlugin({
            DEBUG: MODE === MODE_TYPES.DEV,
        }),
    ],
};

module.exports = config;
