import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { makeRenderer } from 'react-table';
import { FlexBox, FlexBoxAlignItems, FlexBoxDirection, FlexBoxWrap, Text } from '@ui5/webcomponents-react';

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
//todo different contentToRender status (grouped, aggegeted, etc), hAlign
export const PopIn = (instance) => {
  const { state, contentToRender, cell, row, internalRowHeight } = instance;
  const classes = useStyles();
  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classes.container}>
      <FlexBox
        alignItems={FlexBoxAlignItems.Start}
        wrap={FlexBoxWrap.NoWrap}
        className={classes.defaultCell}
        style={{
          height: internalRowHeight
        }}
      >
        {cell.render(contentToRender)}
      </FlexBox>
      {state.popInColumns?.map((item) => {
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
        return (
          <FlexBox direction={FlexBoxDirection.Column} key={item.id}>
            {item.column?.Header && <div className={classes.header}>{renderHeader()}:</div>}
            <div style={{ height: internalRowHeight }}>
              {popInInstanceProps &&
                (item.column?.Cell
                  ? makeRenderer({ ...instance, ...popInInstanceProps, isPopIn: true }, item.column)(item.column.Cell)
                  : <Text wrapping={false}>{popInInstanceProps.value}</Text> ?? null)}
            </div>
          </FlexBox>
        );
      })}
    </FlexBox>
  );
};
