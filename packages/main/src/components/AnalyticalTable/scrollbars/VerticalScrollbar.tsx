import { ThemingParameters } from '@ui5/webcomponents-react-base';
import clsx from 'clsx';
import React, { forwardRef, Ref, RefObject } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxDirection } from '../../../enums/FlexBoxDirection';
import { GlobalStyleClasses } from '../../../enums/GlobalStyleClasses';
import { FlexBox } from '../../FlexBox';

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
    borderTop: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    borderRight: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    backgroundColor: ThemingParameters.sapList_HeaderBackground
  },
  scrollbar: {
    overflowY: 'auto',
    borderRight: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    boxSizing: 'border-box'
  },
  bottomSection: {
    flexGrow: 1,
    backgroundColor: ThemingParameters.sapList_HeaderBackground,
    boxSizing: 'border-box',
    borderRight: 'none',
    borderBottom: 'none'
  },
  bottomSectionWithScrollbar: {
    borderRight: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`
  }
};

const useStyles = createUseStyles(styles, { name: 'VerticalScrollbar' });

export const VerticalScrollbar = forwardRef((props: VerticalScrollbarProps, ref: Ref<HTMLDivElement>) => {
  const { internalRowHeight, tableRef, minRows, rows, handleVerticalScrollBarScroll, popInRowHeight, tableBodyHeight } =
    props;
  const classes = useStyles();
  const hasHorizontalScrollbar = tableRef?.current?.clientWidth !== tableRef?.current?.scrollWidth;

  const horizontalScrollbarSectionStyles = clsx(
    classes.bottomSection,
    hasHorizontalScrollbar && classes.bottomSectionWithScrollbar
  );

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
            width: '1px'
          }}
        />
      </div>
      <div className={horizontalScrollbarSectionStyles} />
    </FlexBox>
  );
});

VerticalScrollbar.displayName = 'VerticalScrollbar';
