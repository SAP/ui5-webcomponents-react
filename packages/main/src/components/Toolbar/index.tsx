import React, { createRef, RefObject, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { styles } from './Toolbar.jss';
import ResizeObserver from 'resize-observer-polyfill';
import { OverflowPopover } from './OverflowPopover';

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'Toolbar' });

export function Toolbar(props) {
  const { children, width = '100%' } = props;
  const classes = useStyles(styles);
  const outerContainer = useRef(null);
  const controlMetaData = useRef([]);
  const [lastVisibleIndex, setLastVisibleIndex] = useState(null);
  const [blockerWidth, setBlockerWidth] = useState(0);

  const childrenWithRef = useMemo(() => {
    controlMetaData.current = [];

    // TODO: check if children is a function which needs to be executed first
    return React.Children.toArray(children).map((item, index) => {
      const itemRef: RefObject<HTMLDivElement> = createRef();

      controlMetaData.current.push({
        ref: itemRef
      });

      return (
        <div ref={itemRef} key={index}>
          {item}
        </div>
      );
    });
  }, [children]);

  const calculateVisibleItems = useCallback(() => {
    requestAnimationFrame(() => {
      if (!outerContainer.current) return;
      const availableWidth = outerContainer.current.getBoundingClientRect().width - 18 - 32; // padding + border + overflow button
      let consumedWidth = 0;
      let lastIndex = null;
      let lastFitWidth = 0;

      controlMetaData.current.forEach((item, index) => {
        const currentMeta = controlMetaData.current[index];
        if (currentMeta && currentMeta.ref && currentMeta.ref.current) {
          let nextWidth = currentMeta.ref.current.getBoundingClientRect().width;
          nextWidth += index === 0 || index === controlMetaData.current.length - 1 ? 4 : 8;
          if (consumedWidth + nextWidth <= availableWidth) {
            lastIndex = index;
            lastFitWidth = consumedWidth + nextWidth;
          }
          consumedWidth += nextWidth;
        }
      });

      console.log(availableWidth);
      console.log(lastFitWidth);
      console.log(lastIndex);
      setBlockerWidth(Math.max(0, availableWidth - lastFitWidth + 18 + 32));
      setLastVisibleIndex(lastIndex);
    });
  }, [outerContainer.current, controlMetaData.current, setLastVisibleIndex, childrenWithRef]);

  const renderBlocker = useCallback(() => <div data-toolbar-blocker style={{ width: `${blockerWidth}px` }} />, [
    blockerWidth
  ]);

  const observer = useRef(new ResizeObserver(calculateVisibleItems));

  useEffect(() => {
    if (outerContainer.current) {
      observer.current.observe(outerContainer.current);
    }
    return () => {
      observer.current.disconnect();
    };
  }, [outerContainer.current]);

  useLayoutEffect(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);

  const inlineStyle = useMemo(() => {
    if (width) {
      return { width };
    }
    return {};
  }, [width]);

  const overflowNeeded =
    (lastVisibleIndex || lastVisibleIndex === 0) && React.Children.count(childrenWithRef) !== lastVisibleIndex + 1;

  const renderOverflowPopover = useCallback(() => {
    return (
      <div className={classes.overflowButtonContainer}>
        <OverflowPopover lastVisibleIndex={lastVisibleIndex} contentClass={classes.popoverContent}>
          {children}
        </OverflowPopover>
      </div>
    );
  }, [classes.popoverContent, lastVisibleIndex, children]);

  return (
    <div style={inlineStyle} className={classes.outerContainer} ref={outerContainer}>
      <div className={classes.toolbar}>
        {overflowNeeded &&
          React.Children.map(childrenWithRef, (item, index) => {
            if (index === lastVisibleIndex) {
              return (
                <>
                  {item}
                  {renderBlocker()}
                </>
              );
            }
            return item;
          })}
        {!overflowNeeded && childrenWithRef}
      </div>
      {overflowNeeded && renderOverflowPopover()}
    </div>
  );
}
