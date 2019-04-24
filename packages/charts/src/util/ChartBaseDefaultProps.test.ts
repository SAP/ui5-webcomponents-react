import { ChartBaseDefaultProps } from './ChartBaseDefaultProps';

describe('ChartBaseDefaultProps', () => {
  test('Test Default Values', () => {
    expect(ChartBaseDefaultProps.labels).toHaveLength(0);
    expect(ChartBaseDefaultProps.datasets).toHaveLength(0);
    expect(ChartBaseDefaultProps.colors).toHaveLength(0);
    expect(ChartBaseDefaultProps.height).toEqual(300);
    expect(ChartBaseDefaultProps.width).toEqual(300);
    expect(ChartBaseDefaultProps.options).toBeInstanceOf(Object);
    expect(ChartBaseDefaultProps.categoryAxisFormatter(0)).toEqual(0);
    expect(ChartBaseDefaultProps.valueAxisFormatter(0)).toEqual(0);
  });
});
