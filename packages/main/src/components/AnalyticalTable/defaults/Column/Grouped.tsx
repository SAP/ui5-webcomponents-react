import React, { CSSProperties } from 'react';
import { TextAlign } from '../../../../enums/TextAlign';
import { Icon } from '../../../../webComponents/Icon';

const tableGroupExpandCollapseIcon = {
  color: 'var(--sapContent_IconColor)',
  height: '0.75rem',
  width: '0.75rem',
  padding: '0.625rem',
  display: 'block'
};

export const Grouped = (props) => {
  const { cell, row } = props;

  const style: CSSProperties = {};
  if (cell.column.hAlign && (cell.column.hAlign !== TextAlign.Left || cell.column.hAlign !== TextAlign.Begin)) {
    style.marginRight = 'auto';
  }
  return (
    <>
      <span {...row.getToggleRowExpandedProps({ style })}>
        <Icon
          name={`${row.isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'}`}
          style={tableGroupExpandCollapseIcon}
        />
      </span>
      {cell.render('Cell')}
    </>
  );
};
