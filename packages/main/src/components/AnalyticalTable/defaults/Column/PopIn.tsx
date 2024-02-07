import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { makeRenderer } from 'react-table';
import { FlexBoxAlignItems, FlexBoxDirection, FlexBoxWrap } from '../../../../enums/index.js';
import { FlexBox } from '../../../FlexBox/index.js';
import { Text } from '../../../Text/index.js';

const PopInStyles = {
  container: {
    width: '100%'
  },
  defaultCell: {
    fontFamily: `${ThemingParameters.sapFontBoldFamily}`,
    '& *': {
      fontFamily: `${ThemingParameters.sapFontBoldFamily}`
    }
  },
  header: {
    height: '16px'
  }
};

const useStyles = createUseStyles(PopInStyles, { name: 'PopIn' });

export const PopIn = (instance) => {
  const { state, contentToRender, cell, row, internalRowHeight } = instance;

  const classes = useStyles();
  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classes.container}>
      <FlexBox
        alignItems={
          contentToRender !== 'Grouped' && contentToRender !== 'Expandable'
            ? FlexBoxAlignItems.Start
            : FlexBoxAlignItems.Center
        }
        wrap={FlexBoxWrap.NoWrap}
        className={classes.defaultCell}
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
                  <Text wrapping={false} title={cell}>
                    {cell}
                  </Text>
                );
              }
              return makeRenderer({ ...instance, ...popInInstanceProps, isPopIn: true }, item.column)(item.column.Cell);
            }
            return popInInstanceProps?.value ? (
              <Text wrapping={false} title={popInInstanceProps.value}>
                {popInInstanceProps.value}
              </Text>
            ) : null;
          };
          return (
            <FlexBox direction={FlexBoxDirection.Column} key={item.id}>
              {item.column?.Header && <div className={classes.header}>{renderHeader()}:</div>}
              <div style={{ height: internalRowHeight }}>{popInInstanceProps && renderCell()}</div>
            </FlexBox>
          );
        })}
    </FlexBox>
  );
};
