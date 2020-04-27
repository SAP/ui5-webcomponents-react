import React, { useCallback } from 'react';
import { SecondaryDimensionTicksXAxis, SecondaryDimensionTicksYAxis } from '../internal/CustomElements';

let dimension = '';
export const useSecondaryDimensionLabel = (yAxis?: boolean, yAxisFormatter?) => {
  return useCallback((labelProps) => {
    if (dimension === labelProps.payload.value) {
      return undefined;
    }
    dimension = labelProps.payload.value;
    return yAxis ? SecondaryDimensionTicksYAxis(labelProps, yAxisFormatter) : SecondaryDimensionTicksXAxis(labelProps);
  }, []);
};
