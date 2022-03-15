import { getRoute, ROUTES } from './Routes';

describe('Routes.js Test Suite', () => {
  test('should return URL when passed correct key', () => {
    const output = getRoute(ROUTES.HOME);

    expect(output).toEqual('/');
  });

  test('should correctly replace key when passed correct replaceValue', () => {
    const output = getRoute(ROUTES.TODO_DETAIL, { id: 1 });

    expect(output).toEqual('/todo/detail/1');
  });

  test("should throw an error in case parameters and path doesn't match", () => {
    const replaceUrl = () => getRoute(ROUTES.TODO_DETAIL, { incorrectId: 1 });

    expect(replaceUrl).toThrow('Missing ":id" param');
  });
});
