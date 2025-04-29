import type { Row, RowData } from '@tanstack/react-table';
import { clsx } from 'clsx';
import type { KeyboardEventHandler, MouseEvent, KeyboardEvent, HTMLAttributes } from 'react';
import { classNames } from './../AnalyticalTableV2.module.css.js';

interface SelectionProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'aria-selected' | 'onClick'> {
  /**
   * ENTER press
   */
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  /**
   * SPACE release (default prevented)
   */
  onKeyUp: KeyboardEventHandler<HTMLDivElement>;
}
export interface FeatureRowProps {
  selection: (row: Row<RowData>) => SelectionProps;
}

function selectionHandler(e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>, row: Row<RowData>) {
  if (e.currentTarget.querySelector('[data-selectable-cell]')) {
    //todo: check what is better for our use case
    row.getToggleSelectedHandler()(e);
    // row.toggleSelected()
  }
}

export const rowProps: FeatureRowProps = {
  selection: (row) => {
    const isSelected = row.getIsSelected?.() ?? false;
    return {
      className: clsx(classNames.selectable, isSelected && classNames.selected),
      'aria-selected': `${isSelected}`,
      onClick: (e) => {
        selectionHandler(e, row);
      },
      onKeyDown: (e) => {
        if (e.key === 'Enter') {
          selectionHandler(e, row);
        }
      },
      onKeyUp: (e) => {
        if (e.code === 'Space') {
          selectionHandler(e, row);
          e.preventDefault();
        }
      }
    };
  },
  //todo: remove
  //@ts-expect-error: will be removed
  test: () => ({
    className: 'testClassName',
    onClick: () => console.log('test'),
    onKeyDown: () => console.log('test'),
    onKeyUp: () => console.log('test')
  })
};
