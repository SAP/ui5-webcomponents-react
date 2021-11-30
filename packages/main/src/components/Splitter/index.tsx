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
import { doc } from 'prettier';

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

      '&[data-splitter-orientation="vertical"]': {
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

      '&[data-splitter-orientation="horizontal"]': {
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
  orientation: 'horizontal' | 'vertical';
}

const isTouchEvent = (e, touchEvent) => {
  if (e.type === touchEvent) {
    return !(e.touches && e.touches.length > 1);
  }
  return false;
};

const verticalPositionInfo = {
  start: 'left',
  end: 'right',
  position: 'X',
  size: 'width'
};

const horizontalPositionInfo = {
  start: 'top',
  end: 'bottom',
  position: 'Y',
  size: 'height'
};

const verticalStyle = {
  min: 'minWidth',
  current: 'width',
  max: 'maxWidth'
};

const horiontalStyle = {
  min: 'minHeight',
  current: 'height',
  max: 'maxHeight'
};

const Splitter = forwardRef((props: SplitterPropTypes, ref: Ref<HTMLDivElement>) => {
  const { orientation } = props;
  const classes = useStyles();
  const [componentRef, localRef] = useSyncRef<HTMLDivElement>(ref);
  const start = useRef(null);

  const previousSiblingSize = useRef<number>(null);
  const nextSiblingSize = useRef<number>(null);

  const positionKeys = orientation === 'vertical' ? verticalPositionInfo : horizontalPositionInfo;
  const styleKeys = orientation === 'vertical' ? verticalStyle : horiontalStyle;

  const [isDragging, setIsDragging] = useState(false);

  const [isPrevCollapsed, setIsPrevCollapsed] = useState(false);
  const [isMinPrevCollapsed, setIsMinPrevCollapsed] = useState(false);
  const [isMaxPrevCollapsed, setIsMaxPrevCollapsed] = useState(false);
  const [isPostCollapsed, setIsPostCollapsed] = useState(false);
  const [isMinPostCollapsed, setIsMinPostCollapsed] = useState(false);
  const [isMaxPostCollapsed, setIsMaxPostCollapsed] = useState(false);
  const [isPreviousSiblingRect, setIsPreviousSiblingRect] = useState(null);
  const [isPreviousSiblingStyle, setIsPreviousSiblingStyle] = useState(null);
  const [isNextSiblingRect, setIsNextSiblingRect] = useState(null);
  const [isNextSiblingStyle, setIsNextSiblingStyle] = useState(null);

  const handleSplitterMove = useCallback(
    (e) => {
      const previousSibling = localRef.current.previousSibling;
      const nextSibling = localRef.current.nextSibling;
      const sizeDiv = e[`client${positionKeys.position}`] - start.current;

      if (
        sizeDiv < 0 &&
        Number(window.getComputedStyle(previousSibling as HTMLElement).minWidth.replace('px', '')) !==
          (previousSibling as HTMLElement).getBoundingClientRect().width
      ) {
        (previousSibling as HTMLElement).style.flex = `0 0 ${previousSiblingSize.current + sizeDiv}px`;
        setIsPreviousSiblingRect((previousSibling as HTMLElement)?.getBoundingClientRect());
        setIsPreviousSiblingStyle(window.getComputedStyle(previousSibling as Element));
      }

      if (
        sizeDiv > 0 &&
        Math.round((nextSibling.nextSibling as HTMLElement)?.getBoundingClientRect().left) -
          Math.round(localRef.current.getBoundingClientRect().right) >
          10
      ) {
        (previousSibling as HTMLElement).style.flex = `0 0 ${previousSiblingSize.current + sizeDiv}px`;
        setIsPreviousSiblingRect((previousSibling as HTMLElement)?.getBoundingClientRect());
        setIsPreviousSiblingStyle(window.getComputedStyle(previousSibling as Element));
      }

      if (nextSibling.nextSibling) {
        if (sizeDiv < 0) {
          if (
            previousSiblingSize.current + sizeDiv > 0 &&
            Number(window.getComputedStyle(previousSibling as HTMLElement).minWidth.replace('px', '')) !==
              (previousSibling as HTMLElement).getBoundingClientRect().width
          ) {
            (nextSibling as HTMLElement).style.flex = `0 0 ${nextSiblingSize.current - sizeDiv}px`;
            setIsNextSiblingRect((nextSibling as HTMLElement)?.getBoundingClientRect());
            setIsNextSiblingStyle(window.getComputedStyle(nextSibling as Element));
          }
        }
        if (sizeDiv > 0) {
          if (
            previousSiblingSize.current + sizeDiv > 0 &&
            (nextSibling.nextSibling as HTMLElement).getBoundingClientRect().left -
              localRef.current.getBoundingClientRect().right >
              10
          ) {
            (nextSibling as HTMLElement).style.flex = `0 0 ${nextSiblingSize.current - sizeDiv}px`;
            setIsNextSiblingRect((nextSibling as HTMLElement)?.getBoundingClientRect());
            setIsNextSiblingStyle(window.getComputedStyle(nextSibling as Element));
          }
        }
      }

      if (!nextSibling.nextSibling) {
        (nextSibling as HTMLElement).style.flex = `1 0 auto`;
        console.log('IN');
      }
    },
    [isMinPrevCollapsed, isMaxPrevCollapsed, isPrevCollapsed, isMinPostCollapsed, isMaxPostCollapsed, isPostCollapsed]
  );

  const handleMoveSplitterStart: TouchEventHandler | MouseEventHandler = (e) => {
    e.preventDefault();
    previousSiblingSize.current = (localRef.current.previousSibling as HTMLElement).getBoundingClientRect()?.[
      positionKeys.size
    ];
    nextSiblingSize.current = (localRef.current.nextSibling as HTMLElement).getBoundingClientRect()?.[
      positionKeys.size
    ];

    const touchEvent = isTouchEvent(e, 'touchstart');
    start.current = touchEvent
      ? Math.round(e.touches[0][`client${positionKeys.position}`])
      : e[`client${positionKeys.position}`];
    setIsDragging(true);

    // bind event listeners
    if (touchEvent) {
      document.addEventListener('touchmove', handleSplitterMove);
      document.addEventListener(
        'touchend',
        () => {
          document.removeEventListener('touchmove', handleSplitterMove);
          setIsDragging(false);
        },
        { once: true }
      );
    } else {
      document.addEventListener('mousemove', handleSplitterMove);
      document.addEventListener(
        'mouseup',
        () => {
          document.removeEventListener('mousemove', handleSplitterMove);
          setIsDragging(false);
        },
        { once: true }
      );
    }
  };

  return (
    <div
      className={classes.splitter}
      onTouchStart={handleMoveSplitterStart}
      onMouseDown={handleMoveSplitterStart}
      ref={componentRef}
      role="separator"
      data-splitter-orientation={orientation}
    >
      <div className={classes.lineBefore} />
      <Icon className={classes.icon} name={orientation === 'vertical' ? 'vertical-grip' : 'horizontal-grip'} />
      <div className={classes.lineAfter} />
    </div>
  );
});

Splitter.displayName = 'Splitter';

export { Splitter };
