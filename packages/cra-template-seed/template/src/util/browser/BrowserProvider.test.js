import '@testing-library/jest-dom/extend-expect';

import BrowserProvider from './BrowserProvider';

describe('BrowserProvider.js Test Suite', () => {
  test('should return URL when passed correct key', () => {
    const key = 'HOME';

    const output = BrowserProvider.getUrl(key);

    expect(output).toEqual('/');
  });

  test('should throw error when passed wrong key', () => {
    const key = 'DOES_NOT_EXIST';
    const errorMessage = 'Url defined: ' + key + ' not found';

    const getUrl = () => BrowserProvider.getUrl(key);

    expect(getUrl).toThrowError(errorMessage);
  });

  test('should correctly replace key when passed correct replaceValue', () => {
    const key = 'TODO_DETAIL';

    const output = BrowserProvider.getUrl(key, [{ value: 1 }]);

    expect(output).toEqual('/todo/detail/1');
  });

  test('should erroneously replace key when passed correct replaceValue', () => {
    const key = 'TODO_DETAIL';

    const replaceUrl = () => BrowserProvider.getUrl(key, [{ value: 1, search: ':not_id' }]);

    expect(replaceUrl()).toEqual('/todo/detail/:id');
  });
});
