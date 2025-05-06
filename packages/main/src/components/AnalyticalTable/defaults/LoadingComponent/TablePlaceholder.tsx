import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, FC } from 'react';
import type { ColumnType } from '../../types/index.js';
import { resolveCellAlignment } from '../../util/index.js';
import { classNames, content } from './TablePlaceholder.module.css.js';

const getArrayOfLength = (len: number) => Array.from(Array(len).keys());

interface TablePlaceholderPropTypes {
  style: CSSProperties;
  columns: ColumnType[];
  rows: number;
  pleaseWaitText: string;
}

export const TablePlaceholder: FC<TablePlaceholderPropTypes> = (props) => {
  const { columns, rows = 5, style, pleaseWaitText } = props;

  useStylesheet(content, TablePlaceholder.displayName);

  return (
    <div role="gridcell">
      <div
        style={style}
        className={classNames.container}
        title={pleaseWaitText}
        role="progressbar"
        aria-valuetext="Busy"
        data-component-name="AnalyticalTableLoadingPlaceholder"
      >
        {getArrayOfLength(rows).map((_, index) => {
          return (
            <div className={classNames.row} key={`row-${index}`}>
              {columns.map((col) => {
                return (
                  <div
                    key={`row${index}-${col.id}`}
                    className={classNames.cellContainer}
                    style={{ width: col.totalWidth, ...resolveCellAlignment(col) }}
                  >
                    <div className={clsx(classNames.cell, classNames.animation)} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

TablePlaceholder.displayName = 'TablePlaceholder';
