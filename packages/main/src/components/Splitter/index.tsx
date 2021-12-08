import { useSyncRef } from '@ui5/webcomponents-react-base/dist/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import React, { forwardRef, MouseEventHandler, Ref, TouchEventHandler, useCallback, useRef } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    splitter: {
      position: 'relative',
      display: 'flex',
      zIndex: 20,
      willChange: 'flex',
      border: 'none',
      backgroundColor: ThemingParameters.sapShell_Background,
      alignItems: 'center',
      justifyContent: 'center',

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

export interface SplitterPropTypes {
  height: string | number;
  width: string | number;
  vertical: boolean;
}

const verticalPositionInfo = {
  start: 'left',
  end: 'right',
  position: 'X',
  positionRect: 'x',
  size: 'width',
  min: 'minWidth'
};

const horizontalPositionInfo = {
  start: 'top',
  end: 'bottom',
  position: 'Y',
  positionRect: 'y',
  size: 'height',
  min: 'minHeight'
};

const Splitter = forwardRef((props: SplitterPropTypes, ref: Ref<HTMLDivElement>) => {
  const { vertical } = props;
  const classes = useStyles();
  const [componentRef, localRef] = useSyncRef<HTMLDivElement>(ref);
  const start = useRef(null);

  const previousSiblingSize = useRef<number>(null);
  const nextSiblingSize = useRef<number>(null);

  const positionKeys = vertical ? verticalPositionInfo : horizontalPositionInfo;

  let timestamp;
  let mX = 0;

  const handleSplitterMove = useCallback((e) => {
    const now = Date.now();
    const currentX = e.screenX;
    const dt = now - timestamp;
    const distance = Math.abs(currentX - mX);
    const speed = Math.round((distance / dt) * 1000);

    const previousSibling = localRef.current.previousSibling;
    const nextSibling = localRef.current.nextSibling;
    const sizeDiv = e[`client${positionKeys.position}`] - start.current;

    if (speed < 1000) {
      // Move splitter left
      if (
        sizeDiv < 0 &&
        Number(window.getComputedStyle(previousSibling as HTMLElement)?.[positionKeys.min].replace('px', '')) !==
          (previousSibling as HTMLElement).getBoundingClientRect()?.[positionKeys.size]
      ) {
        (previousSibling as HTMLElement).style.flex = `0 0 ${previousSiblingSize.current + sizeDiv}px`;
        if (nextSibling.nextSibling && previousSiblingSize.current + sizeDiv > 0) {
          (nextSibling as HTMLElement).style.flex = `0 0 ${nextSiblingSize.current - sizeDiv}px`;
        }
      }

      // Move splitter right
      if (
        sizeDiv > 0 &&
        (nextSibling.nextSibling
          ? Math.round((nextSibling.nextSibling as HTMLElement)?.getBoundingClientRect()?.[positionKeys.start]) -
              Math.round(localRef.current.getBoundingClientRect()?.[positionKeys.end]) >
            20
          : true) &&
        Number(window.getComputedStyle(nextSibling as HTMLElement)?.[positionKeys.min].replace('px', '')) !==
          (nextSibling as HTMLElement).getBoundingClientRect()?.[positionKeys.size] &&
        Math.round(localRef.current.parentElement.getBoundingClientRect()?.[positionKeys.end]) -
          Math.round(localRef.current.getBoundingClientRect()?.[positionKeys.end]) >
          20
      ) {
        (previousSibling as HTMLElement).style.flex = `0 0 ${previousSiblingSize.current + sizeDiv}px`;
        if (nextSibling.nextSibling && previousSiblingSize.current + sizeDiv > 0) {
          (nextSibling as HTMLElement).style.flex = `0 0 ${nextSiblingSize.current - sizeDiv}px`;
        }
      }

      if (!nextSibling.nextSibling) {
        (nextSibling as HTMLElement).style.flex = '1 0 0px';
      }
    }

    mX = currentX;
    timestamp = now;
  }, []);

  const handleMoveSplitterStart: MouseEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      previousSiblingSize.current = (localRef.current.previousSibling as HTMLElement).getBoundingClientRect()?.[
        positionKeys.size
      ];
      nextSiblingSize.current = (localRef.current.nextSibling as HTMLElement).getBoundingClientRect()?.[
        positionKeys.size
      ];

      start.current = e[`client${positionKeys.position}`];

      document.addEventListener('mousemove', handleSplitterMove);
      document.addEventListener(
        'mouseup',
        (e) => {
          const splitterRect = (localRef.current as HTMLElement).getBoundingClientRect();
          const prevSiblingRect = (localRef.current.previousSibling as HTMLElement).getBoundingClientRect();
          const nextSiblingRect = (localRef.current.nextSibling as HTMLElement).getBoundingClientRect();

          if (
            e[`client${positionKeys.position}`] -
              localRef.current.getBoundingClientRect()?.[positionKeys.positionRect] >
            30
          ) {
            (localRef.current.nextSibling as HTMLElement).style.flex = '0 0 0px';
            (localRef.current.previousSibling as HTMLElement).style.flex = `0 0 ${
              prevSiblingRect?.width + nextSiblingRect.width
            }px`;
            console.log('RIGHT');
          }

          if (
            e[`client${positionKeys.position}`] -
              localRef.current.getBoundingClientRect()?.[positionKeys.positionRect] <
            -30
          ) {
            (localRef.current.previousSibling as HTMLElement).style.flex = '0 0 0px';
            (localRef.current.nextSibling as HTMLElement).style.flex = `0 0 ${
              nextSiblingRect?.width + prevSiblingRect.width
            }px`;

            console.log('IN');
          }
          document.removeEventListener('mousemove', handleSplitterMove);
        },
        { once: true }
      );
    },
    [
      previousSiblingSize.current,
      localRef.current,
      nextSiblingSize.current,
      start.current,
      handleSplitterMove,
      positionKeys
    ]
  );

  const handleTouchMoveSplitterStart: TouchEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      previousSiblingSize.current = (localRef.current.previousSibling as HTMLElement).getBoundingClientRect()?.[
        positionKeys.size
      ];
      nextSiblingSize.current = (localRef.current.nextSibling as HTMLElement).getBoundingClientRect()?.[
        positionKeys.size
      ];

      start.current = Math.round(e.touches[0][`client${positionKeys.position}`]);

      document.addEventListener('touchmove', handleSplitterMove);
      document.addEventListener(
        'touchend',
        () => {
          document.removeEventListener('touchmove', handleSplitterMove);
        },
        { once: true }
      );
    },
    [
      previousSiblingSize.current,
      localRef.current,
      nextSiblingSize.current,
      start.current,
      handleSplitterMove,
      positionKeys
    ]
  );

  return (
    <div
      className={classes.splitter}
      onTouchStart={handleTouchMoveSplitterStart}
      onMouseDown={handleMoveSplitterStart}
      ref={componentRef}
      role="separator"
      data-splitter-vertical={vertical}
    >
      <div className={classes.lineBefore} />
      <Icon className={classes.icon} name={vertical ? 'vertical-grip' : 'horizontal-grip'} />
      <div className={classes.lineAfter} />
    </div>
  );
});

Splitter.displayName = 'Splitter';

export { Splitter };
