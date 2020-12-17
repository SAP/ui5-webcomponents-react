import { act, renderHook } from '@testing-library/react-hooks';
import { useI18nBundle } from './useI18nBundle';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';

describe('useI18nBundle', () => {
  test('Should load message bundle and update', async () => {
    const { result } = renderHook(() => useI18nBundle('@ui5/webcomponents-react'));

    expect(result.current.getText('PLEASE_WAIT')).toBe('Please wait');
  });

  test('Should update after changing the language', async () => {
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
