import { getEventFromCallback } from '@shared/tests/utils';
import sinon from 'sinon';
import { Optional } from './Optional';

describe('Optional', () => {
  test('get deep value', () => {
    const myObj = {
      a: {
        b: {
          c: 1
        }
      }
    };

    const val = Optional.of(myObj, 'a.b.c').get();
    expect(val).toBe(myObj.a.b.c);
  });

  test('get not existing value', () => {
    const myObj = {
      a: {
        b: {
          c: 1
        }
      }
    };

    const val = Optional.of(myObj, 'a.x.d').get();
    expect(val).toBe(undefined);
  });

  test('keep null value', () => {
    const myObj = {
      a: {
        b: {
          c: null
        }
      }
    };

    const val = Optional.of(myObj, 'a.b.c').get();
    expect(val).toBe(null);
  });

  test('isPreset', () => {
    const myObj = {
      a: {
        b: {
          c: 1
        }
      }
    };

    const val = Optional.of(myObj, 'a.b.c').isPresent();
    expect(val).toBe(true);
  });

  test('isPreset with null value', () => {
    const myObj = {
      a: {
        b: {
          c: null
        }
      }
    };

    const val = Optional.of(myObj, 'a.b.c').isPresent();
    expect(val).toBe(true);
  });

  test('isPreset falsy', () => {
    const myObj = {
      a: {
        b: {
          c: 1
        }
      }
    };

    const val = Optional.of(myObj, 'a.x.c').isPresent();
    expect(val).toBe(false);
  });

  test('ifPreset', () => {
    const myObj = {
      a: {
        b: {
          c: 1
        }
      }
    };

    const callback = sinon.spy();

    Optional.of(myObj, 'a.b.c').ifPresent(callback);
    expect(callback.called).toBe(true);
    expect(getEventFromCallback(callback)).toEqual(myObj.a.b.c);
  });

  test('isPreset falsy', () => {
    const myObj = {
      a: {
        b: {
          c: 1
        }
      }
    };

    const callback = sinon.spy();

    Optional.of(myObj, 'a.x.c').ifPresent(callback);
    expect(callback.called).toBe(false);
  });

  test('orElse', () => {
    const myObj = {
      a: {
        b: {
          c: 1
        }
      }
    };

    const val = Optional.of(myObj, 'a.b.c').orElse(1337);
    expect(val).toEqual(myObj.a.b.c);
  });

  test('orElse falsy', () => {
    const myObj = {
      a: {
        b: {
          c: 1
        }
      }
    };

    const val = Optional.of(myObj, 'a.x.c').orElse(1337);
    expect(val).toEqual(1337);
  });

  test('orElseThrow', () => {
    const myObj = {
      a: {
        b: {
          c: 1
        }
      }
    };

    const val = Optional.of(myObj, 'a.b.c').orElseThrow(() => new Error('Element not available'));
    expect(val).toEqual(myObj.a.b.c);
  });

  test('orElseThrow falsy', () => {
    const myObj = {
      a: {
        b: {
          c: 1
        }
      }
    };

    const getValue = () => {
      Optional.of(myObj, 'a.x.c').orElseThrow(() => new Error('Element not available'));
    };
    expect(getValue).toThrowError('Element not available');
  });
});
