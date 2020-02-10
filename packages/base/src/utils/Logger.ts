/* eslint-disable no-console,no-unused-expressions */

const pad0 = (i: any, w: number) => `000${String(i)}`.slice(-w);

export enum LOG_LEVEL {
  FATAL = 0,
  ERROR = 1,
  WARNING = 2,
  INFO = 3,
  DEBUG = 4,
  TRACE = 5
}

class DeviceLogger {
  public defaultComponent: string;
  public sWindowName = window.top === window ? '' : `[${window.location.pathname.split('/').slice(-1)[0]}] `;

  constructor(defaultComponent = 'DEVICE') {
    this.log(LOG_LEVEL.INFO, 'Device API logging initialized');
    this.defaultComponent = defaultComponent;
    return this;
  }

  public for(defaultComponent: string) {
    return new DeviceLogger(defaultComponent);
  }

  public log(iLevel: LOG_LEVEL, sMessage: string, sComponent?: string) {
    sComponent = sComponent || this.defaultComponent || '';
    const oNow = new Date();
    const oLogEntry = {
      time: `${pad0(oNow.getHours(), 2)}:${pad0(oNow.getMinutes(), 2)}:${pad0(oNow.getSeconds(), 2)}`,
      date: `${pad0(oNow.getFullYear(), 4)}-${pad0(oNow.getMonth() + 1, 2)}-${pad0(oNow.getDate(), 2)}`,
      timestamp: oNow.getTime(),
      level: iLevel,
      message: sMessage || '',
      component: sComponent || ''
    };
    if (window.console) {
      const logText = `${oLogEntry.date} ${oLogEntry.time} ${this.sWindowName}${oLogEntry.message} - ${oLogEntry.component}`;
      switch (iLevel) {
        case LOG_LEVEL.FATAL:
        case LOG_LEVEL.ERROR:
          console.error(logText);
          break;
        case LOG_LEVEL.WARNING:
          console.warn(logText);
          break;
        case LOG_LEVEL.INFO:
          console.info ? console.info(logText) : console.log(logText);
          break; // info not available in iOS simulator
        case LOG_LEVEL.DEBUG:
          console.debug ? console.debug(logText) : console.log(logText);
          break; // debug not available in IE, fallback to log
        case LOG_LEVEL.TRACE:
          console.trace ? console.trace(logText) : console.log(logText);
          break; // trace not available in IE, fallback to log
      }
    }
    return oLogEntry;
  }

  //  Public API
  public fatal(msg: string, component?: string) {
    return this.log(LOG_LEVEL.FATAL, msg, component);
  }

  public error(msg: string, component?: string) {
    return this.log(LOG_LEVEL.ERROR, msg, component);
  }

  public warning(msg: string, component?: string) {
    return this.log(LOG_LEVEL.WARNING, msg, component);
  }

  public info(msg: string, component?: string) {
    return this.log(LOG_LEVEL.INFO, msg, component);
  }

  public debug(msg: string, component?: string) {
    return this.log(LOG_LEVEL.DEBUG, msg, component);
  }

  public trace(msg: string, component?: string) {
    return this.log(LOG_LEVEL.TRACE, msg, component);
  }
}

export const Logger = new DeviceLogger();
