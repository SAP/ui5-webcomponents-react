import type { AnalyticalTablePropTypes } from '../../types/index.js';

export const DefaultNoDataComponent: AnalyticalTablePropTypes['NoDataComponent'] = (props) => {
  const { noDataText, className } = props;
  return (
    <div className={className} data-component-name="AnalyticalTableNoData" role="gridcell">
      {noDataText}
    </div>
  );
};

DefaultNoDataComponent.displayName = 'DefaultNoDataComponent';
