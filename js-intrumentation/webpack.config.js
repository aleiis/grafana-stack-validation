const path = require('path');

module.exports = {
  entry: './otel-instrument.js', // Input file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'otel-instrument.js', // Output file name
  },
  mode: 'production', // Production mode
};
