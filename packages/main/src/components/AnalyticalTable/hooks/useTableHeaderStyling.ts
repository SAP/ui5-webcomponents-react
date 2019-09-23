import { useCallback } from 'react';

export const useTableHeaderStyling = (classes, onColumnSizeChanged, props) =>
  useCallback(
    (instance) => {
      instance.getHeaderProps.push((column) => {
        return {
          className: classes.th,
          onColumnSizeChanged,
          groupable: props.groupable,
          sortable: props.sortable,
          filterable: props.filterable,
          onSort: props.onSort,
          column
        };
      });
      return instance;
    },
    [classes.th, onColumnSizeChanged, props.groupable, props.sortable, props.filterable, props.onSort]
  );
