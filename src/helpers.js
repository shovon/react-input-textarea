// TODO: unit test this.
export function isStringEmpty(str) {
  return (typeof str !== 'string') || str.length <= 0;
}

export function isArray(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}
