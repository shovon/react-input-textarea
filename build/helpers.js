// TODO: unit test this.
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.isStringEmpty = isStringEmpty;

function isStringEmpty(str) {
  return typeof str !== 'string' || str.length <= 0;
}

