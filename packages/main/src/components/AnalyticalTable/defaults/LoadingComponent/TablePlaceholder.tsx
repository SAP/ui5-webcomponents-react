import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import React, { CSSProperties, FC, useMemo } from 'react';
import ContentLoader from 'react-content-loader';

const getArrayOfLength = (len) => Array.from(Array(len).keys());

type RowProps = { columns: number; y: number; row: number };
const TableRow: FC<RowProps> = ({ columns, y, row }: RowProps) => {
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

type Props = { columns: number; rows: number; style: CSSProperties; rowHeight: number };
export const TablePlaceholder: FC<Props> = (props: Props) => {
  const { columns = 3, rows = 5, style, rowHeight } = props;

  const height = rows * rowHeight;
  const width = columns * 65;

  const innerStyles = useMemo(() => {
    return {
      backgroundColor: ThemingParameters.sapUiListBackground,
      width: '100%',
      ...style
    };
  }, [style, ThemingParameters.sapUiListBackground]);

  return (
    <ContentLoader
      style={innerStyles}
      height={height}
      width={width}
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
