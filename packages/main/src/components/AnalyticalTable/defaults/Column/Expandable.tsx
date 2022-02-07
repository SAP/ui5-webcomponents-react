import { CssSizeVariables, Device } from '@ui5/webcomponents-react-base';
import React, { CSSProperties } from 'react';
import { Icon } from '../../../../webComponents/Icon';

const tableGroupExpandCollapseIcon = {
  color: 'var(--sapContent_IconColor)',
  height: '0.75rem',
  width: '0.75rem',
  padding: '0.625rem',
  display: 'block'
};
const isBrowserIe = Device.isIE();
const getPadding = (level) => {
  switch (level) {
    case 0:
      return '0px';
    case 1:
      return isBrowserIe ? '1rem' : CssSizeVariables.sapWcrAnalyticalTableTreePaddingLevel1;
    case 2:
      return isBrowserIe ? '1.5rem' : CssSizeVariables.sapWcrAnalyticalTableTreePaddingLevel2;
    case 3:
      return isBrowserIe ? '2rem' : CssSizeVariables.sapWcrAnalyticalTableTreePaddingLevel3;
    default:
      return isBrowserIe
        ? `calc(2rem + ${level - 3}rem * 0.5)`
        : `calc(${CssSizeVariables.sapWcrAnalyticalTableTreePaddingLevel3} + ${level - 3}rem * 0.5)`;
  }
};

export const Expandable = (props) => {
  const {
    cell,
    row,
    column,
    columns,
    webComponentsReactProperties,
    state: { isRtl }
  } = props;

  const tableColumns = columns.filter(
    ({ id }) =>
      id !== '__ui5wcr__internal_selection_column' &&
      id !== '__ui5wcr__internal_highlight_column' &&
      id !== '__ui5wcr__internal_navigation_column'
  );

  const columnIndex = tableColumns.findIndex((col) => col.id === column.id);
  const paddingRtl = isRtl ? 'paddingRight' : 'paddingLeft';
  let paddingLeft;
  if (row.canExpand) {
    paddingLeft = columnIndex === 0 ? getPadding(row.depth) : 0;
  } else {
    paddingLeft = columnIndex === 0 ? `calc(${getPadding(row.depth)} + 2rem)` : 0;
  }
  const style: CSSProperties = {
    [paddingRtl]: paddingLeft
  };
  const rowProps = row.getToggleRowExpandedProps();

  const subComponentExpandable =
    typeof webComponentsReactProperties?.renderRowSubComponent === 'function' &&
    !!webComponentsReactProperties?.renderRowSubComponent(row) &&
    !webComponentsReactProperties.alwaysShowSubComponent;

  return (
    <>
      {columnIndex === 0 && (row.canExpand || subComponentExpandable) ? (
        <span onClick={rowProps.onClick} title={rowProps.title} style={{ ...rowProps.style, ...style }}>
          <Icon
            interactive
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
