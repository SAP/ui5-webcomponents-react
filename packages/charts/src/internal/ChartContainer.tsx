import { type CommonProps, Label, Loader } from '@ui5/webcomponents-react';
import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ComponentType, CSSProperties, ReactElement, ReactNode } from 'react';
import { Component, forwardRef } from 'react';
import { ResponsiveContainer } from 'recharts';
import { classNames, styleData } from './ChartContainer.module.css.js';

export interface ContainerProps extends CommonProps {
  children: ReactElement;
  Placeholder?: ComponentType;
  dataset: unknown[];
  loading?: boolean;
  resizeDebounce: number;
}

const loaderStyles: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0
};

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

  useStylesheet(styleData, ChartContainer.displayName);

  return (
    <div ref={ref} className={clsx(classNames.container, className)} slot={slot} {...rest}>
      {dataset?.length > 0 ? (
        <>
          {loading && <Loader style={loaderStyles} />}
          <ErrorBoundary>
            <ResponsiveContainer debounce={resizeDebounce}>{children}</ResponsiveContainer>
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
