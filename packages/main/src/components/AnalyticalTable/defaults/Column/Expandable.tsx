import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React, { CSSProperties } from 'react';

const tableGroupExpandCollapseIcon = {
  color: 'var(--sapUiContentIconColor)',
  height: '0.75rem',
  width: '0.75rem',
  padding: '0.625rem',
  display: 'block'
};

export const Expandable = (props) => {
  const { cell, row, column, columns } = props;
  const columnIndex = columns.findIndex((col) => col.id === column.id);

  const getPadding = (level) => {
    switch (level) {
      case 0:
        return 0;
      case 1:
        return CssSizeVariables.sapWcrAnalyticalTableTreePaddingLevel1;
      case 2:
        return CssSizeVariables.sapWcrAnalyticalTableTreePaddingLevel2;
      case 3:
        return CssSizeVariables.sapWcrAnalyticalTableTreePaddingLevel3;
      default:
        return `${CssSizeVariables.sapWcrAnalyticalTableTreePaddingLevel3 + (level - 3) * 0.5}rem`;
    }
  };

  let paddingLeft;
  if (row.canExpand) {
    paddingLeft = columnIndex === 0 ? getPadding(row.depth) : 0;
  } else {
    paddingLeft = columnIndex === 0 ? `calc(${getPadding(row.depth)} + 2rem)` : 0;
  }
  const style: CSSProperties = {
    paddingLeft
  };

  return (
    <>
      {columnIndex === 0 && row.canExpand ? (
        <span {...row.getExpandedToggleProps({ style })}>
          <Icon
            name={`${row.isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'}`}
            style={tableGroupExpandCollapseIcon}
          />
        </span>
      ) : (
        <span style={{ paddingLeft }} />
      )}
      {cell.value && cell.render('Cell')}
    </>
  );
};
