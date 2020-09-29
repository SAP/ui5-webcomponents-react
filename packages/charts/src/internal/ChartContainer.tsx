import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import React, { ComponentType, CSSProperties, FC, forwardRef, ReactElement, Ref, useMemo } from 'react';
import { ResponsiveContainer } from 'recharts';

export interface ContainerProps extends CommonProps {
  children: ReactElement;
  Placeholder?: ComponentType<unknown>;
  dataset: unknown[];
  loading?: boolean;
  resizeDebounce: number;
}

// eslint-disable-next-line no-underscore-dangle
const __testingProps__: any = {};

if (process.env.NODE_ENV === 'test') {
  __testingProps__.width = 400;
  __testingProps__.height = 400;
}

const loaderStyles: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0
};

const chartContainerStyles = {
  '@global': {
    '.has-click-handler': {
      '& .recharts-pie-sector, .recharts-bar-rectangles, .recharts-active-dot, .recharts-area-dot': {
        cursor: 'pointer'
      }
    }
  }
};

const useStyles = createComponentStyles(chartContainerStyles, { name: 'ChartContainer' });

const ChartContainer: FC<ContainerProps> = forwardRef((props: ContainerProps, ref: Ref<any>) => {
  const { Placeholder, loading = false, dataset, style, className, tooltip, slot, children, resizeDebounce } = props;
  useStyles();

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
          {loading && <Loader style={loaderStyles} />}
          {
            <ResponsiveContainer debounce={resizeDebounce} {...__testingProps__}>
              {children}
            </ResponsiveContainer>
          }
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  );
});

ChartContainer.displayName = 'ChartContainer';

export { ChartContainer };
