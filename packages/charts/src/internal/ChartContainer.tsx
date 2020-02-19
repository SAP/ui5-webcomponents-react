import React, { ComponentType, forwardRef, ReactNode, Ref } from 'react';
import { ChartContainerProps } from '../interfaces/ChartContainerProps';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import { ResponsiveContainer } from 'recharts';

export interface ContainerProps extends ChartContainerProps {
  children: ReactNode;
  placeholder?: ComponentType<unknown>;
}

const ChartContainer = forwardRef((props: ContainerProps, ref: Ref<any>) => {
  const { height, width, placeholder: PlaceholderComponent, loading = false, dataset } = props;

  return (
    <div>
      {dataset ? (
        <div style={{ width, height }}>
          {loading && dataset.length > 0 && <Loader style={{ marginBottom: '1vh' }} />}
          {dataset.length > 0 && <ResponsiveContainer>{props['children']}</ResponsiveContainer>}
        </div>
      ) : (
        <div style={{ width, height }}>
          <PlaceholderComponent />
        </div>
      )}
    </div>
  );
});

export { ChartContainer };
