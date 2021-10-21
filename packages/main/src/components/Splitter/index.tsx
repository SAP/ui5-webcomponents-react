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
  const [isPostCollapsed, setIsPostCollapsed] = useState(true);
  const [isPreCollapsed, setIsPreCollapsed] = useState(true);
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

  const handleSplitterMove = useCallback(
    (e) => {
      const nextPosition = splitterRef.current?.getBoundingClientRect()?.[positionKeys[0]];
      const previousSibling = splitterRef.current?.previousSibling;
      const prevSiblingOffset = (previousSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[0]];
      const nextSibling = splitterRef.current?.nextSibling;

      if (
        nextPosition > prevSiblingOffset &&
        nextPosition < (nextSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[1]] - 32
      ) {
        (previousSibling as HTMLElement).style.flex = `0 0 ${nextPosition - prevSiblingOffset + 17}px`;
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
    const splitterPos = splitterRef.current?.getBoundingClientRect()?.[positionKeys[0]];

    if (
      splitterPos < (splitterRef.current?.previousSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[0]]
    ) {
      if (!isPreCollapsed) {
        setIsPreCollapsed(true);
        setIsDragging(false);
      }
    }

    if (
      splitterPos >
      (splitterRef.current?.nextSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[1]] - 32
    ) {
      if (!isPostCollapsed) {
        setIsPostCollapsed(true);
        setIsDragging(false);
      }
    }

    if (
      splitterPos - (splitterRef.current?.previousSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[0]] >
      1
    ) {
      setIsPreCollapsed(false);
    }

    if (
      isPostCollapsed &&
      splitterPos - (splitterRef.current?.nextSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[1]] + 32 <
        -1
    ) {
      setIsPostCollapsed(false);
    }

    if (!isDragging && splitterPos > 0) {
      setSplitterPosition({ prev: splitterPos.toString(), [positionKeys[0]]: splitterPos.toString() });
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
