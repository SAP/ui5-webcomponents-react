import { setUserAgentString } from '@shared/tests/utils';

describe('Device - Browser', () => {
  test('Firefox', async (done) => {
    setUserAgentString('Mozilla/5.0 (Windows NT 10.0; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0');
    const browser = new (await import('./Browser')).Browser();
    expect(browser.firefox).toBe(true);
    expect(browser.mobile).toBe(false);
    expect(browser.version).toBe(56);
    done();
  });

  test('Firefox - Mobile', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (Mobile; LYF/F90M/LYF-F90M-000-02-28-130318; Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.0'
    );
    const browser = new (await import('./Browser')).Browser();
    expect(browser.firefox).toBe(true);
    expect(browser.mobile).toBe(true);
    expect(browser.version).toBe(48);
    done();
  });

  test('Chrome', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'
    );
    const browser = new (await import('./Browser')).Browser();
    expect(browser.chrome).toBe(true);
    expect(browser.mobile).toBe(false);
    expect(browser.version).toBe(60);
    done();
  });
  test('Chrome - Mobile', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.83 Mobile Safari/537.36'
    );
    const browser = new (await import('./Browser')).Browser();
    expect(browser.chrome).toBe(true);
    expect(browser.mobile).toBe(true);
    expect(browser.version).toBe(63);
    done();
  });

  test('Firefox for iOS', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4'
    );
    const browser = new (await import('./Browser')).Browser();
    expect(browser.firefox).toBe(true);
    expect(browser.mobile).toBe(true);
    expect(browser.version).toBe(1);
    done();
  });

  test('Android', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (Linux; U; Android 4.0.4; pt-br; MZ608 Build/7.7.1-141-7-FLEM-UMTS-LA) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30'
    );
    const browser = new (await import('./Browser')).Browser();
    expect(browser.android).toBe(true);
    expect(browser.mobile).toBe(false);
    expect(browser.version).toBe(4);
    done();
  });

  test('iOS Safari', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
    );
    const browser = new (await import('./Browser')).Browser();
    expect(browser.safari).toBe(true);
    expect(browser.mobile).toBe(true);
    expect(browser.version).toBe(11);
    done();
  });

  test('iOS Webview', async (done) => {
    setUserAgentString(
      'User-Agent: Mozilla/5.0 (iPad; U; CPU OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile'
    );
    const browser = new (await import('./Browser')).Browser();
    expect(browser.mobile).toBe(true);
    done();
  });

  test('iOS Safari Webview', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B411'
    );
    Object.defineProperty(window.navigator, 'standalone', { value: true, configurable: true });
    const browser = new (await import('./Browser')).Browser();
    expect(browser.safari).toBe(true);
    expect(browser.mobile).toBe(true);
    expect(browser.fullscreen).toBe(true);
    done();
  });

  test('macOS Safari', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8'
    );
    const browser = new (await import('./Browser')).Browser();
    expect(browser.safari).toBe(true);
    expect(browser.mobile).toBe(false);
    expect(browser.version).toBe(10.1);
    done();
  });

  test('IE 7', async (done) => {
    setUserAgentString('Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)');
    const browser = new (await import('./Browser')).Browser();
    expect(browser.msie).toBe(true);
    expect(browser.mobile).toBe(false);
    expect(browser.version).toBe(7);
    done();
  });
  test('IE 8', async (done) => {
    setUserAgentString('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)');
    const browser = new (await import('./Browser')).Browser();
    expect(browser.msie).toBe(true);
    expect(browser.mobile).toBe(false);
    expect(browser.version).toBe(8);
    done();
  });
  test('IE 11', async (done) => {
    setUserAgentString('Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko');
    const browser = new (await import('./Browser')).Browser();
    expect(browser.msie).toBe(true);
    expect(browser.mobile).toBe(false);
    expect(browser.version).toBe(11);
    done();
  });
  test('Microsoft Edge', async (done) => {
    setUserAgentString(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393'
    );
    const browser = new (await import('./Browser')).Browser();
    expect(browser.edge).toBe(true);
    expect(browser.version).toBe(14.14393);
    done();
  });
  test('Unknown Browser', async (done) => {
    setUserAgentString('');
    const browser = new (await import('./Browser')).Browser();
    expect(browser.name).toBe('');
    expect(browser.version).toBe(-1);
    done();
  });
});
