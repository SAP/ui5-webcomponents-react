import { modifyObjectProperty } from '@shared/tests/utils';
import { LOG_LEVEL, Logger } from './Logger';

describe('Logger', () => {
  test('fatal', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();
    Logger.log(LOG_LEVEL.FATAL, 'Test');
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
  test('error', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();
    Logger.log(LOG_LEVEL.ERROR, 'Test');
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
  test('warning', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation();
    Logger.log(LOG_LEVEL.WARNING, 'Test');
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
  test('info', () => {
    const spy = jest.spyOn(console, 'info').mockImplementation();
    Logger.log(LOG_LEVEL.INFO, 'Test');
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
  test('debug', () => {
    const spy = jest.spyOn(console, 'debug').mockImplementation();
    Logger.log(LOG_LEVEL.DEBUG, 'Test');
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
  test('trace', () => {
    const spy = jest.spyOn(console, 'trace').mockImplementation();
    Logger.log(LOG_LEVEL.TRACE, 'Test');
    expect(spy).toBeCalled();
    spy.mockRestore();
  });

  test('Not to crash if no console', () => {
    const original = window.console;
    modifyObjectProperty(window, 'console', false);
    expect(() => Logger.log(LOG_LEVEL.TRACE, 'Test')).not.toThrow();
    modifyObjectProperty(window, 'console', original);
  });

  test('IE specific', () => {
    const { debug, trace } = window.console;
    modifyObjectProperty(window.console, 'debug', false);
    modifyObjectProperty(window.console, 'trace', false);
    const spy = jest.spyOn(console, 'log').mockImplementation();
    // @ts-ignore
    Logger.trace();
    expect(spy).toBeCalled();
    Logger.debug('debug');
    expect(spy).toBeCalledTimes(2);
    spy.mockRestore();
    modifyObjectProperty(window.console, 'debug', debug);
    modifyObjectProperty(window.console, 'trace', trace);
  });
  test('iOS specific', () => {
    const { info } = window.console;
    modifyObjectProperty(window.console, 'info', false);
    const spy = jest.spyOn(console, 'log').mockImplementation();
    Logger.info('info');
    expect(spy).toBeCalled();
    spy.mockRestore();
    modifyObjectProperty(window.console, 'info', info);
  });

  test('Public API', () => {
    const spy = jest.spyOn(Logger, 'log').mockImplementation();
    Logger.fatal('fatal', 'test');
    expect(spy).toBeCalledWith(LOG_LEVEL.FATAL, 'fatal', 'test');
    Logger.error('error', 'test');
    expect(spy).toBeCalledWith(LOG_LEVEL.ERROR, 'error', 'test');
    Logger.warning('warning', 'test');
    expect(spy).toBeCalledWith(LOG_LEVEL.WARNING, 'warning', 'test');
    Logger.info('info', 'test');
    expect(spy).toBeCalledWith(LOG_LEVEL.INFO, 'info', 'test');
    Logger.debug('debug', 'test');
    expect(spy).toBeCalledWith(LOG_LEVEL.DEBUG, 'debug', 'test');
    Logger.trace('trace', 'test');
    expect(spy).toBeCalledWith(LOG_LEVEL.TRACE, 'trace', 'test');
  });

  test('Custom Component', () => {
    expect(Logger.defaultComponent).toEqual('DEVICE');
    const customLogger = Logger.for('CUSTOM');
    expect(customLogger.defaultComponent).toEqual('CUSTOM');
    expect(Logger.defaultComponent).toEqual('DEVICE');
  });
});
