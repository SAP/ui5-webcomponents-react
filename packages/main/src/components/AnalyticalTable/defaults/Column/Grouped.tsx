import iconNavDownArrow from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import iconNavRightArrow from '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';
import type { CSSProperties } from 'react';
import { TextAlign } from '../../../../enums/index.js';
import { Icon } from '../../../../index.js';

const tableGroupExpandCollapseIcon = {
  color: 'var(--sapContent_IconColor)',
  height: '0.75rem',
  width: '0.75rem',
  padding: '0.625rem',
  display: 'block'
};

export const Grouped = (props) => {
  const { cell, row, webComponentsReactProperties } = props;
  const { translatableTexts } = webComponentsReactProperties;

  const style: CSSProperties = {};
  if (cell.column.hAlign && (cell.column.hAlign !== TextAlign.Left || cell.column.hAlign !== TextAlign.Begin)) {
    style.marginRight = 'auto';
  }

  return (
    <>
      <span
        {...row.getToggleRowExpandedProps({ style, column: cell.column })}
        title={row.isExpanded ? translatableTexts.collapseNodeA11yText : translatableTexts.expandNodeA11yText}
      >
        <Icon name={row.isExpanded ? iconNavDownArrow : iconNavRightArrow} style={tableGroupExpandCollapseIcon} />
      </span>
      {cell.render('Cell')}
    </>
  );
};
