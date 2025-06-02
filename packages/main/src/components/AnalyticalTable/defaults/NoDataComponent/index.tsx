interface NoDataComponentProps {
  noDataText: string;
  className: string;
}

export const DefaultNoDataComponent = ({ noDataText, className }: NoDataComponentProps) => {
  return (
    <div className={className} data-component-name="AnalyticalTableNoData" role="gridcell">
      {noDataText}
    </div>
  );
};

DefaultNoDataComponent.displayName = 'DefaultNoDataComponent';
