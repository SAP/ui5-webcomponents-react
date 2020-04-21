import { useMemo } from 'react';

export const usePrepareDimensionsAndMeasures = <DimensionConfig = any, MeasureConfig = any>(
  rawDimensions,
  rawMeasures,
  dimensionDefaults = {},
  measureDefaults = {}
) => {
  const dimensions: DimensionConfig = useMemo(
    () =>
      rawDimensions.map((label) => ({
        ...dimensionDefaults,
        ...label
      })),
    [rawDimensions, dimensionDefaults]
  );

  const measures: MeasureConfig = useMemo(
    () =>
      rawMeasures.map((value) => ({
        ...measureDefaults,
        ...value
      })),
    [rawMeasures, measureDefaults]
  );

  return { dimensions, measures };
};
