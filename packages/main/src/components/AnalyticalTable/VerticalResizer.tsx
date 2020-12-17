import { useI18nBundle } from '@ui5/webcomponents-react-base/lib/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { DRAG_TO_RESIZE } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';

const verticalResizerStyles = {
  container: {
    overflow: 'hidden',
    position: 'relative',
    height: '5px',
    textAlign: 'center',
    cursor: 'row-resize',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: ThemingParameters.sapContent_DragAndDropActiveColor,
      color: ThemingParameters.sapHighlightTextColor
    },
    '&:before': {
      fontSize: '10px',
      fontFamily: ThemingParameters.sapFontFamily,
      top: 0,
      position: 'absolute',
      content: '"\u2981\u2981\u2981\u2981"',
      lineHeight: '5px',
      pointerEvents: 'none'
    }
  },
  resizer: {
    position: 'absolute',
    opacity: 0.5,
    backgroundColor: ThemingParameters.sapContent_DragAndDropActiveColor,
    height: '5px'
  }
};

const useStyles = createUseStyles(verticalResizerStyles, { name: 'VerticalResizer' });

interface VerticalResizerProps {
  analyticalTableRef: MutableRefObject<any>;
  dispatch: (e: { type: string; payload?: any }) => void;
  extensionsHeight: number;
  internalRowHeight: number;
  hasPopInColumns: boolean;
  popInRowHeight: number;
}

const isTouchEvent = (e, touchEvent) => {
  if (e.type === touchEvent) {
    return !(e.touches && e.touches.length > 1);
  }
  return false;
};

export const VerticalResizer = (props: VerticalResizerProps) => {
  const { analyticalTableRef, dispatch, extensionsHeight, internalRowHeight, hasPopInColumns, popInRowHeight } = props;
  const classes = useStyles();
  const startY = useRef(null);
  const verticalResizerRef = useRef(null);
  const [resizerPosition, setResizerPosition] = useState(undefined);
  const [isDragging, setIsDragging] = useState(false);
  const [mountTouchEvents, setMountTouchEvents] = useState(false);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const handleResizeStart = useCallback(
    (e) => {
      e.preventDefault();
      const touchEvent = isTouchEvent(e, 'touchstart');
      startY.current = touchEvent ? Math.round(e.touches[0].pageY) : e.pageY;
      setMountTouchEvents(touchEvent);
      setIsDragging(true);
    },
    [startY.current, setIsDragging]
  );

  const handleMove = useCallback(
    (e) => {
      setResizerPosition((prev) => ({
        ...prev,
        top: isTouchEvent(e, 'touchmove') ? Math.round(e.touches[0].pageY) : e.pageY
      }));
    },
    [setResizerPosition]
  );
  const handleResizeEnd = useCallback(
    (e) => {
      setIsDragging(false);
      const rowCount = Math.floor(
        (analyticalTableRef.current.clientHeight +
          (isTouchEvent(e, 'touchend') ? Math.round(e.changedTouches[0].pageY) : e.pageY) -
          startY.current -
          extensionsHeight -
          5) /*resizer height*/ /
          popInRowHeight
      );
      if (hasPopInColumns) {
        dispatch({ type: 'INTERACTIVE_ROWS_HAVE_POPIN', payload: true });
      }
      dispatch({
        type: 'VISIBLE_ROWS',
        payload: { visibleRows: rowCount }
      });
    },
    [analyticalTableRef.current?.clientHeight, startY.current, extensionsHeight, internalRowHeight, dispatch]
  );
  useEffect(() => {
    const removeEventListeners = () => {
      if (mountTouchEvents) {
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleResizeEnd);
      } else {
        document.removeEventListener('mouseup', handleResizeEnd);
        document.removeEventListener('mousemove', handleMove);
      }
    };
    if (isDragging) {
      if (mountTouchEvents) {
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleResizeEnd);
      } else {
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleResizeEnd);
      }
    } else {
      removeEventListeners();
    }
    return () => {
      removeEventListeners();
    };
  }, [isDragging]);

  useEffect(() => {
    const resizerPosTop = verticalResizerRef.current?.getBoundingClientRect()?.top + window.scrollY;
    const resizerPosLeft = verticalResizerRef.current?.getBoundingClientRect()?.left + window.scrollX;
    const resizerPosWidth = verticalResizerRef.current?.getBoundingClientRect()?.width;
    if (!isDragging && resizerPosTop > 0) {
      setResizerPosition({ left: resizerPosLeft, top: resizerPosTop, width: resizerPosWidth });
    }
  }, [verticalResizerRef.current?.getBoundingClientRect()?.top, isDragging]);

  useEffect(() => {
    return () => {
      dispatch({ type: 'WITH_POPIN', payload: false });
    };
  }, []);

  return (
    <div
      className={classes.container}
      ref={verticalResizerRef}
      onMouseDown={handleResizeStart}
      onTouchStart={handleResizeStart}
      role="separator"
      title={i18nBundle.getText(DRAG_TO_RESIZE)}
    >
      {resizerPosition &&
        isDragging &&
        createPortal(
          <div
            className={classes.resizer}
            style={{ top: resizerPosition.top, left: resizerPosition.left, width: resizerPosition.width }}
          />,
          document.body
        )}
    </div>
  );
};
