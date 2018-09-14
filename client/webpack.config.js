var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    "presets": ["latest", "react", "stage-0"],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            // IMAGES
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include: path.join(__dirname, 'client'),
                loader: 'url?limit=25000'
            }
        ]
    }
};
