import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';
import { useTheme } from 'react-jss';
import { ContentDensity } from '../../../..';
import { JSSTheme } from '../../../../interfaces/JSSTheme';

const getArrayOfLength = (len) => Array.from(Array(len).keys());

const TableRow: FC<{ columns: number; y: number; row: number; singleRowHeight: number }> = ({ columns, y, row }) => {
  let columnOffset = 0;
  return (
    <>
      {getArrayOfLength(columns).map((val, i) => {
        const el = (
          <rect key={`row-${row}-column-${i}`} x={columnOffset + 2} y={y} rx="3" ry="3" width={61} height="6.4" />
        );
        columnOffset += 65;
        return el;
      })}
    </>
  );
};

export const TablePlaceholder: FC<{ columns: number; rows: number }> = (props) => {
  const { columns, rows } = props;

  const { parameters, contentDensity } = useTheme() as JSSTheme;

  const singleRowHeight = (contentDensity === ContentDensity.Compact ? 2 : 2.75) * 16;

  const height = rows * singleRowHeight;
  const width = columns * 65;

  return (
    <ContentLoader
      style={{ backgroundColor: parameters.sapUiListBackground }}
      height={height}
      width={width}
      speed={2}
      primaryColor={parameters.sapUiContentImagePlaceholderBackground}
      secondaryColor={parameters.sapUiFieldPlaceholderTextColor}
      primaryOpacity={(parameters.sapUiContentDisabledOpacity as undefined) as number}
    >
      {getArrayOfLength(rows).map((_, index) => (
        <TableRow
          key={index}
          columns={columns}
          y={singleRowHeight * (index + 1)}
          row={index}
          singleRowHeight={singleRowHeight}
        />
      ))}
    </ContentLoader>
  );
};

TablePlaceholder.defaultProps = {
  rows: 5,
  columns: 3
};
