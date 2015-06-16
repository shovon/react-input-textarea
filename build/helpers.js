// TODO: unit test this.
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.isStringEmpty = isStringEmpty;
exports.isArray = isArray;

function isStringEmpty(str) {
  return typeof str !== 'string' || str.length <= 0;
}

function isArray(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}

