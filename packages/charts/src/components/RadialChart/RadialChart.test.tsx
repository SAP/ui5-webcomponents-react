import { createChartRenderTest, createOnClickChartTest } from '@shared/tests/chartUtils';
import { createCustomPropsTest } from '@shared/tests/utils';
import { RadialChart } from './RadialChart';

const value = 67;

const displayValue = '67%';

describe('RadialChart', () => {
  createChartRenderTest(RadialChart, { value, displayValue });

  createOnClickChartTest(RadialChart, { value, displayValue, noLegend: true });

  createCustomPropsTest(RadialChart, { value, displayValue });
});
