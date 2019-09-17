import { Event, fonts, StyleClassHelper } from '@ui5/webcomponents-react-base';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React, { CSSProperties, FC, ReactNode, ReactNodeArray, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { JSSTheme } from '../../../interfaces/JSSTheme';
import { Resizer } from '../Resizer';
import { ColumnType } from '../types/ColumnType';
import { ColumnHeaderModal } from './ColumnHeaderModal';

export interface ColumnHeaderProps {
  defaultSortDesc: boolean;
  onFilteredChange: (event: Event) => void;
  onGroupBy: (strArr: string[]) => void;
  children: ReactNode | ReactNodeArray;
  grouping: string;
  className: string;
  column: ColumnType;
  style: CSSProperties;
  groupable: boolean;
  sortable: boolean;
  filterable: boolean;
  sticky?: boolean;
  isLastColumn?: boolean;
}

const styles = ({ parameters }: JSSTheme) => ({
  header: {
    padding: `0 0.5rem`,
    height: '100%',
    display: 'flex',
    justifyContent: 'begin',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiListTextColor,
    background: parameters.sapUiListHeaderBackground,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%'
  },
  iconContainer: {
    display: 'inline-block',
    position: 'absolute',
    color: parameters.sapUiContentIconColor,
    right: '0',
    marginRight: '0.5rem',
    '& :last-child': {
      marginLeft: '0.25rem'
    }
  },
  sticky: {
    position: 'sticky',
    top: 0
  }
});

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles);

export const ColumnHeader: FC<ColumnHeaderProps> = (props) => {
  const classes = useStyles(props);

  const { children, column, className, style, groupable, sortable, filterable, sticky, isLastColumn } = props;

  const openBy = useMemo(() => {
    if (!column) return null;

    const isFiltered = column.filterValue && column.filterValue.length > 0;
    const desc = column.isSortedDesc;

    const classNames = StyleClassHelper.of(classes.header);

    const sortingIcon = column.isSorted ? <Icon src={desc ? 'sort-descending' : 'sort-ascending'} /> : null;
    const filterIcon = isFiltered ? <Icon src="sap-icon://filter" /> : null;
    const groupingIcon = column.isGrouped ? <Icon src="sap-icon://group-2" /> : null;

    return (
      <div className={classNames.valueOf()}>
        <span style={{ textOverflow: 'ellipsis', overflowX: 'hidden', whiteSpace: 'nowrap' }}>{children}</span>
        <div className={classes.iconContainer}>
          {filterIcon}
          {sortingIcon}
          {groupingIcon}
        </div>
      </div>
    );
  }, [classes, column.filterValue, column.isSorted, column.isGrouped, column.isSortedDesc, children]);

  const innerStyle = { ...style };
  innerStyle.width = '100%';
  innerStyle.fontWeight = 'normal';
  innerStyle.cursor = 'pointer';
  innerStyle.height = '100%';
  innerStyle.overflowX = 'hidden';

  if (!column) return null;

  const isResizable = !isLastColumn && column.canResize;
  if (isResizable) {
    innerStyle.maxWidth = `calc(100% - 16px)`;
  }

  let thClasses = className;
  if (sticky) {
    thClasses = `${thClasses} ${classes.sticky}`;
  }

  return (
    <th className={thClasses} style={style}>
      {groupable || sortable || filterable ? (
        <ColumnHeaderModal
          openBy={openBy}
          showFilter={filterable}
          showGroup={groupable}
          showSort={sortable}
          column={column}
          style={innerStyle}
        />
      ) : (
        openBy
      )}
      {isResizable && <Resizer {...props} />}
    </th>
  );
};
