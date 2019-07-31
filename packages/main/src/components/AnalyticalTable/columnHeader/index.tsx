import { Event, fonts, StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { Component, ReactNode, ReactNodeArray } from 'react';
import { ClassProps } from '../../../interfaces/ClassProps';
import { JSSTheme } from '../../../interfaces/JSSTheme';
import { Icon } from '../../../lib/Icon';
import { ColumnType } from '../types/ColumnType';
import { ColumnHeaderModal } from './ColumnHeaderModal';

export interface ColumnHeaderProps {
  firstColumn: boolean;
  defaultSortDesc: boolean;
  onFilteredChange: (event: Event) => void;
  onGroupBy: (strArr: String[]) => void;
  children: ReactNode | ReactNodeArray;
  grouping: string;
}

interface ColumnHeaderPropsInternal extends ColumnHeaderProps, ClassProps {
  style?: object;
  toggleSort: () => any;
  sorted: any[];
  column: ColumnType;
  filtered: any[];
  sortable: boolean;
  filterable: boolean;
  groupable: boolean;
}

interface ColumnHeaderState {
  modalOpen: boolean;
}

const calcPaddingLeft = (props) => {
  return props.firstColumn ? '1rem' : '0.5rem';
};

const styles = ({ parameters }: JSSTheme) => ({
  header: {
    borderRight: `1px solid ${parameters.sapUiListBorderColor} !important`,
    padding: (props) => `0 ${calcPaddingLeft(props)} 0 0.5rem !important`,
    height: '100%',
    display: 'flex',
    justifyContent: 'begin',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiListTextColor,
    background: parameters.sapUiListHeaderBackground
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
  }
});

@withStyles(styles)
export class ColumnHeader extends Component<ColumnHeaderProps, ColumnHeaderState> {
  getCurrentSort() {
    const { sorted, column } = this.props as ColumnHeaderPropsInternal;
    const sort = sorted.find((c) => c.id === column.id);
    return sort ? sort.desc : null;
  }

  doSorting = (condition) => {
    const { toggleSort } = this.props as ColumnHeaderPropsInternal;
    if (condition) {
      toggleSort();
    } else {
      toggleSort();
      setTimeout(toggleSort, 0);
    }
  };

  sortAscending = () => {
    const { defaultSortDesc } = this.props;
    const desc = this.getCurrentSort();
    if (desc !== null) {
      if (!desc) {
        return;
      }
      this.doSorting(desc);
    } else {
      this.doSorting(!defaultSortDesc);
    }
  };

  sortDescending = () => {
    const { defaultSortDesc } = this.props;
    const desc = this.getCurrentSort();
    if (desc !== null) {
      if (desc) {
        return;
      }
      this.doSorting(!desc);
    } else {
      this.doSorting(defaultSortDesc);
    }
  };

  private onFilterChange = (e) => {
    const { column, filtered } = this.props as ColumnHeaderPropsInternal;
    const columnId = column.id;
    const currentFilters = filtered.filter((item) => item.id !== columnId);
    if (e) {
      currentFilters.push({
        id: columnId,
        value: e.getParameter('value')
      });
    }
    this.props.onFilteredChange(Event.of(this, e.getOriginalEvent(), { currentFilters, column }));
  };

  private get openBy() {
    const { classes, children, sorted, column, filtered, grouping } = this.props as ColumnHeaderPropsInternal;

    if (!column) return null;

    const sort = sorted.find((c) => c.id === column.id);
    const filter = filtered.find((c) => c.id === column.id);
    const desc = sort ? sort.desc : null;

    const classNames = StyleClassHelper.of('rt-th', classes.header);

    if (!column.show) {
      classNames.put('-hidden');
    }

    const sortingIcon = sort ? <Icon src={desc ? 'sort-descending' : 'sort-ascending'} /> : null;
    const filterIcon = filter && filter.value ? <Icon src={'filter'} /> : null;
    const groupingIcon = column.id === grouping ? <Icon src={'group-2'} /> : null;

    return (
      <div className={classNames.valueOf()}>
        {children}
        <div className={classes.iconContainer}>
          {filterIcon}
          {sortingIcon}
          {groupingIcon}
        </div>
      </div>
    );
  }

  private onGroupBy = () => {
    const { column } = this.props as ColumnHeaderPropsInternal;
    this.props.grouping !== column.id ? this.props.onGroupBy([column.id]) : this.props.onGroupBy([]);
  };

  render() {
    const { column, filtered, filterable, groupable, sortable, style } = this.props as ColumnHeaderPropsInternal;

    if (!column) return null;

    const filter = filtered.find((c) => c.id === column.id);

    return (
      <>
        {filterable || sortable || groupable ? (
          <ColumnHeaderModal
            openBy={this.openBy}
            showFilter={filterable}
            showGroup={groupable}
            showSort={sortable}
            grouping={this.props.grouping}
            sortAscending={this.sortAscending}
            sortDescending={this.sortDescending}
            column={column}
            FilterComponent={column.Filter as any}
            filter={filter}
            onFilterChange={this.onFilterChange}
            onGroupBy={this.onGroupBy}
            style={style}
          />
        ) : (
          this.openBy
        )}
      </>
    );
  }
}
