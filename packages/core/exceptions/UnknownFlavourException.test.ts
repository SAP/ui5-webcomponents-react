import { UnknownFlavourException } from './UnknownFlavourException';

test('UnknownFlavourException', () => {
  const error = new UnknownFlavourException('my exception');
  expect(error.message).toEqual('my exception');
  expect(error.stack).toBeTruthy();
});
