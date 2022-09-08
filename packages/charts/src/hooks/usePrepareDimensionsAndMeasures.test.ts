import { renderHook } from '@testing-library/react-hooks';
import { usePrepareDimensionsAndMeasures } from './usePrepareDimensionsAndMeasures';

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
  test('should not throw an error when no defaults are passed', () => {
    const { result } = renderHook(() => usePrepareDimensionsAndMeasures(dimensions, measures));

    expect(result.current.dimensions).toMatchInlineSnapshot(`
      [
        {
          "accessor": "a",
        },
      ]
    `);
    expect(result.current.measures).toMatchInlineSnapshot(`
      [
        {
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
      [
        {
          "accessor": "a",
          "dimensionDefault": true,
        },
      ]
    `);
    expect(result.current.measures).toMatchInlineSnapshot(`
      [
        {
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
      [
        {
          "accessor": "a",
          "dimensionDefault": true,
        },
      ]
    `);
    expect(result.current.measures).toMatchInlineSnapshot(`
      [
        {
          "accessor": "b",
          "measureDefault": true,
        },
      ]
    `);
  });
});
