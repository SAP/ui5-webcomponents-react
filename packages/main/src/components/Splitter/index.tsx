import { useConsolidatedRef } from '@ui5/webcomponents-react-base/hooks/useConsolidatedRef';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import React, { forwardRef, Ref, useCallback, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { styles } from '../SplitterLayout/SplitterLayout.jss';

const useStyles = createUseStyles(styles, { name: 'SplitterLayout' });

export interface SplitterPropTypes {
  height: string | number;
  width: string | number;
  position: string;
  orientation: 'horizontal' | 'vertical';
}

const isTouchEvent = (e, touchEvent) => {
  if (e.type === touchEvent) {
    return !(e.touches && e.touches.length > 1);
  }
  return false;
};

const Splitter = forwardRef((props: SplitterPropTypes, ref: Ref<HTMLDivElement>) => {
  const { orientation, position } = props;
  const classes = useStyles(props);
  const splitterRef = useConsolidatedRef<HTMLDivElement>(ref);
  const startX = useRef(null);

  const [splitterPosition, setSplitterPosition] = useState({ left: position });
  const [previousSiblingWidth, setPreviousSiblingWidth] = useState(null);
  const [nextSiblingWidth, setNextSiblingWidth] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [mountTouchEvents, setMountTouchEvents] = useState(false);

  const gripIconClass = orientation === 'vertical' ? classes.gripIconVertical : classes.gripIconHorizontal;
  const splitterClass = orientation === 'vertical' ? classes.splitterVertical : classes.splitterHorizontal;

  const handleMoveSplitterStart = useCallback(
    (e) => {
      e.preventDefault();
      const touchEvent = isTouchEvent(e, 'touchstart');
      startX.current = touchEvent ? Math.round(e.touches[0].pageX) : e.pageX;
      setMountTouchEvents(touchEvent);
      setIsDragging(true);
    },
    [startX.current, setIsDragging]
  );

  const handleSplitterMove = useCallback(
    (e) => {
      const prevPositionLeft = splitterPosition.left;
      const nextPositionLeft =
        splitterRef.current?.getBoundingClientRect()?.left.toString() + window.scrollX.toString();
      const previousSibling = splitterRef.current?.previousSibling;

      if (prevPositionLeft > nextPositionLeft) {
        if (previousSibling) {
          previousSibling.style.flex = `0 0 ${nextPositionLeft}px`;
        }
      }

      setSplitterPosition((prev) => ({
        ...prev,
        left: isTouchEvent(e, 'touchmove') ? Math.round(e.touches[0].pageX) : e.pageX
      }));
    },
    [setSplitterPosition, splitterPosition]
  );

  const handleMoveSplitterEnd = useCallback(() => {
    setIsDragging(false);
  }, [splitterRef.current?.clientHeight, startX.current]);
  useEffect(() => {
    const removeEventListeners = () => {
      if (mountTouchEvents) {
        document.removeEventListener('touchmove', handleSplitterMove);
        document.removeEventListener('touchend', handleMoveSplitterEnd);
      } else {
        document.removeEventListener('mouseup', handleMoveSplitterEnd);
        document.removeEventListener('mousemove', handleSplitterMove);
      }
    };
    if (isDragging) {
      if (mountTouchEvents) {
        document.addEventListener('touchmove', handleSplitterMove);
        document.addEventListener('touchend', handleMoveSplitterEnd);
      } else {
        document.addEventListener('mousemove', handleSplitterMove);
        document.addEventListener('mouseup', handleMoveSplitterEnd);
      }
    } else {
      removeEventListeners();
    }
    return () => {
      removeEventListeners();
    };
  }, [isDragging]);

  useEffect(() => {
    const splitterPosLeft = splitterRef.current?.getBoundingClientRect()?.left + window.scrollX;

    if (!isDragging && splitterPosLeft > 0) {
      setSplitterPosition({ left: splitterPosLeft.toString() });
    }
  }, [splitterRef.current?.getBoundingClientRect()?.left, isDragging]);

  // console.log(splitterRef?.current?.previousSibling.style)

  return (
    <div
      className={splitterClass}
      onTouchStart={handleMoveSplitterStart}
      onMouseDown={handleMoveSplitterStart}
      ref={splitterRef}
      role="separator"
      style={{ left: splitterPosition?.left }}
    >
      <Icon className={gripIconClass} name={orientation === 'vertical' ? 'vertical-grip' : 'horizontal-grip'} />
    </div>
  );
});

Splitter.displayName = 'Index';

export { Splitter };
