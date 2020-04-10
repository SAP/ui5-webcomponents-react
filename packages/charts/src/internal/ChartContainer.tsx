import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
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

  const internalStyles: CSSProperties = useMemo(() => {
    return {
      fontSize: ThemingParameters.sapFontSmallSize,
      width: '100%',
      height: '400px',
      ...(style ?? {})
    };
  }, [style, width, height]);

  return (
    <div ref={ref} style={internalStyles} className={className} title={tooltip} slot={slot}>
      {dataset?.length > 0 ? (
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
