const path = require('path');
module.exports = [
    {
        mode: 'development',
        entry: './src/main.ts',
        module: {
            rules: [
                {
                    test: /\.ts$/, // File must end with .ts
                    use: 'ts-loader',
                    include: [path.resolve(__dirname, 'src/')]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        output: {
            publicPath: 'assets/scripts',
            filename: 'main.js',
            path: path.resolve(__dirname, 'assets/scripts')
        },
        optimization: {
            mergeDuplicateChunks: true, // Tells webpack to merge chunks which contain the same modules.
            providedExports: true, // Tells webpack to figure out which exports are provided by modules to generate more efficient code for export * from ...
            removeAvailableModules: true, // Tells webpack to detect and remove modules from chunks when these modules are already included in all parents.
            usedExports: true, // <- remove unused function
        }
    }
];