import React, { createRef, RefObject, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { styles } from './Toolbar.jss';
import ResizeObserver from 'resize-observer-polyfill';
import { OverflowPopover } from './OverflowPopover';

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'Toolbar' });

export function Toolbar(props) {
  //todo add style, design enum
  const { children, width = '100%', toolbarStyle = 'Standard', design = 'Auto', active = true } = props;
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
  const overflowNeeded =
    (lastVisibleIndex || lastVisibleIndex === 0) && React.Children.count(childrenWithRef) !== lastVisibleIndex + 1;

  const calculateVisibleItems = useCallback(() => {
    requestAnimationFrame(() => {
      if (!outerContainer.current) return;
      const availableWidth = outerContainer.current.getBoundingClientRect().width /*- 32 - 8*/;
      let consumedWidth = 0;
      let lastIndex = null;
      let lastFitWidth = 0;
      controlMetaData.current.forEach((item, index) => {
        const currentMeta = controlMetaData.current[index];
        if (currentMeta && currentMeta.ref && currentMeta.ref.current) {
          let nextWidth = currentMeta.ref.current.getBoundingClientRect().width;
          nextWidth += index === 0 || index === controlMetaData.current.length - 1 ? 4 : 8; //first & last element = padding: 4px
          if (index === controlMetaData.current.length - 1) {
            if (consumedWidth + nextWidth <= availableWidth - 8) {
              lastIndex = index;
              lastFitWidth = consumedWidth + nextWidth;
            }
          } else {
            if (consumedWidth + nextWidth <= availableWidth - 32 - 8) {
              lastIndex = index;
              lastFitWidth = consumedWidth + nextWidth;
            }
            if (consumedWidth < availableWidth - 32 - 8 && consumedWidth + nextWidth >= availableWidth - 32 - 8) {
              lastIndex = index - 1;
              lastFitWidth = 0;
            }
          }
          consumedWidth += nextWidth;
        }
      });

      // console.log('availableWidth', availableWidth);
      // console.log('lastFixedWidth', lastFitWidth);
      // console.log('lastIndex', lastIndex);
      setBlockerWidth(Math.max(0, availableWidth - lastFitWidth));
      setLastVisibleIndex(lastIndex);
    });
  }, [outerContainer.current, controlMetaData.current, setLastVisibleIndex, childrenWithRef, overflowNeeded]);

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

  const renderOverflowPopover = useCallback(() => {
    return (
      <div className={classes.overflowButtonContainer}>
        <OverflowPopover lastVisibleIndex={lastVisibleIndex} contentClass={classes.popoverContent}>
          {children}
        </OverflowPopover>
      </div>
    );
  }, [classes.popoverContent, lastVisibleIndex, children]);

  const getToolbarDesign = () => {
    switch (design) {
      case 'Info':
        return classes.info;
      case 'Solid':
        return classes.solid;
      case 'Transparent':
        return classes.transparent;
      default:
        return '';
    }
  };

  const getActiveDesign = () => {
    if (active) {
      if (design === 'Info') {
        return classes.activeInfo;
      }
      return classes.active;
    }
    return '';
  };

  const toolbarStyleDesign = toolbarStyle === 'Clear' ? classes.clear : '';

  return (
    <div
      style={inlineStyle}
      className={`${classes.outerContainer} ${getToolbarDesign()} ${getActiveDesign()} ${toolbarStyleDesign} `}
      ref={outerContainer}
    >
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
            if (lastVisibleIndex === -1) {
              return (
                <>
                  {renderBlocker()}
                  {item}
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
