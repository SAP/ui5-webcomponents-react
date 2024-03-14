'use client';

import horizontalGripIcon from '@ui5/webcomponents-icons/dist/horizontal-grip.js';
import verticalGripIcon from '@ui5/webcomponents-icons/dist/vertical-grip.js';
import { ThemingParameters, useCurrentTheme, useI18nBundle, useIsRTL, useSyncRef } from '@ui5/webcomponents-react-base';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { ButtonDesign } from '../../enums/index.js';
import { PRESS_ARROW_KEYS_TO_MOVE } from '../../i18n/i18n-defaults.js';
import { CustomThemingParameters } from '../../themes/CustomVariables.js';
import type { CommonProps } from '../../types/index.js';
import { Button, Icon } from '../../webComponents/index.js';

const useStyles = createUseStyles(
  {
    splitter: {
      touchAction: 'none',
      position: 'relative',
      display: 'flex',
      willChange: 'flex',
      backgroundColor: ThemingParameters.sapShell_Background,
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      '&[data-splitter-vertical=horizontal]': {
        cursor: 'col-resize',
        borderLeft: CustomThemingParameters.SplitterBarBorderStyle,
        borderRight: CustomThemingParameters.SplitterBarBorderStyle,
        minWidth: 'var(--_ui5wcr-SplitterSize)',
        width: 'var(--_ui5wcr-SplitterSize)',
        height: '100%',
        flexDirection: 'column',
        '&:focus': {
          borderTop: CustomThemingParameters.SplitterBarBorderFix,
          borderRight: CustomThemingParameters.SplitterBarBorderFocus,
          borderBottom: CustomThemingParameters.SplitterBarBorderFix,
          borderLeft: CustomThemingParameters.SplitterBarBorderFocus,
          outlineOffset: '-0.20rem',
          outline: CustomThemingParameters.SplitterBarOutline
        },

        '& $lineBefore, & $lineAfter': {
          backgroundSize: '0.0625rem 100%',
          width: 'var(--_ui5wcr-SplitterSize)',
          height: '4rem'
        },
        '& $lineBefore': {
          backgroundImage: `linear-gradient(to top, ${CustomThemingParameters.SplitterContentBorderColor}, transparent)`
        },
        '& $icon': {
          padding: '0.5rem 0',
          zIndex: 1
        },
        '& $lineAfter': {
          backgroundImage: `linear-gradient(to bottom, ${CustomThemingParameters.SplitterContentBorderColor}, transparent)`
        }
      },
      '&[data-splitter-vertical=vertical]': {
        borderTop: CustomThemingParameters.SplitterBarBorderStyle,
        borderBottom: CustomThemingParameters.SplitterBarBorderStyle,
        cursor: 'row-resize',
        minHeight: 'var(--_ui5wcr-SplitterSize)',
        height: 'var(--_ui5wcr-SplitterSize)',
        width: '100%',
        flexDirection: 'row',
        '&:focus': {
          borderTop: CustomThemingParameters.SplitterBarBorderFocus,
          borderRight: CustomThemingParameters.SplitterBarBorderFix,
          borderBottom: CustomThemingParameters.SplitterBarBorderFocus,
          borderLeft: CustomThemingParameters.SplitterBarBorderFix,
          outlineOffset: '-0.20rem',
          outline: CustomThemingParameters.SplitterBarOutline
        },

        '& $lineBefore, & $lineAfter': {
          backgroundSize: '100% 0.0625rem ',
          width: '5rem',
          height: 'var(--_ui5wcr-SplitterSize)'
        },
        '& $lineBefore': {
          backgroundImage: `linear-gradient(to left, ${CustomThemingParameters.SplitterContentBorderColor}, transparent)`
        },
        '& $icon': {
          padding: '0 0.5rem',
          zIndex: 1
        },
        '& $lineAfter': {
          backgroundImage: `linear-gradient(to right, ${CustomThemingParameters.SplitterContentBorderColor}, transparent)`
        }
      },
      '&[data-splitter-vertical=verticalRtl]': {
        cursor: 'row-resize',
        minHeight: 'var(--_ui5wcr-SplitterSize)',
        height: 'var(--_ui5wcr-SplitterSize)',
        width: '100%',
        flexDirection: 'row',

        '& $lineBefore, & $lineAfter': {
          backgroundSize: '100% 0.0625rem ',
          width: '5rem',
          height: 'var(--_ui5wcr-SplitterSize)'
        },
        '& $lineBefore': {
          backgroundImage: `linear-gradient(to right, ${CustomThemingParameters.SplitterContentBorderColor}, transparent)`
        },
        '& $icon': {
          padding: '0 0.5rem',
          zIndex: 1
        },
        '& $lineAfter': {
          backgroundImage: `linear-gradient(to left, ${CustomThemingParameters.SplitterContentBorderColor}, transparent)`
        }
      },
      '&:hover': {
        '& $lineBefore, & $lineAfter': {
          flexGrow: 1,
          transition: 'all 0.1s ease-in'
        }
      }
    },
    gripButton: {
      minWidth: '1.5rem !important',
      height: '1.625rem',
      zIndex: '1',
      '&:active': {
        zIndex: '2'
      }
    },
    icon: {
      boxSizing: 'initial',
      color: CustomThemingParameters.SplitterIconColor
    },
    lineBefore: {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    lineAfter: {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  },
  { name: 'Splitter' }
);

export interface SplitterPropTypes extends CommonProps {
  height: string | number;
  width: string | number;
  vertical: boolean;
}

const verticalPositionInfo = {
  start: 'top',
  end: 'bottom',
  position: 'Y',
  positionRect: 'y',
  size: 'height',
  min: 'minHeight',
  offset: 'offsetY'
};

const horizontalPositionInfo = {
  start: 'left',
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
  const classes = useStyles();

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

  const handleFallback = (e, touchEvent: boolean) => {
    const prevSibling = localRef.current[isSiblings[0]] as HTMLElement;
    const nextSibling = localRef.current[isSiblings[1]] as HTMLElement;
    const prevSiblingRect = (localRef.current[isSiblings[0]] as HTMLElement).getBoundingClientRect();
    const nextSiblingRect = (localRef.current[isSiblings[1]] as HTMLElement).getBoundingClientRect();
    const currentPos = touchEvent
      ? Math.round(e.changedTouches[0][`client${positionKeys.position}`])
      : e[`client${positionKeys.position}`];

    // left
    if (currentPos - localRef.current.getBoundingClientRect()?.[positionKeys.positionRect] < 0) {
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

  const handleSplitterClick = (e) => {
    e.currentTarget.focus();
  };

  const handleMoveSplitterStart = (e) => {
    if (e.type === 'pointerdown' && e.pointerType !== 'touch') {
      return;
    }
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
      className={classes.splitter}
      tabIndex={0}
      onClick={handleSplitterClick}
      onKeyDown={onHandleKeyDown}
      onPointerDown={handleMoveSplitterStart}
      onMouseDown={handleMoveSplitterStart}
      ref={componentRef}
      role="separator"
      data-splitter-vertical={isRtl && vertical ? 'verticalRtl' : vertical ? 'vertical' : 'horizontal'}
      title={i18nBundle.getText(PRESS_ARROW_KEYS_TO_MOVE)}
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
      aria-label={i18nBundle.getText(PRESS_ARROW_KEYS_TO_MOVE)}
    >
      <div className={classes.lineBefore} />
      {isHighContrast ? (
        <Button
          className={classes.gripButton}
          tabIndex={-1}
          icon={vertical ? horizontalGripIcon : verticalGripIcon}
          design={ButtonDesign.Transparent}
        />
      ) : (
        <Icon className={classes.icon} name={vertical ? horizontalGripIcon : verticalGripIcon} />
      )}
      <div className={classes.lineAfter} />
    </div>
  );
});

Splitter.displayName = 'Splitter';

export { Splitter };
