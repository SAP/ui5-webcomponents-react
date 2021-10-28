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
  const [isPrevCollapsed, setIsPrevCollapsed] = useState(false);
  const [isMinPrevCollapsed, setIsMinPrevCollapsed] = useState(false);
  const [isMaxPrevCollapsed, setIsMaxPrevCollapsed] = useState(false);
  const [isPostCollapsed, setIsPostCollapsed] = useState(false);
  const [isMinPostCollapsed, setIsMinPostCollapsed] = useState(false);
  const [isMaxPostCollapsed, setIsMaxPostCollapsed] = useState(false);
  const [mountTouchEvents, setMountTouchEvents] = useState(false);
  const [isPreviousSiblingRect, setIsPreviousSiblingRect] = useState(null);
  const [isPreviousSiblingStyle, setIsPreviousSiblingStyle] = useState(null);
  const [isNextSiblingRect, setIsNextSiblingRect] = useState(null);
  const [isNextSiblingStyle, setIsNextSiblingStyle] = useState(null);

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
    [start.current]
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
        (previousSibling as HTMLElement).style.flex = `0 0 ${nextPosition - prevSiblingOffset + 16}px`;
        setIsPreviousSiblingRect((previousSibling as HTMLElement)?.getBoundingClientRect());
        setIsPreviousSiblingStyle(window.getComputedStyle(previousSibling as Element));

        if (nextSibling.nextSibling) {
          (nextSibling as HTMLElement).style.flex = `0 0 ${
            (nextSibling.nextSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[0]] -
            (nextSibling as HTMLElement).getBoundingClientRect()?.[positionKeys[0]] +
            16
          }px`;
          setIsNextSiblingRect((nextSibling as HTMLElement)?.getBoundingClientRect());
          setIsNextSiblingStyle(window.getComputedStyle(nextSibling as Element));
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

    if (!isPrevCollapsed && splitterPos < isPreviousSiblingRect?.[positionKeys[0]]) {
      setIsDragging(false);
      setIsPrevCollapsed(true);
    }

    if (
      !isMinPrevCollapsed &&
      isPreviousSiblingRect?.width === Number(isPreviousSiblingStyle?.minWidth.replace('px', ''))
    ) {
      setIsDragging(false);
      setIsMinPrevCollapsed(true);
    }

    if (
      !isMaxPrevCollapsed &&
      Math.round(isPreviousSiblingRect?.width) === Number(isPreviousSiblingStyle?.maxWidth.replace('px', ''))
    ) {
      setIsDragging(false);
      setIsMaxPrevCollapsed(true);
    }

    if (!isPostCollapsed && splitterPos > isNextSiblingRect?.[positionKeys[1]] - 32) {
      setIsDragging(false);
      setIsPostCollapsed(true);
    }

    if (
      !isMinPostCollapsed &&
      Math.round(isNextSiblingRect?.width) === Math.round(Number(isNextSiblingStyle?.minWidth.replace('px', '')))
    ) {
      setIsDragging(false);
      setIsMinPostCollapsed(true);
    }

    if (
      !isMaxPostCollapsed &&
      Math.round(isNextSiblingRect?.width) === Math.round(Number(isNextSiblingStyle?.maxWidth.replace('px', '')))
    ) {
      setIsDragging(false);
      setIsMaxPostCollapsed(true);
    }

    if (isPostCollapsed && isNextSiblingRect?.[positionKeys[1]] - 32 - splitterPos > 1) {
      setIsPostCollapsed(false);
    }

    if (
      isMinPostCollapsed &&
      Math.round(isNextSiblingRect?.width) - Math.round(Number(isNextSiblingStyle?.minWidth.replace('px', ''))) > 3
    ) {
      setIsMinPostCollapsed(false);
    }

    if (
      isMaxPostCollapsed &&
      Math.round(Number(isNextSiblingStyle?.maxWidth.replace('px', ''))) - Math.round(isNextSiblingRect?.width) > 3
    ) {
      setIsMaxPostCollapsed(false);
    }

    if (isPrevCollapsed && splitterPos - isPreviousSiblingRect?.[positionKeys[0]] > 3) {
      setIsPrevCollapsed(false);
    }

    if (
      isMinPrevCollapsed &&
      isPreviousSiblingRect?.width - Number(isPreviousSiblingStyle?.minWidth.replace('px', '')) > 3
    ) {
      setIsMinPrevCollapsed(false);
    }

    if (
      isMaxPrevCollapsed &&
      Number(isPreviousSiblingStyle?.maxWidth.replace('px', '')) - Math.round(isPreviousSiblingRect?.width) > 3
    ) {
      setIsMaxPrevCollapsed(false);
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
