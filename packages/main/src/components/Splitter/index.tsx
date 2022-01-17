import { useI18nBundle, useSyncRef } from '@ui5/webcomponents-react-base/dist/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { SPLITTER } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { forwardRef, Ref, useRef, useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    splitter: {
      touchAction: 'none',
      position: 'relative',
      display: 'flex',
      zIndex: 20,
      willChange: 'flex',
      border: 'none',
      backgroundColor: ThemingParameters.sapShell_Background,
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      boxSizing: 'border-box',

      '&:focus': {
        border: `${ThemingParameters.sapContent_FocusWidth} ${ThemingParameters.sapContent_FocusStyle} ${ThemingParameters.sapContent_FocusColor}`,
        outline: 'none'
      },

      '&[data-splitter-vertical=true]': {
        cursor: 'col-resize',
        minWidth: '1rem',
        width: '1rem',
        height: '100%',
        flexDirection: 'column',

        '& $lineBefore, & $lineAfter': {
          backgroundSize: '0.0625rem 100%',
          width: '1rem',
          height: '4rem'
        },

        '& $lineBefore': {
          backgroundImage: `linear-gradient(to top, ${ThemingParameters.sapHighlightColor}, transparent)`
        },

        '& $icon': {
          padding: '0.5rem 0',
          zIndex: 1
        },

        '& $lineAfter': {
          backgroundImage: `linear-gradient(to bottom, ${ThemingParameters.sapHighlightColor}, transparent)`
        }
      },

      '&[data-splitter-vertical=false]': {
        cursor: 'row-resize',
        minHeight: '1rem',
        height: '1rem',
        width: '100%',
        flexDirection: 'row',

        '& $lineBefore, & $lineAfter': {
          backgroundSize: '100% 0.0625rem ',
          width: '5rem',
          height: '1rem'
        },

        '& $lineBefore': {
          backgroundImage: `linear-gradient(to left, ${ThemingParameters.sapHighlightColor}, transparent)`
        },

        '& $icon': {
          padding: '0 0.5rem',
          zIndex: 1
        },

        '& $lineAfter': {
          backgroundImage: `linear-gradient(to right, ${ThemingParameters.sapHighlightColor}, transparent)`
        }
      },
      '&:hover': {
        '& $lineBefore, & $lineAfter': {
          flexGrow: 1,
          transition: 'all 0.1s ease-in'
        }
      }
    },
    icon: {
      color: ThemingParameters.sapHighlightColor
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
//todo rtl
const verticalPositionInfo = {
  start: 'left',
  end: 'right',
  position: 'X',
  positionRect: 'x',
  size: 'width',
  min: 'minWidth',
  arrowForward: 'Right',
  arrowBackward: 'Left',
  offset: 'offsetX'
};

const horizontalPositionInfo = {
  start: 'top',
  end: 'bottom',
  position: 'Y',
  positionRect: 'y',
  size: 'height',
  min: 'minHeight',
  arrowForward: 'Down',
  arrowBackward: 'Up',
  offset: 'offsetY'
};

const Splitter = forwardRef((props: SplitterPropTypes, ref: Ref<HTMLDivElement>) => {
  const { vertical } = props;
  const classes = useStyles();
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const [componentRef, localRef] = useSyncRef<HTMLDivElement>(ref);
  const start = useRef(null);

  const previousSiblingSize = useRef<number>(null);
  const nextSiblingSize = useRef<number>(null);
  const previousElementEnd = useRef(null);
  const nextElementStart = useRef(null);

  const resizerClickOffset = useRef(0);

  const positionKeys = vertical ? verticalPositionInfo : horizontalPositionInfo;

  const [isDragging, setIsDragging] = useState<boolean | string>(false);

  const handleSplitterMove = (e) => {
    const offset = resizerClickOffset.current;
    const previousSibling = localRef.current.previousSibling as HTMLDivElement;
    const nextSibling = localRef.current.nextSibling as HTMLDivElement;
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
      currentPosition + (splitterWidth - offset) <= nextElementStart.current
    ) {
      if (parseInt(previousSibling.dataset.minSize, 10) <= previousSiblingSize.current + sizeDiv && moveLeft) {
        move();
      }
      if (nextSiblingSize.current - sizeDiv >= parseInt(nextSibling.dataset.minSize, 10) && !moveLeft) {
        move();
      }
    }

    if (!nextSibling.nextSibling) {
      (nextSibling as HTMLElement).style.flex = '1 0 0px';
    }
  };

  const handleFallback = (e, touchEvent: boolean) => {
    const prevSibling = localRef.current.previousSibling as HTMLElement;
    const nextSibling = localRef.current.nextSibling as HTMLElement;
    const prevSiblingRect = (localRef.current.previousSibling as HTMLElement).getBoundingClientRect();
    const nextSiblingRect = (localRef.current.nextSibling as HTMLElement).getBoundingClientRect();
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

    previousElementEnd.current = (localRef.current.previousSibling as HTMLElement).getBoundingClientRect()?.[
      positionKeys.end
    ];
    if (localRef.current.nextSibling.nextSibling) {
      nextElementStart.current = (localRef.current.nextSibling.nextSibling as HTMLElement).getBoundingClientRect()?.[
        positionKeys.start
      ];
    } else {
      nextElementStart.current = localRef.current.parentElement.getBoundingClientRect()[positionKeys.end];
    }

    previousSiblingSize.current = (localRef.current.previousSibling as HTMLElement).getBoundingClientRect()?.[
      positionKeys.size
    ];
    nextSiblingSize.current = (localRef.current.nextSibling as HTMLElement).getBoundingClientRect()?.[
      positionKeys.size
    ];

    start.current = e[`client${positionKeys.position}`];
  };

  const onHandleKeyDown = (e: KeyboardEvent) => {
    if (e.code === `Arrow${positionKeys.arrowForward}`) {
      e.preventDefault();
      const prevSibling = localRef.current.previousSibling as HTMLElement;
      const nextSibling = localRef.current.nextSibling as HTMLElement;
      if (
        localRef.current?.style.border === `1px dotted ${ThemingParameters.sapHighlightColor}` &&
        nextSibling.style[positionKeys.min] !== ''
          ? nextSibling.getBoundingClientRect()?.[positionKeys.size] -
              20 -
              Number(nextSibling.style[positionKeys.min].replace('px', '')) >
            0
          : nextSibling.getBoundingClientRect()?.[positionKeys.size] - 20 > 0
      ) {
        nextSibling.style.flexBasis = `${nextSibling.getBoundingClientRect()?.[positionKeys.size] - 20}px`;
        prevSibling.style.flexBasis = `${prevSibling.getBoundingClientRect()?.[positionKeys.size] + 20}px`;
      }
    }

    if (e.code === `Arrow${positionKeys.arrowBackward}`) {
      e.preventDefault();
      const prevSibling = localRef.current.previousSibling as HTMLElement;
      const nextSibling = localRef.current.nextSibling as HTMLElement;
      if (
        localRef.current?.style.border === `1px dotted ${ThemingParameters.sapHighlightColor}` &&
        prevSibling.style[positionKeys.min] !== ''
          ? prevSibling.getBoundingClientRect()?.[positionKeys.size] -
              20 -
              Number(prevSibling.style[positionKeys.min].replace('px', '')) >
            0
          : prevSibling.getBoundingClientRect()?.[positionKeys.size] - 20 > 0
      ) {
        prevSibling.style.flexBasis = `${prevSibling.getBoundingClientRect()?.[positionKeys.size] - 20}px`;
        nextSibling.style.flexBasis = `${nextSibling.getBoundingClientRect()?.[positionKeys.size] + 20}px`;
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

  return (
    <div
      className={classes.splitter}
      tabIndex={0}
      onClick={handleSplitterClick}
      onKeyDown={onHandleKeyDown}
      onPointerDown={handleMoveSplitterStart}
      onMouseDown={handleMoveSplitterStart}
      ref={componentRef}
      role="resizer"
      data-splitter-vertical={vertical}
      title={i18nBundle.getText(SPLITTER)}
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
    >
      <div className={classes.lineBefore} />
      <Icon className={classes.icon} name={vertical ? 'vertical-grip' : 'horizontal-grip'} />
      <div className={classes.lineAfter} />
    </div>
  );
});

Splitter.displayName = 'Splitter';

export { Splitter };
