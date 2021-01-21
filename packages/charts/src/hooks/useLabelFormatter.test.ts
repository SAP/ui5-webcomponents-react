import { renderHook } from '@testing-library/react-hooks';
import { useLabelFormatter } from './useLabelFormatter';
import { version as reactVersion } from 'react/package.json';

describe('useLabelFormatter', () => {
  if (reactVersion === '16.8.0') {
    // not testable with 16.8.0
    return;
  }
  test('should return value when no formatter is present', () => {
    const { result } = renderHook(() => useLabelFormatter({ accessor: 'test' }));

    expect(result.current(100)).toBe(100);
  });

  test('should not crash on invalid formatter', () => {
    const { result } = renderHook(() => useLabelFormatter({ accessor: 'test', formatter: 'abc' }));
    expect(result.current(100)).toBe(100);
  });

  test('should format the value with a valid formatter', () => {
    const { result } = renderHook(() => useLabelFormatter({ accessor: 'test', formatter: (val) => val / 10 }));
    expect(result.current(100)).toBe(10);
  });
});
