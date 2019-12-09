import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React, { CSSProperties } from 'react';
import { useTheme } from 'react-jss';
import { JSSTheme } from '../../../../interfaces/JSSTheme';

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

  const theme: JSSTheme = useTheme() as JSSTheme;
  const isCompact = theme.contentDensity === 'Compact';

  const getPadding = (level) => {
    switch (level) {
      case 1:
        return 0;
      case 2:
        return isCompact ? '1.5rem' : '1rem';
      case 3:
        return isCompact ? '2.25rem' : '1.5rem';
      case 4:
        return isCompact ? '2.75rem' : '2rem';
      default:
        return `${(isCompact ? 2.75 : 2) + (level - 4) * 0.5}rem`;
    }
  };

  let paddingLeft = null;
  if (row.canExpand) {
    paddingLeft = columnIndex === 0 ? getPadding(row.path.length) : 0;
  } else {
    paddingLeft = columnIndex === 0 ? `calc(${getPadding(row.path.length)} + 2rem)` : 0;
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
