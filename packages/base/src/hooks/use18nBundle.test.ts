import { act, renderHook } from '@testing-library/react-hooks';
import { useI18nBundle } from './useI18nBundle';
import { setLanguage, setFetchDefaultLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';
import { version as reactVersion } from 'react/package.json';
import { fetchI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle';

describe('useI18nBundle', () => {
  beforeAll(() => {
    setFetchDefaultLanguage(true);
  });

  afterAll(() => {
    setFetchDefaultLanguage(false);
  });

  test('Should load message bundle and update', async () => {
    if (reactVersion === '16.8.0') {
      // not testable with 16.8.0
      return;
    }

    await fetchI18nBundle('@ui5/webcomponents-react');
    const { result } = renderHook(() => useI18nBundle('@ui5/webcomponents-react'));

    expect(result.current.getText('PLEASE_WAIT')).toBe('Please wait');
  });

  test('Should update after changing the language', async () => {
    if (reactVersion === '16.8.0') {
      // not testable with 16.8.0
      return;
    }
    await fetchI18nBundle('@ui5/webcomponents-react');
    const { result, waitForNextUpdate } = renderHook(() => useI18nBundle('@ui5/webcomponents-react'));
    expect(result.current.getText('PLEASE_WAIT')).toBe('Please wait');

    act(() => {
      setLanguage('de');
    });

    await waitForNextUpdate();
    expect(result.current.getText('PLEASE_WAIT')).toBe('Bitte warten');

    expect(result.all).toHaveLength(2);
  });
});
