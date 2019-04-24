import { Logger } from '@fiori-for-react/utils';

export enum OSTypes {
  WINDOWS = 'win',
  MACINTOSH = 'mac',
  LINUX = 'linux',
  IOS = 'iOS',
  ANDROID = 'Android',
  BLACKBERRY = 'bb',
  WINDOWS_PHONE = 'winphone'
}

// tslint:disable triple-equals

export class OS {
  public OS = OSTypes;

  public name: string;
  public versionStr: string;
  public version: number;

  public windows?: boolean;
  public macintosh?: boolean;
  public linux?: boolean;
  public ios?: boolean;
  public android?: boolean;
  public bb?: boolean;
  public winphone?: boolean;
  public windows_phone?: boolean;
  public blackberry?: boolean;

  constructor(customUA?: string) {
    this.setOS(customUA);
  }

  public setOS(customUA?: string) {
    this.getOS(customUA);
    this.version = this.versionStr ? parseFloat(this.versionStr) : -1;
    if (this.name) {
      for (const os in OSTypes) {
        if (OSTypes[os] === this.name) {
          this[os.toLowerCase()] = true;
        }
      }
    }
  }

  private getOS(customUA) {
    let platform;
    let result;
    const userAgent = customUA || navigator.userAgent;
    // Windows Phone. User agent includes other platforms and therefore must be checked first:
    platform = /Windows Phone (?:OS )?([\d.]*)/;
    result = userAgent.match(platform);
    if (result) {
      this.name = OSTypes.WINDOWS_PHONE;
      this.versionStr = result[1];
      return this;
    }

    // BlackBerry 10:
    if (userAgent.indexOf('(BB10;') > 0) {
      platform = /\sVersion\/([\d.]+)\s/;
      result = userAgent.match(platform);
      if (result) {
        this.name = OSTypes.BLACKBERRY;
        this.versionStr = result[1];
        return this;
      }
      this.name = OSTypes.BLACKBERRY;
      this.versionStr = '10';
      return this;
    }

    // iOS, Android, BlackBerry 6.0+:
    platform = /\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;
    result = userAgent.match(platform);
    if (result) {
      const appleDevices = /iPhone|iPad|iPod/;
      const bbDevices = /PlayBook|BlackBerry/;
      if (result[0].match(appleDevices)) {
        result[3] = result[3].replace(/_/g, '.');
        // result[1] contains info of devices
        this.name = OSTypes.IOS;
        this.versionStr = result[3];
        return this;
      }
      if (result[2].match(/Android/)) {
        result[2] = result[2].replace(/\s/g, '');
        this.name = OSTypes.ANDROID;
        this.versionStr = result[3];
        return this;
      }
      if (result[0].match(bbDevices)) {
        this.name = OSTypes.BLACKBERRY;
        this.versionStr = result[4];
        return this;
      }
    }

    // Firefox on Android
    platform = /\((Android)[\s]?([\d][.\d]*)?;.*Firefox\/[\d][.\d]*/;
    result = userAgent.match(platform);
    if (result) {
      this.name = OSTypes.ANDROID;
      this.versionStr = result.length == 3 ? result[2] : '';
      return this;
    }

    return this.getDesktopOS(customUA);
  }

  private getDesktopOS = (customUA) => {
    const userAgent = customUA || navigator.userAgent;
    const pf = navigator.platform;
    if (pf.indexOf('Win') != -1) {
      // userAgent in windows 7 contains: windows NT 6.1
      // userAgent in windows 8 contains: windows NT 6.2 or higher
      // userAgent since windows 10: Windows NT 10[...]
      const rVersion = /Windows NT (\d+).(\d)/i;
      const uaResult = userAgent.match(rVersion);
      let sVersionStr = '';
      if (uaResult[1] == '6') {
        if (uaResult[2] == 1) {
          sVersionStr = '7';
        } else if (uaResult[2] > 1) {
          sVersionStr = '8';
        }
      } else {
        sVersionStr = uaResult[1];
      }
      this.name = OSTypes.WINDOWS;
      this.versionStr = sVersionStr;
      return this;
    }
    if (pf.indexOf('Mac') != -1) {
      this.name = OSTypes.MACINTOSH;
      this.versionStr = '';
      return this;
    }

    if (pf.indexOf('Linux') != -1) {
      this.name = OSTypes.LINUX;
      this.versionStr = '';
      return this;
    }
    Logger.info('OS detection returned no result');
    return null;
  };
}
