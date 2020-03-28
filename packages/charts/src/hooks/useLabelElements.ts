import { useCallback, useMemo } from 'react';
import { DataLabel, SecondaryDimensionTicks } from '../internal/CustomElements';
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

export const useAxisLabel = (xAxisFormatter, xAxisUnit) => {
  return useCallback(
    (labelProps) => {
      return renderAxisTicks(labelProps, xAxisFormatter, xAxisUnit);
    },
    [xAxisFormatter, xAxisUnit]
  );
};

const dimensions = [''];
export const useSecondaryDimensionLabel = () => {
  return useCallback((labelProps) => {
    if (dimensions.includes(labelProps.payload.value)) {
      return undefined;
    } else {
      dimensions[0] = labelProps.payload.value;
      return SecondaryDimensionTicks(labelProps);
    }
  }, []);
};
