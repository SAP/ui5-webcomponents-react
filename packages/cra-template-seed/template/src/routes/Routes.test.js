import { ROUTES, getRoute } from './Routes';

describe('Routes.js Test Suite', () => {
  test('should return URL when passed correct key', () => {
    const output = getRoute(ROUTES.HOME);

    expect(output).toEqual('/');
  });

  test('should throw error when passed wrong key', () => {
    const key = 'DOES_NOT_EXIST';
    const errorMessage = 'Url defined: ' + key + ' not found';

    const urlGet = () => getRoute(key);

    expect(urlGet).toThrowError(errorMessage);
  });

  test('should correctly replace key when passed correct replaceValue', () => {
    const key = 'TODO_DETAIL';

    const output = getRoute(key, [{ value: 1 }]);

    expect(output).toEqual('/todo/detail/1');
  });

  test('should erroneously replace key when passed correct replaceValue', () => {
    const key = 'TODO_DETAIL';

    const replaceUrl = () => getRoute(key, [{ value: 1, search: ':not_id' }]);

    expect(replaceUrl()).toEqual('/todo/detail/:id');
  });
});
