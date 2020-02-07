import { renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { MicroBarChart } from './index';

const dataset = [
  { value: 10, label: 'Bar Number One' },
  { value: 100, label: 'Bar Number Two' }
];

describe('Micro Bar Chart', () => {
  test('Renders with data', () => {
    expect(renderThemedComponent(<MicroBarChart dataset={dataset} />)).toMatchSnapshot();
  });

  test('custom colors', () => {
    expect(renderThemedComponent(<MicroBarChart dataset={dataset} colors={['#f0ab00']} />)).toMatchSnapshot();
  });

  test('element selection', () => {
    expect(renderThemedComponent(<MicroBarChart dataset={dataset} visibleDatasetCount={1} />)).toMatchSnapshot();
  });

  test('maxWidth selection', () => {
    expect(renderThemedComponent(<MicroBarChart dataset={dataset} maxWidth={'200px'} />)).toMatchSnapshot();
  });
});
