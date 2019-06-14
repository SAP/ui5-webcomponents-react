import { fonts, withStyles } from '@fiori-for-react/styles';
import { Event, StyleClassHelper } from '@fiori-for-react/utils';
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
  children: ReactNode | ReactNodeArray;
}

interface ColumnHeaderPropsInternal extends ColumnHeaderProps, ClassProps {
  style?: object;
  toggleSort: () => any;
  sorted: any[];
  column: ColumnType;
  filtered: any[];
  sortable: boolean;
  filterable: boolean;
}

interface ColumnHeaderState {
  modalOpen: boolean;
}

const calcPaddingLeft = (props) => {
  return props.firstColumn ? '1rem !important' : '0.5rem !important';
};

const styles = ({ parameters }: JSSTheme) => ({
  header: {
    borderRight: `1px solid ${parameters.sapUiListBorderColor} !important`,
    paddingLeft: calcPaddingLeft,
    paddingRight: '0.5rem',
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
    const { classes, children, sorted, column, filtered } = this.props as ColumnHeaderPropsInternal;

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

    return (
      <div className={classNames.valueOf()}>
        {children}
        <div className={classes.iconContainer}>
          {filterIcon}
          {sortingIcon}
        </div>
      </div>
    );
  }

  render() {
    const { column, filtered, filterable } = this.props as ColumnHeaderPropsInternal;

    if (!column) return null;

    const filter = filtered.find((c) => c.id === column.id);

    return (
      <ColumnHeaderModal
        openBy={this.openBy}
        showFilter={filterable}
        sortAscending={this.sortAscending}
        sortDescending={this.sortDescending}
        column={column}
        FilterComponent={column.Filter as any}
        filter={filter}
        onFilterChange={this.onFilterChange}
      />
    );
  }
}
