const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'), 
  src: path.resolve(__dirname, '../src'), 
  assets: path.resolve(__dirname, '../src/assets'), 
  build: path.resolve(__dirname, '../dist'), 
  static: path.resolve(__dirname, '../public'), 
};
