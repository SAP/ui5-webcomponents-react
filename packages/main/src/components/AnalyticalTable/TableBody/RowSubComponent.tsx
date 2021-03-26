import React from 'react';

export const RowSubComponent = (props) => {
  const { subComponentsHeight, virtualRow, dispatch, row, rowHeight, children, rows } = props;

  const setSubcomponentsRefs = (el) => {
    if (
      typeof el?.offsetHeight === 'number' &&
      subComponentsHeight?.[virtualRow.index]?.subComponentHeight !== el?.offsetHeight
    ) {
      if (row.id === '0' && !subComponentsHeight) {
        //take subComponentHeight of first row and use it as initial height for all other rows
        const estimatedHeights = rows.reduce((acc, cur, index) => {
          acc[index] = { subComponentHeight: el?.offsetHeight, rowId: cur.id };
          return acc;
        }, {});
        dispatch({
          type: 'SUB_COMPONENTS_HEIGHT',
          payload: estimatedHeights
        });
      } else {
        dispatch({
          type: 'SUB_COMPONENTS_HEIGHT',
          payload: {
            ...subComponentsHeight,
            [virtualRow.index]: { subComponentHeight: el?.offsetHeight, rowId: row.id }
          }
        });
      }
    }
  };

  return (
    <div
      ref={setSubcomponentsRefs}
      style={{
        transform: `translateY(${rowHeight}px)`,
        position: 'absolute',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};
