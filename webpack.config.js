const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
  const { SKIP_CLEAN } = env || {};

  const dirname = __dirname;

  const config = {
    name: '- SDK',
    entry: './index.ts',
    output: {
      path: path.join(dirname, 'dist'),
      filename: 'main.js',
      chunkFilename: `[hash].[name].js`,
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    devServer: {
      contentBase: path.join(dirname, '/'),
      compress: true,
      port: 9000,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/i,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [...(SKIP_CLEAN ? [] : [new CleanWebpackPlugin()])],
  };

  return config;
};
