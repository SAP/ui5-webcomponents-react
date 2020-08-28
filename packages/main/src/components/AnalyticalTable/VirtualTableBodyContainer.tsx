import { StyleClassHelper, ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { useEffect, useRef, useState } from 'react';
import { GlobalStyleClasses } from '../..';

export const VirtualTableBodyContainer = (props) => {
  const { tableBodyHeight, totalColumnsWidth, children, parentRef, onScroll, isScrolling, classes } = props;
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (parentRef.current) {
      setIsMounted(true);
    }
  }, [parentRef.current]);

  //todo
  const classNames = StyleClassHelper.of(classes.tbody, GlobalStyleClasses.sapScrollBar);

  return (
    <div
      className={classes.tbody}
      ref={parentRef}
      //todo
      // onScroll={onScroll}
      style={{
        position: 'relative',
        overflowY: 'auto',
        pointerEvents: isScrolling ? 'none' : 'auto',
        height: `${tableBodyHeight}px`,
        width: `${totalColumnsWidth}px`
      }}
    >
      {isMounted && children}
    </div>
  );
};
