import { act, renderHook } from '@testing-library/react-hooks';
import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { setLanguage, setFetchDefaultLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';
import { version as reactVersion } from 'react/package.json';
import { getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';

describe('useI18nBundle', () => {
  beforeAll(() => {
    setFetchDefaultLanguage(true);
  });

  beforeEach(async () => {
    await setLanguage('en');
  });

  afterAll(() => {
    setFetchDefaultLanguage(false);
  });

  test('Should load message bundle and update', async () => {
    if (reactVersion === '16.8.0') {
      // not testable with 16.8.0
      return;
    }
    const { result, waitForNextUpdate } = renderHook(() => useI18nBundle('@ui5/webcomponents-react'));
    act(() => {
      result.current.getText('PLEASE_WAIT');
    });
    await waitForNextUpdate();
    expect(result.current.getText('PLEASE_WAIT')).toBe('Please wait');
  });

  test('Should update after changing the language', async () => {
    if (reactVersion === '16.8.0') {
      // not testable with 16.8.0
      return;
    }
    await getI18nBundle('@ui5/webcomponents-react');
    const { result, waitForNextUpdate } = renderHook(() => useI18nBundle('@ui5/webcomponents-react'));
    expect(result.current.getText('PLEASE_WAIT')).toBe('Please wait');
    act(() => {
      setLanguage('de');
    });

    await waitForNextUpdate();
    expect(result.current.getText('PLEASE_WAIT')).toBe('Bitte warten');
    act(() => {
      setLanguage('de');
    });
    const shouldNotUpdate = async () => await waitForNextUpdate();
    await expect(shouldNotUpdate).rejects.toMatchInlineSnapshot(
      `[Error: Timed out in waitForNextUpdate after 1000ms.]`
    );
    expect(result.all).toHaveLength(2);
  });

  test('should fill placeholders', async () => {
    if (reactVersion === '16.8.0') {
      // not testable with 16.8.0
      return;
    }
    const { result, waitForNextUpdate } = renderHook(() => useI18nBundle('@ui5/webcomponents-react'));
    expect(result.current.getText('X_OF_Y', 13, 37)).toBe('13 of 37');
  });
});
