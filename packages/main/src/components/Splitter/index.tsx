import { useConsolidatedRef } from '@ui5/webcomponents-react-base/hooks/useConsolidatedRef';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import React, { forwardRef, Ref, useCallback, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { styles } from '../SplitterLayout/SplitterLayout.jss';

const useStyles = createUseStyles(styles, { name: 'SplitterLayout' });

export interface SplitterPropTypes {
  height: string | number;
  width: string | number;
  orientation: 'horizontal' | 'vertical';
}

const isTouchEvent = (e, touchEvent) => {
  if (e.type === touchEvent) {
    return !(e.touches && e.touches.length > 1);
  }
  return false;
};

const Splitter = forwardRef((props: SplitterPropTypes, ref: Ref<HTMLDivElement>) => {
  const { orientation } = props;
  const classes = useStyles(props);
  const splitterRef = useConsolidatedRef<HTMLDivElement>(ref);
  const start = useRef(null);
  const previousSiblingRef = useRef(splitterRef.current?.previousSibling);
  const nextSiblingRef = useRef(splitterRef.current?.nextSibling);
  const previousSiblingSize = useRef<number>(null);
  const nextSiblingSize = useRef<number>(null);

  const [positionKeys] = useState(
    orientation === 'vertical' ? ['left', 'right', 'X', 'width'] : ['top', 'bottom', 'Y', 'height']
  );
  const [styleKeys] = useState(
    orientation === 'vertical' ? ['width', 'minWidth', 'maxWidth'] : ['height', 'minHeight', 'maxHeight']
  );
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
      previousSiblingRef.current = splitterRef.current.previousSibling;
      nextSiblingRef.current = splitterRef.current.nextSibling;
      previousSiblingSize.current = (previousSiblingRef.current as HTMLElement).getBoundingClientRect()?.[
        positionKeys[3]
      ];
      nextSiblingSize.current = (nextSiblingRef.current as HTMLElement).getBoundingClientRect()?.[positionKeys[3]];
      const touchEvent = isTouchEvent(e, 'touchstart');
      start.current = touchEvent ? Math.round(e.touches[0][`client${positionKeys[2]}`]) : e[`client${positionKeys[2]}`];
      setMountTouchEvents(touchEvent);
      setIsDragging(true);
    },
    [start.current]
  );

  const handleSplitterMove = useCallback(
    (e) => {
      const previousSibling = previousSiblingRef.current;
      const nextSibling = nextSiblingRef.current;
      const sizeDiv = e[`client${positionKeys[2]}`] - start.current;
      console.log();
      if (
        !(sizeDiv < 0 && (isMinPrevCollapsed || isPrevCollapsed || isMaxPostCollapsed)) &&
        !(sizeDiv > 0 && (isMinPostCollapsed || isMaxPrevCollapsed || isPostCollapsed))
      ) {
        (previousSibling as HTMLElement).style.flex = `0 0 ${previousSiblingSize.current + sizeDiv}px`;
        setIsPreviousSiblingRect((previousSibling as HTMLElement)?.getBoundingClientRect());
        setIsPreviousSiblingStyle(window.getComputedStyle(previousSibling as Element));
        if (nextSibling.nextSibling) {
          (nextSibling as HTMLElement).style.flex = `0 0 ${nextSiblingSize.current - sizeDiv}px`;
          setIsNextSiblingRect((nextSibling as HTMLElement)?.getBoundingClientRect());
          setIsNextSiblingStyle(window.getComputedStyle(nextSibling as Element));
        }
        if (!nextSibling.nextSibling) {
          (nextSibling as HTMLElement).style.flex = `1 0 auto`;
        }
      }
    },
    [isMinPrevCollapsed, isMaxPrevCollapsed, isPrevCollapsed, isMinPostCollapsed, isMaxPostCollapsed, isPostCollapsed]
  );

  const handleMoveSplitterEnd = useCallback(() => {
    setIsDragging(false);
  }, [splitterRef.current?.clientHeight]);

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
      isPreviousSiblingRect?.[styleKeys[0]] === Number(isPreviousSiblingStyle?.[styleKeys[1]].replace('px', ''))
    ) {
      setIsDragging(false);
      setIsMinPrevCollapsed(true);
    }

    if (
      !isMaxPrevCollapsed &&
      Math.round(isPreviousSiblingRect?.[styleKeys[0]]) ===
        Number(isPreviousSiblingStyle?.[styleKeys[2]].replace('px', ''))
    ) {
      setIsDragging(false);
      setIsMaxPrevCollapsed(true);
    }

    if (!isPostCollapsed && splitterPos > isNextSiblingRect?.[positionKeys[1]] - 16) {
      setIsDragging(false);
      setIsPostCollapsed(true);
    }

    if (
      !isMinPostCollapsed &&
      Math.round(isNextSiblingRect?.[styleKeys[0]]) ===
        Math.round(Number(isNextSiblingStyle?.[styleKeys[1]].replace('px', '')))
    ) {
      setIsDragging(false);
      setIsMinPostCollapsed(true);
    }

    if (
      !isMaxPostCollapsed &&
      Math.round(isNextSiblingRect?.[styleKeys[0]]) ===
        Math.round(Number(isNextSiblingStyle?.[styleKeys[2]].replace('px', '')))
    ) {
      setIsDragging(false);
      setIsMaxPostCollapsed(true);
    }

    if (isPostCollapsed && isNextSiblingRect?.[positionKeys[1]] - 16 - splitterPos > 5) {
      setIsPostCollapsed(false);
    }

    if (
      isMinPostCollapsed &&
      Math.round(isNextSiblingRect?.[styleKeys[0]]) -
        Math.round(Number(isNextSiblingStyle?.[styleKeys[1]].replace('px', ''))) >
        1
    ) {
      setIsMinPostCollapsed(false);
    }

    if (
      isMaxPostCollapsed &&
      Math.round(Number(isNextSiblingStyle?.[styleKeys[2]].replace('px', ''))) -
        Math.round(isNextSiblingRect?.[styleKeys[0]]) >
        5
    ) {
      setIsMaxPostCollapsed(false);
    }

    if (isPrevCollapsed && splitterPos - isPreviousSiblingRect?.[positionKeys[0]] > 5) {
      setIsPrevCollapsed(false);
    }

    if (
      isMinPrevCollapsed &&
      isPreviousSiblingRect?.[styleKeys[0]] - Number(isPreviousSiblingStyle?.[styleKeys[1]].replace('px', '')) > 5
    ) {
      setIsMinPrevCollapsed(false);
    }

    if (
      isMaxPrevCollapsed &&
      Number(isPreviousSiblingStyle?.[styleKeys[2]].replace('px', '')) -
        Math.round(isPreviousSiblingRect?.[styleKeys[0]]) >
        1
    ) {
      setIsMaxPrevCollapsed(false);
    }
  }, [splitterRef.current?.getBoundingClientRect()?.[positionKeys[0]], isDragging]);

  return (
    <div
      className={splitterClass}
      onTouchStart={handleMoveSplitterStart}
      onMouseDown={handleMoveSplitterStart}
      ref={splitterRef}
      role="separator"
    >
      <Icon className={gripIconClass} name={orientation === 'vertical' ? 'vertical-grip' : 'horizontal-grip'} />
    </div>
  );
});

Splitter.displayName = 'Splitter';

export { Splitter };
