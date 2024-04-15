import { useStylesheet, useI18nBundle } from '@ui5/webcomponents-react-base';
import type { MutableRefObject } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { DRAG_TO_RESIZE } from '../../i18n/i18n-defaults.js';
import { useCanRenderPortal } from '../../internal/ssr.js';
import { classNames, styleData } from './VerticalResizer.module.css.js';

interface VerticalResizerProps {
  analyticalTableRef: MutableRefObject<any>;
  dispatch: (e: { type: string; payload?: any }) => void;
  extensionsHeight: number;
  internalRowHeight: number;
  hasPopInColumns: boolean;
  popInRowHeight: number;
  portalContainer: Element;
  rowsLength: number;
  visibleRows: number;
  handleOnLoadMore: (e: Event) => void;
}

const isTouchEvent = (e, touchEvent) => {
  if (e.type === touchEvent) {
    return !(e.touches && e.touches.length > 1);
  }
  return false;
};

export const VerticalResizer = (props: VerticalResizerProps) => {
  const {
    analyticalTableRef,
    dispatch,
    extensionsHeight,
    internalRowHeight,
    hasPopInColumns,
    popInRowHeight,
    portalContainer,
    rowsLength,
    visibleRows,
    handleOnLoadMore
  } = props;

  useStylesheet(styleData, VerticalResizer.displayName);

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

  const isInitial = useRef(true);
  useEffect(() => {
    if (!isInitial.current && rowsLength <= visibleRows) {
      handleOnLoadMore({ type: 'tableGrow' } as Event);
    }
    isInitial.current = false;
  }, [rowsLength, visibleRows]);

  const canRenderPortal = useCanRenderPortal();
  if (!canRenderPortal) {
    return null;
  }

  return (
    <div
      className={classNames.container}
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
            className={classNames.resizer}
            style={{ top: resizerPosition.top, left: resizerPosition.left, width: resizerPosition.width }}
          />,
          portalContainer ?? document.body
        )}
    </div>
  );
};

VerticalResizer.displayName = 'VerticalResizer';
