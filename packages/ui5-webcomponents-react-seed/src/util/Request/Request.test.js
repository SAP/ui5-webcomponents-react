import '@testing-library/jest-dom/extend-expect';

import { serverCustom } from '../../util/TestSetup';
import APIProvider from '../../util/URL/APIProvider';
import Request from './Request';

jest.mock('./Request');

const GET_USER_LOGGED_RESPONSE = {
  id: 'UG9rZW1vbjowMDE=',
  name: 'testeeeeeeeeeeeeeeeee',
  permissions: ['canAccessTodoListPage', 'canAccessTodoEditPage', 'canAccessDropApplication'],
};

describe('Request.js Test Suite', () => {
  const server = serverCustom(APIProvider.getUrl('GET_USER_LOGGED'), GET_USER_LOGGED_RESPONSE);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should fetch successfully data from an API', async () => {
    const successfullyData = Object.assign({}, GET_USER_LOGGED_RESPONSE);

    Request.get.mockImplementationOnce(() => Promise.resolve(successfullyData));

    await expect(Request.get(APIProvider.getUrl('GET_USER_LOGGED'))).resolves.toEqual(successfullyData);
  });

  it('should fetch erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    Request.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(Request.get(APIProvider.getUrl('GET_USER_LOGGED'))).rejects.toThrow(errorMessage);
  });

  test('should mount url properly', async () => {
    const successfullyData = Object.assign({}, GET_USER_LOGGED_RESPONSE);

    Request.get.mockImplementationOnce(() => Promise.resolve(successfullyData));

    await expect(Request.get(APIProvider.getUrl('GET_USER_LOGGED'))).resolves.toEqual(successfullyData);

    expect(Request.get).toHaveBeenCalledWith(APIProvider.getUrl('GET_USER_LOGGED'));
  });
});
