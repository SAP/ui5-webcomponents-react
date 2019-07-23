import { Optional } from '@ui5/webcomponents-react-base';

const getSymbolForDataset = (type, dataset) => {
  const datasetMeta: any = dataset.hasOwnProperty('_meta') ? Object.values(dataset._meta)[0] : null;
  const elementType = Optional.of(datasetMeta, 'type').orElse(type);
  switch (elementType) {
    case 'line':
      return `
        <div style="width: 5px; height: 2px; background-color: ${dataset.backgroundColor}; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-right: 2px"></div>
        <div style="width: 10px; height: 10px; background-color: ${dataset.backgroundColor}; border-radius: 50%;"></div>
        <div style="width: 5px; height: 2px; background-color: ${dataset.backgroundColor}; border-top-right-radius: 2px; border-bottom-right-radius: 2px; margin-left: 2px; margin-right: 8px"></div>
      `;
    default:
      return `<div style="width: 14px; height: 14px; border-radius: 2px; background-color: ${dataset.backgroundColor}; margin-right: 8px"></div>`;
  }
};

const getLegendEntry = (dataset, type, index) => {
  const symbol = getSymbolForDataset(type, dataset);

  return `<li style="display: flex; align-items: center; margin-right: 24px; margin-bottom: 1rem; cursor:pointer;" data-datasetindex="${index}">
${symbol}
<span style="font-size: 12px; color: #32363a; font-family: '72', Arial, Helvetica, sans-serif; user-select: none">${dataset.label}</span>
</li>`;
};

export const generateLegend = (chart) => {
  const { datasets } = chart.config.data;
  const type = chart.config.type;

  let itemsForLegend = datasets;
  if (['pie', 'doughnut'].includes(type)) {
    let pieDataSet = Object.values(datasets[0]._meta)[0] as any;
    itemsForLegend = pieDataSet.data.map((meta) => meta._model);
  }
  return `<div style="display: flex; flex-wrap: wrap; padding: 0 1rem; box-sizing: border-box">
${itemsForLegend.map((item, index) => getLegendEntry(item, type, index)).join(' ')}
</div>`;
};
