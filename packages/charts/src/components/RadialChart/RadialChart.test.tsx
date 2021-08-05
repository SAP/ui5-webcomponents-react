import * as React from 'react';
import { RadialChart } from './RadialChart';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { createChartRenderTest, createOnClickChartTest } from '@shared/tests/chartUtils';

const value = 67;

const displayValue = '67%';

describe('RadialChart', () => {
  createChartRenderTest(RadialChart, { value, displayValue });

  createOnClickChartTest(RadialChart, { value, displayValue, noLegend: true });

  createPassThroughPropsTest(RadialChart, { value, displayValue });
});
