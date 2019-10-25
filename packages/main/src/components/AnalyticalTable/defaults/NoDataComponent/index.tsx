import React from 'react';

// const style = {
//   width: '100%',
//   position: 'absolute',
//   textAlign: 'center',
//   marginTop: '1rem'
// };

export const DefaultNoDataComponent = ({ noDataText, className, style }) => {
  return (
    <div className={className} style={style}>
      {noDataText}
    </div>
  );
};
