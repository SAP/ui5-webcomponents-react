import { ChartBaseProps } from '../interfaces/ChartBaseProps';

export const ChartBaseDefaultProps: ChartBaseProps = {
  labels: [],
  datasets: [],
  colors: [],
  height: 300,
  width: 300,
  options: {},
  categoryAxisFormatter: (d) => d,
  valueAxisFormatter: (d) => d,
  getDatasetAtEvent: (d, e) => {},
  getElementAtEvent: (d, e) => {}
};
