import { ThemingParameters, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, FC } from 'react';
import { resolveCellAlignment } from '../../util/index.js';
import { classNames, styleData } from './TablePlaceholder.module.css.js';

const getArrayOfLength = (len) => Array.from(Array(len).keys());

interface TablePlaceholderPropTypes {
  columns: any[];
  rows: number;
  style: CSSProperties;
}

export const TablePlaceholder: FC<TablePlaceholderPropTypes> = (props) => {
  const { columns, rows = 5, style } = props;

  useStylesheet(styleData, TablePlaceholder.displayName);

  return (
    <div
      style={{
        backgroundColor: ThemingParameters.sapList_Background,
        width: '100%',
        ...style
      }}
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
  );
};

TablePlaceholder.displayName = 'TablePlaceholder';
