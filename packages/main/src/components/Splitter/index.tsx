'use client';

import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import horizontalGripIcon from '@ui5/webcomponents-icons/dist/horizontal-grip.js';
import verticalGripIcon from '@ui5/webcomponents-icons/dist/vertical-grip.js';
import { useCurrentTheme, useI18nBundle, useIsRTL, useSyncRef, useStylesheet } from '@ui5/webcomponents-react-base';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { PRESS_ARROW_KEYS_TO_MOVE } from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../types/index.js';
import { Button, Icon } from '../../webComponents/index.js';
import { classNames, styleData } from './Splitter.module.css.js';

export interface SplitterPropTypes extends CommonProps {
  height: string | number;
  width: string | number;
  vertical: boolean;
}

const verticalPositionInfo = {
  start: 'top',
  startUppercase: 'Top',
  end: 'bottom',
  position: 'Y',
  positionRect: 'y',
  size: 'height',
  min: 'minHeight',
  offset: 'offsetY'
};

const horizontalPositionInfo = {
  start: 'left',
  startUppercase: 'Left',
  end: 'right',
  position: 'X',
  positionRect: 'x',
  size: 'width',
  min: 'minWidth',
  offset: 'offsetX'
};

const Splitter = forwardRef<HTMLDivElement, SplitterPropTypes>((props, ref) => {
  const { vertical } = props;
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const [componentRef, localRef] = useSyncRef<HTMLDivElement>(ref);
  const isRtl = useIsRTL(localRef);
  const start = useRef(null);

  useStylesheet(styleData, Splitter.displayName);

  const previousSiblingSize = useRef<number>(null);
  const nextSiblingSize = useRef<number>(null);
  const previousElementEnd = useRef(null);
  const nextElementStart = useRef(null);

  const resizerClickOffset = useRef(0);
  const positionKeys = vertical ? verticalPositionInfo : horizontalPositionInfo;

  const [isDragging, setIsDragging] = useState<boolean | string>(false);
  const [isSiblings, setIsSiblings] = useState(['previousSibling', 'nextSibling']);

  const handleSplitterMove = (e) => {
    const offset = resizerClickOffset.current;
    const previousSibling = localRef.current[isSiblings[0]] as HTMLDivElement;
    const nextSibling = localRef.current[isSiblings[1]] as HTMLDivElement;

    const currentPosition =
      isDragging === 'touch' ? e.touches[0][`client${positionKeys.position}`] : e[`client${positionKeys.position}`];
    const sizeDiv = currentPosition - start.current;
    const splitterWidth = localRef.current.getBoundingClientRect()[positionKeys.size];
    const moveLeft = sizeDiv < 0;

    const move = () => {
      previousSibling.style.flex = `0 0 ${previousSiblingSize.current + sizeDiv}px`;

      if (nextSibling.nextSibling && previousSiblingSize.current + sizeDiv > 0) {
        nextSibling.style.flex = `0 0 ${nextSiblingSize.current - sizeDiv}px`;
      }
    };

    if (
      previousSiblingSize.current + sizeDiv > 0 &&
      (currentPosition as number) + (splitterWidth - offset) <= nextElementStart.current
    ) {
      if (parseInt(previousSibling.dataset.minSize, 10) <= previousSiblingSize.current + sizeDiv && moveLeft) {
        move();
      }
      if (nextSiblingSize.current - sizeDiv >= parseInt(nextSibling.dataset.minSize, 10) && !moveLeft) {
        move();
      }
    }

    if (!nextSibling[isSiblings[1]] && !isRtl) {
      (nextSibling as HTMLElement).style.flex = '1 0 0px';
    }
  };

  /**
   * If the cursor is dragged outside the splitter (into another SplitterElement or outside the SplitterLayout), SplitterElements should increase/decrease their size to max/min.
   */
  const handleFallback = (e, touchEvent: boolean) => {
    if (!localRef.current) {
      return;
    }
    const prevSibling = localRef.current[isSiblings[0]] as HTMLElement;
    const nextSibling = localRef.current[isSiblings[1]] as HTMLElement;
    const prevSiblingRect = (localRef.current[isSiblings[0]] as HTMLElement).getBoundingClientRect();
    const nextSiblingRect = (localRef.current[isSiblings[1]] as HTMLElement).getBoundingClientRect();
    const currentPos = touchEvent
      ? Math.round(e.changedTouches[0][`client${positionKeys.position}`])
      : e[`client${positionKeys.position}`];

    // left
    if (
      !localRef.current.contains(e.target) &&
      currentPos - localRef.current[`offset${positionKeys.startUppercase}`] + 1 /* border */ < 0
    ) {
      prevSibling.style.flex = '0 0 0px';
      // Check if minSize is set on previous sibling
      if (prevSibling.style?.[positionKeys.min]) {
        nextSibling.style.flex = `0 0 ${
          (nextSiblingRect?.[positionKeys.size] as number) +
          (prevSiblingRect?.[positionKeys.size] - prevSibling.style?.[positionKeys.min].replace('px', ''))
        }px`;
      } else {
        nextSibling.style.flex = `0 0 ${
          (nextSiblingRect?.[positionKeys.size] as number) + prevSiblingRect?.[positionKeys.size]
        }px`;
      }
    }

    // right
    if (nextElementStart.current < currentPos) {
      nextSibling.style.flex = '0 0 0px';
      // Check if minSize is set on next sibling
      if (nextSibling.style?.[positionKeys.min]) {
        prevSibling.style.flex = `0 0 ${
          (prevSiblingRect?.[positionKeys.size] as number) +
          (nextSiblingRect?.[positionKeys.size] - nextSibling.style?.[positionKeys.min].replace('px', ''))
        }px`;
      } else {
        prevSibling.style.flex = `0 0 ${
          (prevSiblingRect?.[positionKeys.size] as number) + nextSiblingRect?.[positionKeys.size]
        }px`;
      }
    }
  };

  const handleMoveSplitterStart = (e) => {
    if (e.type === 'pointerdown' && e.pointerType !== 'touch') {
      return;
    }
    e.currentTarget.focus();
    e.preventDefault();
    setIsDragging(e.pointerType ?? 'mouse');
    resizerClickOffset.current = e.nativeEvent[positionKeys.offset];

    previousElementEnd.current = (localRef.current[isSiblings[0]] as HTMLElement).getBoundingClientRect()?.[
      positionKeys.end
    ];
    if (localRef.current[isSiblings[1]][isSiblings[1]]) {
      nextElementStart.current = (
        localRef.current[isSiblings[1]][isSiblings[1]] as HTMLElement
      ).getBoundingClientRect()?.[positionKeys.start];
    } else {
      nextElementStart.current = localRef.current.parentElement.getBoundingClientRect()[positionKeys.end];
    }

    previousSiblingSize.current = (localRef.current[isSiblings[0]] as HTMLElement).getBoundingClientRect()?.[
      positionKeys.size
    ];
    nextSiblingSize.current = (localRef.current[isSiblings[1]] as HTMLElement).getBoundingClientRect()?.[
      positionKeys.size
    ];

    start.current = e[`client${positionKeys.position}`];
  };

  const onHandleKeyDown = (e) => {
    const keyEventProperties = e.code ?? e.key;
    if (
      keyEventProperties === 'ArrowRight' ||
      keyEventProperties === 'ArrowLeft' ||
      keyEventProperties === 'ArrowUp' ||
      keyEventProperties === 'ArrowDown'
    ) {
      e.preventDefault();
      let firstSibling = localRef.current[isSiblings[0]] as HTMLElement;
      let secondSibling = localRef.current[isSiblings[1]] as HTMLElement;

      if (keyEventProperties === 'ArrowLeft' || keyEventProperties === 'ArrowUp') {
        secondSibling = localRef.current[isSiblings[0]] as HTMLElement;
        firstSibling = localRef.current[isSiblings[1]] as HTMLElement;
      }

      const remainingSize = secondSibling.style[positionKeys.min]
        ? secondSibling.getBoundingClientRect()?.[positionKeys.size] -
          Number(secondSibling.style[positionKeys.min].replace('px', ''))
        : secondSibling.getBoundingClientRect()?.[positionKeys.size];

      if (document.activeElement === localRef.current) {
        const tickSize = remainingSize >= 20 ? 20 : remainingSize;
        const firstSiblingSize = firstSibling.getBoundingClientRect()?.[positionKeys.size] as number;
        const secondSiblingSize = secondSibling.getBoundingClientRect()?.[positionKeys.size] as number;
        secondSibling.style.flex = `0 0 ${secondSiblingSize - tickSize}px`;
        firstSibling.style.flex = `0 0 ${firstSiblingSize + tickSize}px`;
      }
    }
  };

  const end = (e) => {
    handleFallback(e, isDragging === 'touch');
    setIsDragging(false);
  };

  useEffect(() => {
    const removeEventListeners = () => {
      if (isDragging === 'touch') {
        document.removeEventListener('touchmove', handleSplitterMove);
        document.removeEventListener('touchend', end);
      } else {
        document.removeEventListener('mouseup', end);
        document.removeEventListener('mousemove', handleSplitterMove);
      }
    };
    if (isDragging) {
      if (isDragging === 'touch') {
        document.addEventListener('touchmove', handleSplitterMove);
        document.addEventListener('touchend', end);
      } else {
        document.addEventListener('mousemove', handleSplitterMove);
        document.addEventListener('mouseup', end);
      }
    } else {
      removeEventListeners();
    }
    return () => {
      removeEventListeners();
    };
  }, [isDragging]);

  useEffect(() => {
    setIsSiblings(isRtl && !vertical ? ['nextSibling', 'previousSibling'] : ['previousSibling', 'nextSibling']);
  }, [isRtl, vertical]);

  const currentTheme = useCurrentTheme();
  const isHighContrast =
    currentTheme === 'sap_fiori_3_hcb' ||
    currentTheme === 'sap_fiori_3_hcw' ||
    currentTheme === 'sap_horizon_hcb' ||
    currentTheme === 'sap_horizon_hcw';

  return (
    <div
      className={classNames.splitter}
      tabIndex={0}
      onKeyDown={onHandleKeyDown}
      onPointerDown={handleMoveSplitterStart}
      onMouseDown={handleMoveSplitterStart}
      ref={componentRef}
      role="separator"
      data-splitter-vertical={vertical ? 'vertical' : 'horizontal'}
      title={i18nBundle.getText(PRESS_ARROW_KEYS_TO_MOVE)}
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
      aria-label={i18nBundle.getText(PRESS_ARROW_KEYS_TO_MOVE)}
    >
      <div className={classNames.lineBefore} />
      {isHighContrast ? (
        <Button
          className={classNames.gripButton}
          tabIndex={-1}
          icon={vertical ? horizontalGripIcon : verticalGripIcon}
          design={ButtonDesign.Transparent}
          data-component-name="SplitterLayoutSplitterGrip"
        />
      ) : (
        <Icon
          className={classNames.icon}
          name={vertical ? horizontalGripIcon : verticalGripIcon}
          data-component-name="SplitterLayoutSplitterGrip"
        />
      )}
      <div className={classNames.lineAfter} />
    </div>
  );
});

Splitter.displayName = 'Splitter';

export { Splitter };
