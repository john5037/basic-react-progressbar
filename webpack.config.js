var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ProgressBarComponent.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'ProgressBarComponent.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}