import { renderHook } from '@testing-library/react-hooks';
import { usePrepareDimensionsAndMeasures } from './usePrepareDimensionsAndMeasures';
import { version as reactVersion } from 'react/package.json';

const dimensions = [
  {
    accessor: 'a'
  }
];

const measures = [
  {
    accessor: 'b'
  }
];

describe('useLabelFormatter', () => {
  if (reactVersion === '16.8.0') {
    // not testable with 16.8.0
    return;
  }
  test('should not throw an error when no defaults are passed', () => {
    const { result } = renderHook(() => usePrepareDimensionsAndMeasures(dimensions, measures));

    expect(result.current.dimensions).toMatchInlineSnapshot(`
      Array [
        Object {
          "accessor": "a",
        },
      ]
    `);
    expect(result.current.measures).toMatchInlineSnapshot(`
      Array [
        Object {
          "accessor": "b",
        },
      ]
    `);
  });

  test('should merge defaults', () => {
    const { result } = renderHook(() =>
      usePrepareDimensionsAndMeasures(dimensions, measures, { dimensionDefault: true }, { measureDefault: true })
    );
    expect(result.current.dimensions).toMatchInlineSnapshot(`
      Array [
        Object {
          "accessor": "a",
          "dimensionDefault": true,
        },
      ]
    `);
    expect(result.current.measures).toMatchInlineSnapshot(`
      Array [
        Object {
          "accessor": "b",
          "measureDefault": true,
        },
      ]
    `);
  });

  test('should merge defaults but not overwrite existing properties', () => {
    const { result } = renderHook(() =>
      usePrepareDimensionsAndMeasures(
        dimensions,
        measures,
        {
          dimensionDefault: true,
          accessor: 'I should not be in the result'
        },
        { measureDefault: true, accessor: 'I should not be in the result' }
      )
    );
    expect(result.current.dimensions).toMatchInlineSnapshot(`
      Array [
        Object {
          "accessor": "a",
          "dimensionDefault": true,
        },
      ]
    `);
    expect(result.current.measures).toMatchInlineSnapshot(`
      Array [
        Object {
          "accessor": "b",
          "measureDefault": true,
        },
      ]
    `);
  });
});
