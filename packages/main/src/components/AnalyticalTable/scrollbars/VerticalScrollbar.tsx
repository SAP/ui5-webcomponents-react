import { ThemingParameters, useStylesheet, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { MutableRefObject, RefObject } from 'react';
import React, { forwardRef, useEffect, useRef } from 'react';
import { FlexBoxDirection, GlobalStyleClasses } from '../../../enums/index.js';
import { FlexBox } from '../../FlexBox/index.js';
import { classNames, styleData } from './VerticalScrollbar.module.css.js';

interface VerticalScrollbarProps {
  internalRowHeight: number;
  tableRef: RefObject<any>;
  handleVerticalScrollBarScroll: any;
  tableBodyHeight: number;
  'data-native-scrollbar'?: any;
  scrollContainerRef: MutableRefObject<HTMLDivElement>;
  parentRef: MutableRefObject<HTMLDivElement>;
}

export const VerticalScrollbar = forwardRef<HTMLDivElement, VerticalScrollbarProps>((props, ref) => {
  const { internalRowHeight, tableRef, handleVerticalScrollBarScroll, tableBodyHeight, scrollContainerRef, parentRef } =
    props;
  const [componentRef, containerRef] = useSyncRef(ref);
  const scrollElementRef = useRef(null);
  useStylesheet(styleData, VerticalScrollbar.displayName);

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
  const horizontalScrollbarSectionStyles = clsx(hasHorizontalScrollbar && classNames.bottomSection);

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
        className={classNames.headerSection}
      />
      <div
        ref={componentRef}
        style={{
          height: tableRef.current ? `${tableBodyHeight}px` : '0'
        }}
        onScroll={handleVerticalScrollBarScroll}
        data-native-scrollbar={props['data-native-scrollbar']}
        className={`${GlobalStyleClasses.sapScrollBar} ${classNames.scrollbar}`}
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
