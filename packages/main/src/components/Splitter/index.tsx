import { useSyncRef } from '@ui5/webcomponents-react-base/dist/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import React, {
  forwardRef,
  MouseEventHandler,
  Ref,
  TouchEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
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
      userSelect: 'none',
      boxSizing: 'border-box',

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

  const [isDragging, setIsDragging] = useState(true);

  const positionKeys = vertical ? verticalPositionInfo : horizontalPositionInfo;

  let timestamp;
  let mX = 0;

  const handleSplitterMove = useCallback(
    (e) => {
      const now = Date.now();
      const currentX = e.screenX;
      const dt = now - timestamp;
      const distance = Math.abs(currentX - mX);
      const speed = Math.round((distance / dt) * 1000);

      const previousSibling = localRef.current.previousSibling;
      const nextSibling = localRef.current.nextSibling;
      const sizeDiv = e[`client${positionKeys.position}`] - start.current;

      if (speed > 1000) {
        setIsDragging(false);
      }

      if (speed < 1000 && isDragging) {
        // Move splitter left
        if (
          sizeDiv < 0 &&
          (previousSibling as HTMLElement).getBoundingClientRect()?.[positionKeys.size] -
            Number((previousSibling as HTMLElement).style?.[positionKeys.min].replace('px', '')) >
            20
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
          (nextSibling as HTMLElement).getBoundingClientRect()?.[positionKeys.size] -
            Number((nextSibling as HTMLElement)?.style[positionKeys.min].replace('px', '')) >
            20 &&
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
    },
    [isDragging, localRef.current]
  );

  const handleFallback = useCallback(
    (e, touchEvent: boolean) => {
      const prevSibling = localRef.current.previousSibling as HTMLElement;
      const nextSibling = localRef.current.nextSibling as HTMLElement;
      const prevSiblingRect = (localRef.current.previousSibling as HTMLElement).getBoundingClientRect();
      const nextSiblingRect = (localRef.current.nextSibling as HTMLElement).getBoundingClientRect();

      const startPos = touchEvent
        ? Math.round(e.touches[0][`client${positionKeys.position}`])
        : e[`client${positionKeys.position}`];

      // Move cursor left of stopped splitter
      if (startPos - localRef.current.getBoundingClientRect()?.[positionKeys.positionRect] < -20) {
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

      // Move cursor right of stopped splitter
      if (startPos - localRef.current.getBoundingClientRect()?.[positionKeys.positionRect] > 20) {
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
      setIsDragging(true);
    },
    [isDragging]
  );

  const setBorderStyle = useCallback(
    (e) => {
      if (!localRef.current?.contains(e.target as Node)) {
        localRef.current.style.border = 'none';
        document.removeEventListener('keydown', onHandleKeyDown);
        document.removeEventListener('click', setBorderStyle);
        return;
      }
      localRef.current.style.border = `1px dotted ${ThemingParameters.sapHighlightColor}`;
    },
    [localRef.current]
  );

  const handleMoveSplitterStart: MouseEventHandler = useCallback(
    (e) => {
      e.preventDefault();

      document.addEventListener('keydown', onHandleKeyDown);
      document.addEventListener('click', setBorderStyle);

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
          document.removeEventListener('mousemove', handleSplitterMove);
          handleFallback(e, false);
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
      positionKeys,
      isDragging
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
        (e) => {
          document.removeEventListener('touchmove', handleSplitterMove);

          handleFallback(e, true);
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

  const onHandleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      const prevSibling = localRef.current.previousSibling as HTMLElement;
      const nextSibling = localRef.current.nextSibling as HTMLElement;

      if (e.code === 'ArrowRight') {
        if (
          localRef.current?.style.border === `1px dotted ${ThemingParameters.sapHighlightColor}` &&
          nextSibling.style.minWidth !== ''
            ? nextSibling.getBoundingClientRect().width - 5 - Number(nextSibling.style.minWidth.replace('px', '')) > 0
            : nextSibling.getBoundingClientRect().width - 5 > 0
        ) {
          nextSibling.style.flexBasis = `${nextSibling.getBoundingClientRect().width - 5}px`;
          prevSibling.style.flexBasis = `${prevSibling.getBoundingClientRect().width + 5}px`;
        }
      }

      if (e.code === 'ArrowLeft') {
        if (
          localRef.current?.style.border === `1px dotted ${ThemingParameters.sapHighlightColor}` &&
          prevSibling.style.minWidth !== ''
            ? prevSibling.getBoundingClientRect().width - 5 - Number(nextSibling.style.minWidth.replace('px', '')) > 0
            : prevSibling.getBoundingClientRect().width - 5 > 0
        ) {
          prevSibling.style.flexBasis = `${prevSibling.getBoundingClientRect().width - 5}px`;
          nextSibling.style.flexBasis = `${nextSibling.getBoundingClientRect().width + 5}px`;
        }
      }
    },
    [localRef.current]
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
