const path = require('path');

module.exports = {
  // Your existing Webpack configuration

  target: 'node', // Add this line to target Node.js environment

  resolve: {
    extensions: ['.js'],
  },
  entry: {
    // Your entry point(s)
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Your module rules
    ],
  },
};
