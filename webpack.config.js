const nodeExternals = require('webpack-node-externals');

module.exports = {
  // ... other configuration options
  externals: [nodeExternals()],
  resolve: {
    fallback: {
      'fs': false,
      'path': false,
      'os': false
    }
  }
};
