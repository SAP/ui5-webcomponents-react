import { type CommonProps, Label, Loader } from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ComponentType, CSSProperties, ReactElement, ReactNode } from 'react';
import { Component, forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { ResponsiveContainer } from 'recharts';

export interface ContainerProps extends CommonProps {
  children: ReactElement;
  Placeholder?: ComponentType;
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
  container: {
    fontSize: ThemingParameters.sapFontSmallSize,
    color: ThemingParameters.sapTextColor,
    fontFamily: ThemingParameters.sapFontFamily,
    width: '100%',
    height: '400px',
    position: 'relative'
  },
  '@global': {
    '.has-click-handler': {
      '& .recharts-pie-sector, .recharts-bar-rectangles, .recharts-active-dot, .recharts-area-dot': {
        cursor: 'pointer'
      }
    }
  }
};

const useStyles = createUseStyles(chartContainerStyles, { name: 'ChartContainer' });

class ErrorBoundary extends Component<{ children: ReactNode }, { errorCount: number }> {
  state = {
    errorCount: 0
  };

  componentDidCatch() {
    if (this.state.errorCount < 3) {
      this.setState((old) => ({ ...old, errorCount: old.errorCount + 1 }));
    }
  }

  render() {
    if (this.state.errorCount >= 3) {
      return <Label>Sorry, something went wrong while rendering this chart!</Label>;
    }
    return this.props.children;
  }
}

const ChartContainer = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { Placeholder, loading = false, dataset, className, slot, children, resizeDebounce, ...rest } = props;
  const classes = useStyles();

  return (
    <div ref={ref} className={clsx(classes.container, className)} slot={slot} {...rest}>
      {dataset?.length > 0 ? (
        <>
          {loading && <Loader style={loaderStyles} />}
          <ErrorBoundary>
            <ResponsiveContainer debounce={resizeDebounce} {...__testingProps__}>
              {children}
            </ResponsiveContainer>
          </ErrorBoundary>
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  );
});

ChartContainer.displayName = 'ChartContainer';

export { ChartContainer };
