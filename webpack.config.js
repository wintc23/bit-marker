const path = require('path');
const commonOutpuConfig = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

module.exports = [
  {
    ...commonOutpuConfig,
    output: {
      filename: 'index.common.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
        type: 'commonjs2',
      },
    },
  },
  {
    ...commonOutpuConfig,
    experiments: {
      outputModule: true,
    },
    output: {
      filename: 'index.esm.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
        type: 'module',
      },
    }
  }
];