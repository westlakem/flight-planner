import node from 'file.node';

module.exports = {
    module: {
        rules: [
            {
                test: /\.node$/,
                use: 'node-loader'
            }
        ]
    }
}