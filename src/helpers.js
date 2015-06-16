// TODO: unit test this.
export function isStringEmpty(str) {
  return (typeof str !== 'string') || str.length <= 0;
}