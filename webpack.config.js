var webpack = require('webpack');

var config = {
    entry: {
        app: './app/index.js',
        vendor: ['angular', 'oclazyload']
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },{
                test: /\.css$/,
                loader: 'style!css',
                exclude: /node_modules/
            },{
                test: /\.scss$/,
                loader: 'style!css!sass',
                exclude: /node_modules/
            },{
                test: /\.png$/,
                loader: "url-loader?limit=100000&mimetype=image/png"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },{
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader"
            }
        ]
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.json', '.less'],
        // Tell webpack to look for required files in bower and node
        modulesDirectories: ['node_modules']
    }
};

module.exports = config;