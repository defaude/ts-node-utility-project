const del = require('del');

console.log('cleaning up again');
del(['**/*.js', '!node_modules/**', '!cleanup.js']);
