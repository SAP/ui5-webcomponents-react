import { attachMediaHandler, detachMediaHandler, getCurrentRange } from './Media';
import { EventProvider } from './EventProvider';

describe('Device - Media', () => {
  test('getCurrentRange with window size', () => {
    expect(getCurrentRange()).toEqual({
      from: 1024,
      name: 'Desktop',
      to: 1439,
      unit: 'px'
    });
  });

  test('getCurrentRange with user defined size', () => {
    expect(getCurrentRange(400)).toEqual({
      from: 0,
      name: 'Phone',
      to: 599,
      unit: 'px'
    });
  });

  test('Attach, fire and Detach Event', () => {
    const callback = jest.fn();
    attachMediaHandler(callback);
    expect(EventProvider.isHandlerAttached('media', callback)).toBeTruthy();
    detachMediaHandler(callback);
    expect(EventProvider.isHandlerAttached('media', callback)).toBeFalsy();
  });
});
