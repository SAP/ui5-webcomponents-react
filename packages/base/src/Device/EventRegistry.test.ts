import { EventRegistry } from './EventRegistry';

describe('Device - Event Registry', () => {
  test('Add, fire and remove event', () => {
    const callback = jest.fn();
    EventRegistry.attachEvent('test', callback);
    expect(EventRegistry.mEventRegistry.hasOwnProperty('test')).toBe(true);
    EventRegistry.fireEvent('test');
    expect(callback).toBeCalled();
    EventRegistry.detachEvent('test', callback);
    expect(EventRegistry.mEventRegistry.hasOwnProperty('test')).toBe(false);
  });

  test('Add and remove events with different listeners', () => {
    const callback = jest.fn();
    const a = {};
    const b = {};
    EventRegistry.attachEvent('test', callback, a);
    EventRegistry.attachEvent('test', callback, b);
    // @ts-ignore
    expect(EventRegistry.mEventRegistry.test.length).toBe(2);
    EventRegistry.detachEvent('test', callback, a);
    // @ts-ignore
    expect(EventRegistry.mEventRegistry.test.length).toBe(1);
  });

  test('Remove not existing event should not crash', () => {
    const callback = jest.fn();
    expect(() => {
      EventRegistry.detachEvent('test', callback);
    }).not.toThrow();
  });
});
