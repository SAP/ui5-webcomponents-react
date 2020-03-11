import { useCallback, useMemo } from 'react';
import { DataLabel } from '../internal/CustomElements';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
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
  }, [stacked, dataLabelFormatter, dataLabelCustomElement]);

export const useXAxisLabel = (xAxisFormatter, xAxisUnit) => {
  return useCallback(
    (labelProps) => {
      return renderAxisTicks(labelProps, xAxisFormatter, xAxisUnit);
    },
    [xAxisFormatter, xAxisUnit]
  );
};
