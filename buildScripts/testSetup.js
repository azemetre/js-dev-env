// This file isn't transpiled, must use CommonJS and ES5

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack deatures that Mocha doesn't understand
require.extensions['.css'] = function() {};
