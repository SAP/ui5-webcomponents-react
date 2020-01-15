import { modifyObjectProperty } from '@shared/tests/utils';
import * as sinon from 'sinon';
import { LOG_LEVEL, Logger } from './Logger';

describe('Logger', () => {
  test('fatal', () => {
    const spy = sinon.spy(console, 'error');
    Logger.log(LOG_LEVEL.FATAL, 'Test');
    expect(spy.called).toBe(true);
    spy.restore();
  });
  test('error', () => {
    const spy = sinon.spy(console, 'error');
    Logger.log(LOG_LEVEL.ERROR, 'Test');
    expect(spy.called).toBe(true);
    spy.restore();
  });
  test('warning', () => {
    const spy = sinon.spy(console, 'warn');
    Logger.log(LOG_LEVEL.WARNING, 'Test');
    expect(spy.called).toBe(true);
    spy.restore();
  });
  test('info', () => {
    const spy = sinon.spy(console, 'info');
    Logger.log(LOG_LEVEL.INFO, 'Test');
    expect(spy.called).toBe(true);
    spy.restore();
  });
  test('debug', () => {
    const spy = sinon.spy(console, 'debug');
    Logger.log(LOG_LEVEL.DEBUG, 'Test');
    expect(spy.called).toBe(true);
    spy.restore();
  });
  test('trace', () => {
    const spy = sinon.spy(console, 'trace');
    Logger.log(LOG_LEVEL.TRACE, 'Test');
    expect(spy.called).toBe(true);
    spy.restore();
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
    const spy = sinon.spy(console, 'log');
    // @ts-ignore
    Logger.trace();
    expect(spy.called).toBe(true);
    Logger.debug('debug');
    expect(spy.calledTwice).toBe(true);
    spy.restore();
    modifyObjectProperty(window.console, 'debug', debug);
    modifyObjectProperty(window.console, 'trace', trace);
  });
  test('iOS specific', () => {
    const { info } = window.console;
    modifyObjectProperty(window.console, 'info', false);
    const spy = sinon.spy(console, 'log');
    Logger.info('info');
    expect(spy.called).toBe(true);
    spy.restore();
    modifyObjectProperty(window.console, 'info', info);
  });

  test('Public API', () => {
    const spy = sinon.spy(Logger, 'log');
    Logger.fatal('fatal', 'test');
    expect(spy.calledWith(LOG_LEVEL.FATAL, 'fatal', 'test')).toBe(true);
    Logger.error('error', 'test');
    expect(spy.calledWith(LOG_LEVEL.ERROR, 'error', 'test')).toBe(true);
    Logger.warning('warning', 'test');
    expect(spy.calledWith(LOG_LEVEL.WARNING, 'warning', 'test')).toBe(true);
    Logger.info('info', 'test');
    expect(spy.calledWith(LOG_LEVEL.INFO, 'info', 'test')).toBe(true);
    Logger.debug('debug', 'test');
    expect(spy.calledWith(LOG_LEVEL.DEBUG, 'debug', 'test')).toBe(true);
    Logger.trace('trace', 'test');
    expect(spy.calledWith(LOG_LEVEL.TRACE, 'trace', 'test')).toBe(true);
  });

  test('Custom Component', () => {
    expect(Logger.defaultComponent).toEqual('DEVICE');
    const customLogger = Logger.for('CUSTOM');
    expect(customLogger.defaultComponent).toEqual('CUSTOM');
    expect(Logger.defaultComponent).toEqual('DEVICE');
  });
});
