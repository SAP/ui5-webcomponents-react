import { useConsolidatedRef } from '@ui5/webcomponents-react-base/hooks/useConsolidatedRef';
import React, {
  CSSProperties,
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
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { Icon } from '../..';

// const useStyles = createUseStyles(styles, { name: 'SplitterLayout' });
const useStyles = createUseStyles(
  {
    splitter: {
      position: 'relative',
      display: 'flex',
      zIndex: 20,
      willChange: 'flex',
      border: 'none',
      backgroundColor: ThemingParameters.sapShell_Background,

      '&[data-splitter-orientation="vertical"]': {
        cursor: 'col-resize',
        width: '1rem',
        height: 'var(--ui5wcrSplitterSize)',

        '& $icon': {
          top: 'calc(50% - 8px)',

          '&:before, &:after': {
            height: '4rem',
            width: '0.0625rem',
            margin: '0 0.5rem',
            boxSizing: 'border-box',
            transition: 'height 0.15s ease-in'
          },
          '&:before': {
            bottom: '1.5rem',
            background: `linear-gradient(to top, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
          },
          '&:after': {
            top: '1.5rem',
            background: `linear-gradient(to bottom, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
          }
        },

        '&:hover': {
          '& $icon': {
            '&:before, &:after': {
              height: `calc(var(--ui5wcrSplitterSize) / 2 - 16px)`
            }
          }
        }
      },

      '&[data-splitter-orientation="horizontal"]': {
        cursor: 'row-resize',
        height: '1rem',
        width: 'var(--ui5wcrSplitterSize)',

        '& $icon': {
          left: 'calc(50% - 8px)',

          '&:before, &:after': {
            top: 0,
            width: '4rem',
            height: '0.0625rem',
            margin: '0.5rem 0',
            boxSizing: 'border-box',
            transition: 'width 0.15s ease-in'
          },
          '&:before': {
            right: '1.5rem',
            background: `linear-gradient(to left, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
          },
          '&:after': {
            left: '1.5rem',
            background: `linear-gradient(to right, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
          }
        },

        '&:hover': {
          '& $icon': {
            '&:before, &:after': {
              width: `calc(var(--ui5wcrSplitterSize) / 2 - 16px)`
            }
          }
        }
      }
    },
    icon: {
      position: 'absolute',
      '&:before, &:after': {
        content: '""',
        position: 'absolute'
      }
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
  const splitterRef = useConsolidatedRef<HTMLDivElement>(ref);
  const start = useRef(null);

  const previousSiblingSize = useRef<number>(null);
  const nextSiblingSize = useRef<number>(null);

  const positionKeys = orientation === 'vertical' ? verticalPositionInfo : horizontalPositionInfo;
  const styleKeys = orientation === 'vertical' ? verticalStyle : horiontalStyle;
  // const gripIconClass = orientation === 'vertical' ? classes.gripIconVertical : classes.gripIconHorizontal;

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
      const previousSibling = splitterRef.current.previousSibling;
      const nextSibling = splitterRef.current.nextSibling;
      const sizeDiv = e[`client${positionKeys.position}`] - start.current;

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

  const handleMoveSplitterStart: TouchEventHandler | MouseEventHandler = (e) => {
    e.preventDefault();
    previousSiblingSize.current = (splitterRef.current.previousSibling as HTMLElement).getBoundingClientRect()?.[
      positionKeys.size
    ];
    nextSiblingSize.current = (splitterRef.current.nextSibling as HTMLElement).getBoundingClientRect()?.[
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

  useEffect(() => {
    const splitterPos = splitterRef.current?.getBoundingClientRect()?.[positionKeys.start];

    if (!isPrevCollapsed && splitterPos < isPreviousSiblingRect?.[positionKeys.start]) {
      setIsDragging(false);
      setIsPrevCollapsed(true);
    }

    if (
      !isMinPrevCollapsed &&
      isPreviousSiblingRect?.[styleKeys.current] === Number(isPreviousSiblingStyle?.[styleKeys.min].replace('px', ''))
    ) {
      setIsDragging(false);
      setIsMinPrevCollapsed(true);
    }

    if (
      !isMaxPrevCollapsed &&
      Math.round(isPreviousSiblingRect?.[styleKeys.current]) ===
        Number(isPreviousSiblingStyle?.[styleKeys.max].replace('px', ''))
    ) {
      setIsDragging(false);
      setIsMaxPrevCollapsed(true);
    }

    if (!isPostCollapsed && splitterPos > isNextSiblingRect?.[positionKeys.end] - 16) {
      setIsDragging(false);
      setIsPostCollapsed(true);
    }

    if (
      !isMinPostCollapsed &&
      Math.round(isNextSiblingRect?.[styleKeys.current]) ===
        Math.round(Number(isNextSiblingStyle?.[styleKeys.min].replace('px', '')))
    ) {
      setIsDragging(false);
      setIsMinPostCollapsed(true);
    }

    if (
      !isMaxPostCollapsed &&
      Math.round(isNextSiblingRect?.[styleKeys.current]) ===
        Math.round(Number(isNextSiblingStyle?.[styleKeys.max].replace('px', '')))
    ) {
      setIsDragging(false);
      setIsMaxPostCollapsed(true);
    }

    if (isPostCollapsed && isNextSiblingRect?.[positionKeys.end] - 16 - splitterPos > 5) {
      setIsPostCollapsed(false);
    }

    if (
      isMinPostCollapsed &&
      Math.round(isNextSiblingRect?.[styleKeys.current]) -
        Math.round(Number(isNextSiblingStyle?.[styleKeys.min].replace('px', ''))) >
        1
    ) {
      setIsMinPostCollapsed(false);
    }

    if (
      isMaxPostCollapsed &&
      Math.round(Number(isNextSiblingStyle?.[styleKeys.max].replace('px', ''))) -
        Math.round(isNextSiblingRect?.[styleKeys.current]) >
        5
    ) {
      setIsMaxPostCollapsed(false);
    }

    if (isPrevCollapsed && splitterPos - isPreviousSiblingRect?.[positionKeys.start] > 5) {
      setIsPrevCollapsed(false);
    }

    if (
      isMinPrevCollapsed &&
      isPreviousSiblingRect?.[styleKeys.current] - Number(isPreviousSiblingStyle?.[styleKeys.min].replace('px', '')) > 5
    ) {
      setIsMinPrevCollapsed(false);
    }

    if (
      isMaxPrevCollapsed &&
      Number(isPreviousSiblingStyle?.[styleKeys.max].replace('px', '')) -
        Math.round(isPreviousSiblingRect?.[styleKeys.current]) >
        1
    ) {
      setIsMaxPrevCollapsed(false);
    }
  }, [splitterRef.current?.getBoundingClientRect()?.[positionKeys.start], isDragging]);

  return (
    <div
      className={classes.splitter}
      onTouchStart={handleMoveSplitterStart}
      onMouseDown={handleMoveSplitterStart}
      ref={splitterRef}
      role="separator"
      data-splitter-orientation={orientation}
      style={
        {
          '--ui5wcrSplitterSize': orientation === 'vertical' ? props.height : props.width
        } as CSSProperties
      }
    >
      <Icon className={classes.icon} name={orientation === 'vertical' ? 'vertical-grip' : 'horizontal-grip'} />
    </div>
  );
});

Splitter.displayName = 'Splitter';

export { Splitter };
