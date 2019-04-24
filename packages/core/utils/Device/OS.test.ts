import { setUserAgentString } from '@shared/tests/utils';

describe('Device - OS', () => {
  test('Windows 7', async (done) => {
    Object.defineProperty(window.navigator, 'platform', { value: 'Win32', configurable: true });
    setUserAgentString(
      'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
    );
    const os = new (await import('./OS')).OS();
    expect(os.windows).toBe(true);
    expect(os.version).toEqual(7);
    done();
  });

  test('Windows 8', async (done) => {
    Object.defineProperty(window.navigator, 'platform', { value: 'Win32', configurable: true });
    setUserAgentString(
      'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
    );
    const os = new (await import('./OS')).OS();
    expect(os.windows).toBe(true);
    expect(os.version).toEqual(8);
    done();
  });

  test('Windows 10', async (done) => {
    Object.defineProperty(window.navigator, 'platform', { value: 'Win32', configurable: true });
    setUserAgentString(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'
    );
    const os = new (await import('./OS')).OS();
    expect(os.windows).toBe(true);
    expect(os.version).toEqual(10);
    done();
  });

  test('Mac', async (done) => {
    Object.defineProperty(window.navigator, 'platform', { value: 'MacIntel', configurable: true });
    const os = new (await import('./OS')).OS();
    expect(os.macintosh).toBe(true);
    done();
  });

  test('Linux', async (done) => {
    Object.defineProperty(window.navigator, 'platform', { value: 'Linux i686', configurable: true });
    const os = new (await import('./OS')).OS();
    expect(os.linux).toBe(true);
    done();
  });

  test('Windows Phone', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; NOKIA; Lumia 710)'
    );
    const os = new (await import('./OS')).OS();
    expect(os.windows_phone).toBe(true);
    expect(os.version).toBe(7.5);
    done();
  });

  test('Blackberry 10 with version', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (BB10; Kbd) AppleWebKit/537.35+ (KHTML, like Gecko) Version/10.3.2.2876 Mobile Safari/537.35+'
    );
    const os = new (await import('./OS')).OS();
    expect(os.blackberry).toBe(true);
    expect(os.version).toBe(10.3);
    done();
  });

  test('Blackberry 10 default', async (done) => {
    setUserAgentString('Mozilla/5.0 (BB10; Kbd) AppleWebKit/537.35+ (KHTML, like Gecko)');
    const os = new (await import('./OS')).OS();
    expect(os.blackberry).toBe(true);
    expect(os.version).toBe(10);
    done();
  });

  test('iOS', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
    );
    const os = new (await import('./OS')).OS();
    expect(os.ios).toBe(true);
    expect(os.version).toBe(11);
    done();
  });

  test('Android', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.83 Mobile Safari/537.36'
    );
    const os = new (await import('./OS')).OS();
    expect(os.android).toBe(true);
    expect(os.version).toBe(6);
    done();
  });

  test('Blackberry', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (BlackBerry; U; BlackBerry 9320; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.714 Mobile Safari/534.11+'
    );
    const os = new (await import('./OS')).OS();
    expect(os.blackberry).toBe(true);
    expect(os.version).toBe(7.1);
    done();
  });

  test('Firefox on Android', async (done) => {
    setUserAgentString('Mozilla/5.0 (Android; Mobile; rv:26.0) Gecko/26.0 Firefox/26.0');
    const os = new (await import('./OS')).OS();
    expect(os.android).toBe(true);
    expect(os.version).toBe(-1);
    done();
  });

  test('Firefox on Android', async (done) => {
    setUserAgentString('Mozilla/5.0 (Android; Mobile; rv:26.0) Gecko/26.0 Firefox/26.0');
    const os = new (await import('./OS')).OS();
    expect(os.android).toBe(true);
    expect(os.version).toBe(-1);
    done();
  });

  test('No detection', async (done) => {
    setUserAgentString('');
    Object.defineProperty(window.navigator, 'platform', {
      value: '',
      configurable: true
    });
    const os = new (await import('./OS')).OS();
    expect(os.macintosh).toBeUndefined();
    expect(os.windows).toBeUndefined();
    expect(os.linux).toBeUndefined();
    expect(os.android).toBeUndefined();
    expect(os.ios).toBeUndefined();
    expect(os.blackberry).toBeUndefined();
    expect(os.windows_phone).toBeUndefined();
    done();
  });
});
