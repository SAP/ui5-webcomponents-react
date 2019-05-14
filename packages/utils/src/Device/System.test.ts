import { System } from './System';
import { setUserAgentString } from '@shared/tests/utils';
import { OSTypes } from './OS';

describe('Device - System', () => {
  test('Desktop', () => {
    setUserAgentString(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'
    );
    const os = {
      OS: OSTypes,
      windows: true,
      version: 7
    };
    const browser = {};
    const support = {
      touch: false
    };
    const instance = new System(os, browser, support);
    expect(instance.desktop).toBe(true);
  });

  test('Tablet', () => {
    setUserAgentString(
      'Mozilla/5.0 (iPad; CPU iPad OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
    );
    const os = {
      OS: OSTypes,
      ios: true,
      name: OSTypes.IOS
    };
    const browser = {};
    const support = {
      touch: true
    };
    const instance = new System(os, browser, support);
    expect(instance.tablet).toBe(true);
  });

  test('Phone', () => {
    setUserAgentString(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
    );
    const os = {
      OS: OSTypes,
      ios: true,
      name: OSTypes.IOS
    };
    const browser = {};
    const support = {
      touch: true
    };
    const instance = new System(os, browser, support);
    expect(instance.phone).toBe(true);
  });

  test('Android Phone', () => {
    setUserAgentString(
      'Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.83 Mobile Safari/537.36'
    );
    const os = {
      OS: OSTypes,
      android: true,
      name: OSTypes.ANDROID,
      version: 5
    };
    const browser = {
      chrome: true
    };
    const support = {
      touch: true
    };
    const instance = new System(os, browser, support);
    expect(instance.phone).toBe(true);
  });

  test('Nexus Tablet', () => {
    setUserAgentString(
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.83 Mobile Safari/537.36'
    );
    const os = {
      OS: OSTypes,
      android: true,
      name: OSTypes.ANDROID,
      version: 3
    };
    const browser = {
      chrome: true,
      webkit: true,
      webkitVersion: 537.3
    };
    const support = {
      touch: true
    };
    Object.defineProperty(window.screen, 'height', { value: 552, configurable: true });
    const instance = new System(os, browser, support);
    expect(instance.tablet).toBe(true);
  });

  test('Combi', () => {
    const os = {
      OS: OSTypes,
      windows: true,
      name: OSTypes.WINDOWS,
      version: 10
    };
    const browser = {};
    const support = {
      touch: true
    };
    const instance = new System(os, browser, support);
    expect(instance.combi).toBe(true);
  });
});
