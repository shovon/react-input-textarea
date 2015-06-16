import assert from 'assert';
import { isStringEmpty } from './src/helpers';

describe('isStringEmpty', () => {
  it('should indicate that all non-strings are empty', () => {
    assert(isStringEmpty(10));
    assert(isStringEmpty({}));
    assert(isStringEmpty([]));
    assert(isStringEmpty(/foo/));
    assert(isStringEmpty(10));
  });

  it('should indicate empty strings as empty', () => {
    assert(isStringEmpty(''));
  });

  it('should indicate non-empty strings as not empty', () => {
    assert(!isStringEmpty('djfdjfkfd'));
    assert(!isStringEmpty('foo'));
  });
});