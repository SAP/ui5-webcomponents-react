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
  const start = useRef(null);

  const [positionKeys] = useState(orientation === 'vertical' ? ['left', 'right', 'X'] : ['top', 'bottom', 'Y']);
  const [splitterPosition, setSplitterPosition] = useState({ prev: position, [positionKeys[0]]: position });
  const [isDragging, setIsDragging] = useState(false);
  const [mountTouchEvents, setMountTouchEvents] = useState(false);

  const gripIconClass = orientation === 'vertical' ? classes.gripIconVertical : classes.gripIconHorizontal;
  const splitterClass = orientation === 'vertical' ? classes.splitterVertical : classes.splitterHorizontal;

  const handleMoveSplitterStart = useCallback(
    (e) => {
      e.preventDefault();
      const touchEvent = isTouchEvent(e, 'touchstart');
      start.current = touchEvent ? Math.round(e.touches[0][`page${positionKeys[2]}`]) : e[`page${positionKeys[2]}`];
      setMountTouchEvents(touchEvent);
      setIsDragging(true);
    },
    [start.current, setIsDragging]
  );

  const getPreviousSiblings = (elem, sibling: string, filter?): number[] => {
    const sibs = [];
    while ((elem = elem[sibling])) {
      if (elem.nodeType === 3) continue; // text node
      if ((!filter || filter(elem)) && elem.className.includes('splitterVertical' || 'splitterHorizontal'))
        sibs.push(elem.getBoundingClientRect()?.[positionKeys[0]]);
    }
    return sibs;
  };

  const handleSplitterMove = useCallback(
    (e) => {
      const nextPositionLeft = splitterRef.current?.getBoundingClientRect()?.[positionKeys[0]];
      const previousSibling = splitterRef.current?.previousSibling;
      const nextSibling = splitterRef.current?.nextSibling;
      const prevSiblingLeft = getPreviousSiblings(splitterRef.current, 'previousSibling')?.[0] ?? 0;

      if (
        nextPositionLeft > prevSiblingLeft &&
        nextPositionLeft < (nextSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[1]] - 32
      ) {
        (previousSibling as HTMLElement).style.flex = `0 0 ${nextPositionLeft - prevSiblingLeft}px`;
        if (nextSibling.nextSibling) {
          (nextSibling as HTMLElement).style.flex = `0 0 ${
            (nextSibling.nextSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[0]] -
            (nextSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[0]] +
            16
          }px`;
        }
        if (!nextSibling.nextSibling) {
          (nextSibling as HTMLElement).style.flex = `1 0 auto`;
        }
      }

      setSplitterPosition((prev) => ({
        ...prev,
        [positionKeys[0]]: isTouchEvent(e, 'touchmove')
          ? Math.round(e.touches[0][`page${positionKeys[2]}`])
          : e[`page${positionKeys[2]}`]
      }));
    },
    [setSplitterPosition, splitterPosition]
  );

  const handleMoveSplitterEnd = useCallback(() => {
    setIsDragging(false);
  }, [splitterRef.current?.clientHeight, start.current]);
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
    const splitterPosLeft =
      splitterRef.current?.getBoundingClientRect()?.[positionKeys[0]] + window[`scroll${positionKeys[2]}`];

    if (
      splitterPosLeft <
        (splitterRef.current?.previousSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[0]] ||
      splitterPosLeft >
        (splitterRef.current?.nextSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[1]] - 32
    ) {
      setIsDragging(false);
    }

    if (!isDragging && splitterPosLeft > 0) {
      setSplitterPosition({ prev: splitterPosLeft.toString(), [positionKeys[0]]: splitterPosLeft.toString() });
    }
  }, [splitterRef.current?.getBoundingClientRect()?.[positionKeys[0]], isDragging]);

  return (
    <div
      className={splitterClass}
      onTouchStart={handleMoveSplitterStart}
      onMouseDown={handleMoveSplitterStart}
      ref={splitterRef}
      role="separator"
      style={{ [positionKeys[0]]: splitterPosition?.[positionKeys[0]] }}
    >
      <Icon className={gripIconClass} name={orientation === 'vertical' ? 'vertical-grip' : 'horizontal-grip'} />
    </div>
  );
});

Splitter.displayName = 'Splitter';

export { Splitter };
