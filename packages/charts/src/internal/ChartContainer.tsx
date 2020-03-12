import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import React, { ComponentType, CSSProperties, FC, forwardRef, ReactNode, Ref, useMemo } from 'react';
import { ResponsiveContainer } from 'recharts';
import { ChartContainerProps } from '../interfaces/ChartContainerProps';

export interface ContainerProps extends ChartContainerProps {
  children: ReactNode;
  placeholder?: ComponentType<unknown>;
}

const ChartContainer: FC<ContainerProps> = forwardRef((props: ContainerProps, ref: Ref<any>) => {
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
    const styles: CSSProperties = {};
    styles.fontSize = ThemingParameters.sapUiFontSmallSize;

    if (width) {
      styles.width = width;
    }

    if (height) {
      styles.height = height;
    }

    if (style) {
      Object.assign(styles, style);
    }

    return styles;
  }, [style, width, height]);

  return (
    <div ref={ref} style={internalStyles} className={className} title={tooltip} slot={slot}>
      {dataset ? (
        <>
          {loading && dataset.length > 0 && <Loader style={{ marginBottom: '1vh' }} />}
          {dataset.length > 0 && <ResponsiveContainer>{children}</ResponsiveContainer>}
        </>
      ) : (
        <PlaceholderComponent />
      )}
    </div>
  );
});

ChartContainer.displayName = 'ChartContainer';

export { ChartContainer };
