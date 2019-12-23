const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    modules: [ 'node_modules' ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
  },
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [ '@babel/preset-env', { targets: { browsers: 'last 1 version' } } ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
              [ '@babel/plugin-proposal-decorators', { legacy: true } ],
              [ '@babel/plugin-proposal-class-properties', { loose: true } ],
              'react-hot-loader/babel',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};

