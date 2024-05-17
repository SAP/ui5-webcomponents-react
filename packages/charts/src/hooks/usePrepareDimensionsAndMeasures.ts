import { useMemo } from 'react';

function getAccessorReactKey(accessorObj: Record<string, any>) {
  let reactKey = accessorObj.accessor;
  if (typeof accessorObj.accessor === 'function') {
    reactKey = JSON.stringify(accessorObj);
  }
  return reactKey;
}

export const usePrepareDimensionsAndMeasures = <DimensionConfig = any, MeasureConfig = any>(
  rawDimensions,
  rawMeasures,
  dimensionDefaults = {},
  measureDefaults = {}
) => {
  const dimensions: DimensionConfig = useMemo(
    () =>
      rawDimensions.map((dimension) => {
        return {
          ...dimensionDefaults,
          ...dimension,
          reactKey: getAccessorReactKey(dimension)
        };
      }),
    [rawDimensions, dimensionDefaults]
  );

  const measures: MeasureConfig = useMemo(
    () =>
      rawMeasures.map((measure) => {
        return {
          ...measureDefaults,
          ...measure,
          reactKey: getAccessorReactKey(measure)
        };
      }),
    [rawMeasures, measureDefaults]
  );

  return { dimensions, measures };
};
