import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';
import React, { forwardRef, Ref, RefObject } from 'react';
import { createUseStyles } from 'react-jss';

interface VerticalScrollbarProps {
  internalRowHeight: number;
  tableRef: RefObject<any>;
  minRows: number;
  rows: any[];
  handleVerticalScrollBarScroll: any;
  popInRowHeight: number;
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
  const { internalRowHeight, tableRef, minRows, rows, handleVerticalScrollBarScroll, popInRowHeight } = props;
  const classes = useStyles();
  const hasHorizontalScrollbar = tableRef?.current?.clientWidth !== tableRef?.current?.scrollWidth;

  const horizontalScrollbarSectionStyles = StyleClassHelper.of(classes.bottomSection);
  if (hasHorizontalScrollbar) {
    horizontalScrollbarSectionStyles.put(classes.bottomSectionWithScrollbar);
  }

  return (
    <FlexBox direction={FlexBoxDirection.Column} style={{ position: 'relative' }}>
      <div
        style={{
          height: `${internalRowHeight}px`
        }}
        className={classes.headerSection}
      />
      <div
        ref={ref}
        style={{
          height: tableRef.current ? `${tableRef.current.clientHeight - internalRowHeight}px` : '0'
        }}
        onScroll={handleVerticalScrollBarScroll}
        className={`${GlobalStyleClasses.sapScrollBar} ${classes.scrollbar}`}
      >
        <div
          style={{
            height: `${Math.max(minRows, rows.length) * popInRowHeight}px`,
            width: '1px'
          }}
        />
      </div>
      <div className={horizontalScrollbarSectionStyles.valueOf()} />
    </FlexBox>
  );
});

VerticalScrollbar.displayName = 'VerticalScrollbar';
