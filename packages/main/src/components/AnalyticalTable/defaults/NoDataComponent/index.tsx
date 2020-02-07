import React from 'react';

export const DefaultNoDataComponent = ({ noDataText, className, style }) => {
  return (
    <div className={className} style={style}>
      {noDataText}
    </div>
  );
};
