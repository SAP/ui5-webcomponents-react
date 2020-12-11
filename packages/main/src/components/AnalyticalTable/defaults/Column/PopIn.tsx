import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { makeRenderer } from 'react-table';
import { FlexBox, FlexBoxAlignItems, FlexBoxDirection, FlexBoxWrap, Text } from '@ui5/webcomponents-react';

const PopInStyles = {
  container: {
    maxWidth: '100%'
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
        const Header =
          typeof item.column.Header === 'function'
            ? makeRenderer({ ...instance, ...popInInstanceProps }, item.column)(item.column.Header)
            : item.column.Header;
        return (
          <FlexBox direction={FlexBoxDirection.Column}>
            {item.column?.Header && <div className={classes.header}>{Header}:</div>}
            <div style={{ height: internalRowHeight }}>
              {popInInstanceProps &&
                (item.column?.Cell
                  ? makeRenderer({ ...instance, ...popInInstanceProps }, item.column)(item.column.Cell)
                  : <Text wrapping={false}>{popInInstanceProps.value}</Text> ?? null)}
            </div>
          </FlexBox>
        );
      })}
    </FlexBox>
  );
};
