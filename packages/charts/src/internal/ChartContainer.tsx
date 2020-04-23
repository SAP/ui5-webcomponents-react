import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import React, { ComponentType, CSSProperties, FC, forwardRef, ReactNode, Ref, useMemo } from 'react';
import { ResponsiveContainer } from 'recharts';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';

export interface ContainerProps extends CommonProps {
  children: ReactNode;
  Placeholder?: ComponentType<unknown>;
  dataset: unknown[];
  loading?: boolean;
}

const loaderStyles: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0
};

const ChartContainer: FC<ContainerProps> = forwardRef((props: ContainerProps, ref: Ref<any>) => {
  const { Placeholder, loading = false, dataset, style, className, tooltip, slot, children } = props;

  const internalStyles: CSSProperties = useMemo(() => {
    return {
      fontSize: ThemingParameters.sapFontSmallSize,
      color: ThemingParameters.sapTextColor,
      fontFamily: ThemingParameters.sapFontFamily,
      width: '100%',
      height: '400px',
      position: 'relative',
      ...(style ?? {})
    };
  }, [style]);

  return (
    <div ref={ref} style={internalStyles} className={className} title={tooltip} slot={slot}>
      {dataset?.length > 0 ? (
        <>
          {loading && dataset.length > 0 && <Loader style={loaderStyles} />}
          {dataset.length > 0 && <ResponsiveContainer>{children}</ResponsiveContainer>}
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  );
});

ChartContainer.displayName = 'ChartContainer';

export { ChartContainer };
