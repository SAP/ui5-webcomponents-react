import { makeRenderer } from 'react-table';
import { AnalyticalTablePopinDisplay } from '../../../../enums/AnalyticalTablePopinDisplay.js';
import { FlexBoxAlignItems } from '../../../../enums/FlexBoxAlignItems.js';
import { FlexBoxDirection } from '../../../../enums/FlexBoxDirection.js';
import { FlexBoxWrap } from '../../../../enums/FlexBoxWrap.js';
import { Text } from '../../../../webComponents/Text/index.js';
import { FlexBox } from '../../../FlexBox/index.js';
import type { TableInstance } from '../../types/index.js';
import { RenderColumnTypes } from '../../types/index.js';

export const PopIn = (instance: TableInstance) => {
  const {
    state,
    contentToRender,
    cell,
    row,
    internalRowHeight,
    webComponentsReactProperties: { classes: classNames },
  } = instance;

  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classNames.popInContainer}>
      <FlexBox
        alignItems={
          contentToRender !== RenderColumnTypes.Grouped && contentToRender !== RenderColumnTypes.Expandable
            ? FlexBoxAlignItems.Start
            : FlexBoxAlignItems.Center
        }
        wrap={FlexBoxWrap.NoWrap}
        className={classNames.defaultCell}
        style={{
          height: internalRowHeight,
        }}
      >
        {cell.render(contentToRender)}
      </FlexBox>
      {contentToRender !== RenderColumnTypes.Grouped &&
        state.popInColumns?.map((item) => {
          const { popinDisplay, id, column } = item;
          const popInInstanceProps = row.allCells.find((cell) => cell.column.id === item.id);
          const renderHeader = () => {
            if (column.PopInHeader) {
              return typeof column.PopInHeader === 'function'
                ? column.PopInHeader({ ...instance, ...popInInstanceProps })
                : column.PopInHeader;
            }
            return typeof column.Header === 'function'
              ? makeRenderer({ ...instance, ...popInInstanceProps }, column)(column.Header)
              : column.Header;
          };
          const renderCell = () => {
            if (column?.Cell) {
              const cell = column.Cell;
              if (typeof cell === 'string') {
                return (
                  <Text maxLines={1} title={cell}>
                    {cell}
                  </Text>
                );
              }
              return makeRenderer({ ...instance, ...popInInstanceProps, isPopIn: true }, column)(column.Cell);
            }
            return popInInstanceProps?.value ? (
              <Text maxLines={1} title={popInInstanceProps.value}>
                {popInInstanceProps.value}
              </Text>
            ) : null;
          };
          return (
            <FlexBox
              direction={
                popinDisplay === AnalyticalTablePopinDisplay.Inline ? FlexBoxDirection.Row : FlexBoxDirection.Column
              }
              className={popinDisplay === AnalyticalTablePopinDisplay.Inline ? classNames.gap : undefined}
              key={id}
            >
              {popinDisplay !== AnalyticalTablePopinDisplay.WithoutHeader && column?.Header && (
                <div className={classNames.popInHeader} data-component-name="AnalyticalTablePopinHeaderContainer">
                  {renderHeader()}:
                </div>
              )}
              <div style={{ height: internalRowHeight }}>{popInInstanceProps && renderCell()}</div>
            </FlexBox>
          );
        })}
    </FlexBox>
  );
};

PopIn.displayName = 'PopIn';
