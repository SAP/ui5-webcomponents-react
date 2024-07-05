import { BusyIndicator, Label } from '@ui5/webcomponents-react';
import type { CommonProps } from '@ui5/webcomponents-react';
import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ComponentType, ReactElement, ReactNode } from 'react';
import { Component, forwardRef } from 'react';
import { ResponsiveContainer } from 'recharts';
// todo: same issue as with Loader import
// import { addCustomCSSWithScoping } from '@ui5/webcomponents-react/dist/internal/addCustomCSSWithScoping.js';
import { addCustomCSSWithScoping } from '../../../main/src/internal/addCustomCSSWithScoping.js';
import { classNames, styleData } from './ChartContainer.module.css.js';

//todo: add feature request for parts or even a fix if this turns out to be a bug
addCustomCSSWithScoping(
  'ui5-busy-indicator',
  `
:host([data-component-name="ChartContainerBusyIndicator"]) .ui5-busy-indicator-busy-area{
    background:unset;
},
:host([data-component-name="ChartContainerBusyIndicator"]) .ui5-busy-indicator-busy-area:focus {
    border-radius: 0;
}
`
);

export interface ContainerProps extends CommonProps {
  children: ReactElement;
  Placeholder?: ComponentType;
  dataset: unknown[];
  loading?: boolean;
  resizeDebounce: number;
}

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
          {loading && (
            <BusyIndicator
              active
              className={classNames.busyIndicator}
              data-component-name="ChartContainerBusyIndicator"
            />
          )}
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
