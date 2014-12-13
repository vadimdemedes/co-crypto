/**
 * Dependencies
 */

var thunkify = require('thunkify');
var crypto = require('crypto');


/**
 * Expose thunkified crypto
 */

var methods = [
  'pbkdf2',
  'randomBytes',
  'pseudoRandomBytes'
];

Object.keys(crypto).forEach(function (property) {
  exports[property] = crypto[property];
});

methods.forEach(function (method) {
  exports[method] = thunkify(crypto[method]);
});
