import { renderHook } from '@testing-library/react-hooks';
import { useTooltipFormatter } from './useTooltipFormatter';
import { version as reactVersion } from 'react/package.json';

describe('useTooltipFormatter', () => {
  if (reactVersion === '16.8.0') {
    // not testable with 16.8.0
    return;
  }
  test('should return value when no formatter is present', () => {
    const { result } = renderHook(() => useTooltipFormatter([{ accessor: 'test' }]));

    expect(result.current(100, 'value', { dataKey: 'test' })).toBe(100);
    expect(result.current(100, 'value', { dataKey: 'invalid' })).toBe(100);
  });

  test('should not crash on invalid formatter', () => {
    const { result } = renderHook(() => useTooltipFormatter([{ accessor: 'test', formatter: 'abc' }]));
    expect(result.current(100, 'value', { dataKey: 'test' })).toBe(100);
  });

  test('should format the value with a valid formatter', () => {
    const { result } = renderHook(() => useTooltipFormatter([{ accessor: 'test', formatter: (val) => val / 10 }]));
    expect(result.current(100, 'value', { dataKey: 'test' })).toBe(10);
  });
});
