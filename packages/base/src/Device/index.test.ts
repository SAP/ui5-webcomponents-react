import {
  attachOrientationChangeHandler,
  attachResizeHandler,
  detachOrientationChangeHandler,
  detachResizeHandler,
  getOrientation,
  getWindowSize
} from './index';

describe('Device', () => {
  test('resize handler', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    attachResizeHandler(callback);
    expect(getWindowSize()).toEqual({
      height: 768,
      width: 1024
    });
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 200 });
    global.dispatchEvent(new Event('resize'));
    jest.runAllTimers();
    expect(callback).toBeCalledWith({
      height: 768,
      width: 200
    });
    detachResizeHandler(callback);
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
    global.dispatchEvent(new Event('resize'));
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
    // restore original value
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });
    global.dispatchEvent(new Event('resize'));
    jest.runAllTimers();
  });

  test('orientation change', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    attachOrientationChangeHandler(callback);
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 });
    expect(getOrientation()).toEqual({
      landscape: true,
      portrait: false
    });
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 300 });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 1000 });
    global.dispatchEvent(new Event('resize'));
    jest.runAllTimers();
    expect(callback).toBeCalledWith({
      portrait: true,
      landscape: false
    });
    detachOrientationChangeHandler(callback);
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 });
    global.dispatchEvent(new Event('resize'));
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
