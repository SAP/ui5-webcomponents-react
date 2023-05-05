import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { RefObject } from 'react';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxDirection, GlobalStyleClasses } from '../../../enums/index.js';
import { CustomThemingParameters } from '../../../themes/CustomVariables.js';
import { FlexBox } from '../../FlexBox/index.js';

interface VerticalScrollbarProps {
  internalRowHeight: number;
  tableRef: RefObject<any>;
  minRows: number;
  rows: any[];
  handleVerticalScrollBarScroll: any;
  popInRowHeight: number;
  tableBodyHeight: number;
  'data-native-scrollbar'?: any;
}

const styles = {
  headerSection: {
    boxSizing: 'border-box',
    borderBlockStart: CustomThemingParameters.AnalyticalTableOuterBorderBlock,
    borderInlineEnd: CustomThemingParameters.AnalyticalTableOuterBorderInline,
    borderBlockEnd: `${CustomThemingParameters.AnalyticalTableHeaderBorderWidth} solid ${ThemingParameters.sapList_HeaderBorderColor}`,
    backgroundColor: ThemingParameters.sapList_HeaderBackground,
    borderInlineStart: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    marginInlineStart: '-1px'
  },
  scrollbar: {
    overflowY: 'auto',
    borderInlineEnd: CustomThemingParameters.AnalyticalTableOuterBorderInline,
    borderBlockEnd: `1px solid ${ThemingParameters.sapList_TableFooterBorder}`,
    borderInlineStart: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    marginInlineStart: '-1px'
  },
  bottomSection: {
    flexGrow: 1,
    backgroundColor: ThemingParameters.sapList_FooterBackground,
    boxSizing: 'border-box',
    borderInlineEnd: CustomThemingParameters.AnalyticalTableOuterBorderInline
  }
};

const useStyles = createUseStyles(styles, { name: 'VerticalScrollbar' });

export const VerticalScrollbar = forwardRef<HTMLDivElement, VerticalScrollbarProps>((props, ref) => {
  const { internalRowHeight, tableRef, minRows, rows, handleVerticalScrollBarScroll, popInRowHeight, tableBodyHeight } =
    props;
  const classes = useStyles();
  const hasHorizontalScrollbar = tableRef?.current?.offsetWidth !== tableRef?.current?.scrollWidth;

  const horizontalScrollbarSectionStyles = clsx(hasHorizontalScrollbar && classes.bottomSection);

  return (
    <FlexBox
      direction={FlexBoxDirection.Column}
      style={{ position: 'relative' }}
      data-component-name="AnalyticalTableVerticalScrollbarContainer"
    >
      <div
        style={{
          height: `${internalRowHeight}px`
        }}
        className={classes.headerSection}
      />
      <div
        ref={ref}
        style={{
          height: tableRef.current ? `${tableBodyHeight}px` : '0'
        }}
        onScroll={handleVerticalScrollBarScroll}
        data-native-scrollbar={props['data-native-scrollbar']}
        className={`${GlobalStyleClasses.sapScrollBar} ${classes.scrollbar}`}
        data-component-name="AnalyticalTableVerticalScrollbar"
      >
        <div
          style={{
            height: `${Math.max(minRows, rows.length) * popInRowHeight}px`,
            width: '1px',
            backgroundColor: ThemingParameters.sapList_Background
          }}
        />
      </div>
      <div className={horizontalScrollbarSectionStyles} />
    </FlexBox>
  );
});

VerticalScrollbar.displayName = 'VerticalScrollbar';
