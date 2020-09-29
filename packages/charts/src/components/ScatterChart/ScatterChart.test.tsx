import { render } from '@shared/tests';
import { ScatterChart } from '@ui5/webcomponents-react-charts/lib/ScatterChart';
import * as React from 'react';
import { scatterComplexDataSet } from '../../resources/DemoProps';

describe('Scatter Chart', () => {
  test('Renders with data', () => {
    const utils = render(
      <ScatterChart
        dataset={scatterComplexDataSet}
        style={{ width: '100%' }}
        measures={[
          {
            accessor: 'users',
            label: 'Users',
            axis: 'x'
          },
          {
            accessor: 'sessions',
            label: 'Sessions',
            axis: 'y'
          },
          {
            accessor: 'volume',
            axis: 'z'
          }
        ]}
      />
    );
    expect(utils.asFragment()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = render(<ScatterChart style={{ width: '30%' }} measures={[]} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
