import { useMemo } from 'react';

export const usePrepareDimensionsAndMeasures = (
  rawDimensions,
  rawMeasures,
  dimensionDefaults = {},
  measureDefaults = {}
) => {
  const dimensions = useMemo(
    () =>
      rawDimensions.map((label) => ({
        ...dimensionDefaults,
        ...label
      })),
    [rawDimensions, dimensionDefaults]
  );

  const measures = useMemo(
    () =>
      rawMeasures.map((value) => ({
        ...measureDefaults,
        ...value
      })),
    [rawMeasures, measureDefaults]
  );

  return { dimensions, measures };
};
