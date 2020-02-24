import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import React, { ComponentType, forwardRef, ReactNode, Ref, useMemo } from 'react';
import { ResponsiveContainer } from 'recharts';
import { ChartContainerProps } from '../interfaces/ChartContainerProps';

export interface ContainerProps extends ChartContainerProps {
  children: ReactNode;
  placeholder?: ComponentType<unknown>;
}

const ChartContainer = forwardRef((props: ContainerProps, ref: Ref<any>) => {
  const {
    height,
    width,
    placeholder: PlaceholderComponent,
    loading = false,
    dataset,
    style,
    className,
    tooltip,
    slot,
    children
  } = props;

  const internalStyles = useMemo(() => {
    if (!style) {
      return { fontSize: ThemingParameters.sapUiFontSmallSize };
    }
    return {
      fontSize: ThemingParameters.sapUiFontSmallSize,
      ...style
    };
  }, [style]);

  return (
    <div ref={ref} style={internalStyles} className={className} title={tooltip} slot={slot}>
      {dataset ? (
        <div style={{ width, height }}>
          {loading && dataset.length > 0 && <Loader style={{ marginBottom: '1vh' }} />}
          {dataset.length > 0 && <ResponsiveContainer>{children}</ResponsiveContainer>}
        </div>
      ) : (
        <div style={{ width, height }}>
          <PlaceholderComponent />
        </div>
      )}
    </div>
  );
});

ChartContainer.displayName = 'ChartContainer';

export { ChartContainer };
