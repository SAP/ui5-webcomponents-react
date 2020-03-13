import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import React, { CSSProperties, FC, useMemo } from 'react';
import ContentLoader from 'react-content-loader';

const getArrayOfLength = (len) => Array.from(Array(len).keys());

type RowProps = { columns: any[]; y: number; row: number };
const TableRow: FC<RowProps> = ({ columns, y, row }: RowProps) => {
  let columnOffset = 0;
  return (
    <>
      {columns.map((column, i) => {
        const el = (
          <rect
            key={`column-${i}-row-${row}`}
            x={columnOffset + 2}
            y={y}
            rx="2"
            ry="8"
            width={column.width - 4}
            height="16"
          />
        );
        columnOffset += column.width;
        return el;
      })}
    </>
  );
};

type Props = { columns: any[]; rows: number; style: CSSProperties; rowHeight: number; tableWidth: number };
export const TablePlaceholder: FC<Props> = (props: Props) => {
  const { columns, rows = 5, style, rowHeight, tableWidth } = props;

  const height = rows * rowHeight;

  const innerStyles = useMemo(() => {
    return {
      backgroundColor: ThemingParameters.sapUiListBackground,
      ...style
    };
  }, [style, ThemingParameters.sapUiListBackground]);

  return (
    <ContentLoader
      style={innerStyles}
      height={height}
      width={tableWidth}
      speed={2}
      backgroundColor={ThemingParameters.sapContent_ImagePlaceholderBackground}
      foregroundColor={ThemingParameters.sapContent_ImagePlaceholderForegroundColor}
      backgroundOpacity={ThemingParameters.sapContent_DisabledOpacity as any}
    >
      {getArrayOfLength(rows).map((_, index) => (
        <TableRow key={index} columns={columns} y={rowHeight * index + rowHeight / 2} row={index} />
      ))}
    </ContentLoader>
  );
};
