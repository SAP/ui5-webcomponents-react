import { useCallback, useMemo } from 'react';
import { DataLabel, SecondaryDimensionTicksXAxis, SecondaryDimensionTicksYAxis } from '../internal/CustomElements';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { renderAxisTicks } from '../util/Utils';

export const useDataLabel = (dataLabel, dataLabelCustomElement, dataLabelFormatter, stacked?, bar?) =>
  useMemo(() => {
    return dataLabel
      ? dataLabelCustomElement
        ? (props) => DataLabel(props, dataLabelFormatter, dataLabelCustomElement)
        : {
            position: bar ? (stacked ? 'insideRight' : 'right') : stacked ? 'inside' : 'top',
            content: (props) => dataLabelFormatter(props.value),
            fill: ThemingParameters.sapContent_LabelColor
          }
      : false;
  }, [stacked, bar, dataLabel, dataLabelFormatter, dataLabelCustomElement]);

export const usePieDataLabel = (dataLabel, dataLabelCustomElement, dataLabelFormatter) =>
  useMemo(() => {
    return dataLabel
      ? dataLabelCustomElement
        ? (props) => DataLabel(props, dataLabelFormatter, dataLabelCustomElement)
        : (props): number | string => dataLabelFormatter(props.value)
      : false;
  }, [dataLabelFormatter, dataLabelCustomElement, dataLabel]);

export const useAxisLabel = (AxisFormatter, AxisUnit) => {
  return useCallback(
    (labelProps) => {
      return renderAxisTicks(labelProps, AxisFormatter, AxisUnit);
    },
    [AxisFormatter, AxisUnit]
  );
};

let dimension = '';
export const useSecondaryDimensionLabel = (yAxis?: boolean, yAxisFormatter?) => {
  return useCallback((labelProps) => {
    if (dimension === labelProps.payload.value) {
      return undefined;
    } else {
      dimension = labelProps.payload.value;
      return yAxis
        ? SecondaryDimensionTicksYAxis(labelProps, yAxisFormatter)
        : SecondaryDimensionTicksXAxis(labelProps);
    }
  }, []);
};
