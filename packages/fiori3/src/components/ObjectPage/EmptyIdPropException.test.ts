import { EmptyIdPropException } from './EmptyIdPropException';

test('EmptyPropIdException', () => {
  const error = new EmptyIdPropException('my exception');
  expect(error.message).toEqual('my exception');
  expect(error.stack).toBeTruthy();
});
