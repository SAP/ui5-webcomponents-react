import iconNavDownArrow from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import iconNavRightArrow from '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';
import { CssSizeVariables } from '@ui5/webcomponents-react-base';
import React, { CSSProperties } from 'react';
import { Icon } from '../../../../webComponents';

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
      return '0px';
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
  const {
    cell,
    row,
    column,
    visibleColumns: columns,
    webComponentsReactProperties,
    state: { isRtl }
  } = props;
  const { renderRowSubComponent, alwaysShowSubComponent, translatableTexts } = webComponentsReactProperties;
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
    typeof renderRowSubComponent === 'function' && !!renderRowSubComponent(row) && !alwaysShowSubComponent;

  return (
    <>
      {columnIndex === 0 && (row.canExpand || subComponentExpandable) ? (
        // todo rowProps should be applied to the whole row, not just the cell. We should consider refactoring this.
        <span
          title={row.isExpanded ? translatableTexts.collapseNodeA11yText : translatableTexts.expandNodeA11yText}
          style={{ ...rowProps.style, ...style }}
          aria-expanded={row.isExpanded}
          aria-label={row.isExpanded ? translatableTexts.collapseA11yText : translatableTexts.expandA11yText}
        >
          <Icon
            onClick={rowProps.onClick}
            interactive
            name={row.isExpanded ? iconNavDownArrow : iconNavRightArrow}
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
