import { ThemingParameters, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { MutableRefObject, RefObject } from 'react';
import { forwardRef, useEffect, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxDirection, GlobalStyleClasses } from '../../../enums/index.js';
import { CustomThemingParameters } from '../../../themes/CustomVariables.js';
import { FlexBox } from '../../FlexBox/index.js';

interface VerticalScrollbarProps {
  internalRowHeight: number;
  tableRef: RefObject<any>;
  handleVerticalScrollBarScroll: any;
  tableBodyHeight: number;
  'data-native-scrollbar'?: any;
  scrollContainerRef: MutableRefObject<HTMLDivElement>;
  parentRef: MutableRefObject<HTMLDivElement>;
}

const styles = {
  headerSection: {
    boxSizing: 'border-box',
    borderBlockStart: CustomThemingParameters.AnalyticalTableOuterBorderBlock,
    borderInlineEnd: CustomThemingParameters.AnalyticalTableOuterBorderInline,
    borderBlockEnd: `${CustomThemingParameters.AnalyticalTableHeaderBorderWidth} solid ${ThemingParameters.sapList_HeaderBorderColor}`,
    backgroundColor: ThemingParameters.sapList_HeaderBackground,
    borderInlineStart: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    marginInlineStart: '-1px',
    width: `calc(${ThemingParameters.sapScrollBar_Dimension} + 2px)`
  },
  scrollbar: {
    overflowY: 'auto',
    borderInlineEnd: CustomThemingParameters.AnalyticalTableOuterBorderInline,
    borderBlockEnd: `1px solid ${ThemingParameters.sapList_TableFooterBorder}`,
    borderInlineStart: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    marginInlineStart: '-1px',
    boxSizing: 'border-box'
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
  const { internalRowHeight, tableRef, handleVerticalScrollBarScroll, tableBodyHeight, scrollContainerRef, parentRef } =
    props;
  const [componentRef, containerRef] = useSyncRef(ref);
  const scrollElementRef = useRef(null);
  const classes = useStyles();

  const hasHorizontalScrollbar = tableRef?.current?.offsetWidth !== tableRef?.current?.scrollWidth;

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      if (containerRef.current && parentRef.current && entry.target.getBoundingClientRect().height > 0) {
        containerRef.current.scrollTop = parentRef.current.scrollTop;
      }
    });
    if (scrollElementRef.current) {
      observer.observe(scrollElementRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
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
        ref={componentRef}
        style={{
          height: tableRef.current ? `${tableBodyHeight}px` : '0'
        }}
        onScroll={handleVerticalScrollBarScroll}
        data-native-scrollbar={props['data-native-scrollbar']}
        className={`${GlobalStyleClasses.sapScrollBar} ${classes.scrollbar}`}
        data-component-name="AnalyticalTableVerticalScrollbar"
      >
        <div
          ref={scrollElementRef}
          style={{
            height: `${scrollContainerRef.current?.scrollHeight}px`,
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
