import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React, { CSSProperties } from 'react';

const tableGroupExpandCollapseIcon = {
  color: 'var(--sapContent_IconColor)',
  height: '0.75rem',
  width: '0.75rem',
  padding: '0.625rem',
  display: 'block'
};

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
      return `calc(${CssSizeVariables.sapWcrAnalyticalTableTreePaddingLevel3} + ${level - 3}rem * 0.5)`;
  }
};

export const Expandable = (props) => {
  const { cell, row, column, columns, webComponentsReactProperties } = props;

  const tableColumns = columns.filter(
    ({ id }) =>
      id !== '__ui5wcr__internal_selection_column' &&
      id !== '__ui5wcr__internal_highlight_column' &&
      id !== '__ui5wcr__internal_navigation_column'
  );

  const columnIndex = tableColumns.findIndex((col) => col.id === column.id);

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
      {columnIndex === 0 && (row.canExpand || !!webComponentsReactProperties.renderRowSubComponent) ? (
        <span {...row.getToggleRowExpandedProps({ style })}>
          <Icon
            name={`${row.isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'}`}
            style={tableGroupExpandCollapseIcon}
          />
        </span>
      ) : (
        <span style={style} />
      )}
      {cell.render('Cell')}
    </>
  );
};
