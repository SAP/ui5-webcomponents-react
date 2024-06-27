import { useStylesheet } from '@ui5/webcomponents-react-base';
import { makeRenderer } from 'react-table';
import { FlexBoxAlignItems, FlexBoxDirection, FlexBoxWrap } from '../../../../enums/index.js';
import { Text } from '../../../../webComponents/Text/index.js';
import { FlexBox } from '../../../FlexBox/index.js';
import { classNames, styleData } from './PopIn.module.css.js';

export const PopIn = (instance) => {
  const { state, contentToRender, cell, row, internalRowHeight } = instance;

  useStylesheet(styleData, PopIn.displayName);
  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classNames.container}>
      <FlexBox
        alignItems={
          contentToRender !== 'Grouped' && contentToRender !== 'Expandable'
            ? FlexBoxAlignItems.Start
            : FlexBoxAlignItems.Center
        }
        wrap={FlexBoxWrap.NoWrap}
        className={classNames.defaultCell}
        style={{
          height: internalRowHeight
        }}
      >
        {cell.render(contentToRender)}
      </FlexBox>
      {contentToRender !== 'Grouped' &&
        state.popInColumns?.map((item) => {
          const popInInstanceProps = row.allCells.find((cell) => cell.column.id === item.id);
          const renderHeader = () => {
            if (item.column.PopInHeader) {
              return typeof item.column.PopInHeader === 'function'
                ? item.column.PopInHeader({ ...instance, ...popInInstanceProps })
                : item.column.PopInHeader;
            }
            return typeof item.column.Header === 'function'
              ? makeRenderer({ ...instance, ...popInInstanceProps }, item.column)(item.column.Header)
              : item.column.Header;
          };
          const renderCell = () => {
            if (item.column?.Cell) {
              const cell = item.column.Cell;
              if (typeof cell === 'string') {
                return (
                  <Text maxLines={1} title={cell}>
                    {cell}
                  </Text>
                );
              }
              return makeRenderer({ ...instance, ...popInInstanceProps, isPopIn: true }, item.column)(item.column.Cell);
            }
            return popInInstanceProps?.value ? (
              <Text maxLines={1} title={popInInstanceProps.value}>
                {popInInstanceProps.value}
              </Text>
            ) : null;
          };
          return (
            <FlexBox direction={FlexBoxDirection.Column} key={item.id}>
              {item.column?.Header && <div className={classNames.header}>{renderHeader()}:</div>}
              <div style={{ height: internalRowHeight }}>{popInInstanceProps && renderCell()}</div>
            </FlexBox>
          );
        })}
    </FlexBox>
  );
};

PopIn.displayName = 'PopIn';
