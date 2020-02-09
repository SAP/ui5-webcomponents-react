import { ChartBaseProps } from '../interfaces/ChartBaseProps';

export const ChartBaseDefaultProps: ChartBaseProps = {
  labels: [],
  datasets: [],
  colors: [],
  height: 300,
  minHeight: 300,
  minWidth: 300,
  width: 300,
  options: {},
  categoryAxisFormatter: (d) => d,
  valueAxisFormatter: (d) => d,
  getDatasetAtEvent: (d, e) => {
    // do nothing
  },
  getElementAtEvent: (d, e) => {
    // do nothing
  }
};
