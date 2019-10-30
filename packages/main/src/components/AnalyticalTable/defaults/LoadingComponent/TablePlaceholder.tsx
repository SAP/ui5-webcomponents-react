import React, { CSSProperties, FC, useMemo } from 'react';
import ContentLoader from 'react-content-loader';
import { useTheme } from 'react-jss';
import { JSSTheme } from '../../../../interfaces/JSSTheme';

const getArrayOfLength = (len) => Array.from(Array(len).keys());

const TableRow: FC<{ columns: number; y: number; row: number }> = ({ columns, y, row }) => {
  let columnOffset = 0;
  return (
    <>
      {getArrayOfLength(columns).map((val, i) => {
        const el = (
          <rect key={`row-${row}-column-${i}`} x={columnOffset + 2} y={y} rx="2" ry="8" width="61" height="16" />
        );
        columnOffset += 65;
        return el;
      })}
    </>
  );
};

export const TablePlaceholder: FC<{ columns: number; rows: number; style: CSSProperties; rowHeight: number }> = (
  props
) => {
  const { columns, rows, style, rowHeight } = props;

  const { parameters } = useTheme() as JSSTheme;

  const height = rows * rowHeight;
  const width = columns * 65;

  const innerStyles = useMemo(() => {
    return {
      backgroundColor: parameters.sapUiListBackground,
      width: '100%',
      ...style
    };
  }, [style, parameters.sapUiListBackground]);

  return (
    <ContentLoader
      style={innerStyles}
      height={height}
      width={width}
      speed={2}
      primaryColor={parameters.sapUiContentImagePlaceholderBackground}
      secondaryColor={parameters.sapUiFieldPlaceholderTextColor}
      primaryOpacity={(parameters.sapUiContentDisabledOpacity as undefined) as number}
    >
      {getArrayOfLength(rows).map((_, index) => (
        <TableRow key={index} columns={columns} y={rowHeight * index + rowHeight / 2} row={index} />
      ))}
    </ContentLoader>
  );
};

TablePlaceholder.defaultProps = {
  rows: 5,
  columns: 3
};
