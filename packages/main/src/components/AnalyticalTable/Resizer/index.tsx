import React, { RefObject, useCallback, useRef } from 'react';

const Resizer = (props) => {
  const { column } = props;
  const { key } = column.getHeaderProps();

  const parentWidth = useRef(0);
  const startX = useRef(0);
  const resizerRef: RefObject<HTMLDivElement> = useRef();
  const onColumnSizeChanged = props['onColumnSizeChanged'];

  const onResize = useCallback(
    (e) => {
      e.stopPropagation();
      const pageX = e.pageX;
      const newWidth = Math.max(parentWidth.current + pageX - startX.current, column.minWidth);
      onColumnSizeChanged({
        column,
        width: newWidth
      });
    },
    [column, parentWidth, key, startX, onColumnSizeChanged]
  );

  const onEndResize = useCallback(
    (e) => {
      e.stopPropagation();
      document.removeEventListener('mousemove', onResize);
      document.removeEventListener('mouseup', onEndResize);
      document.removeEventListener('mouseleave', onEndResize);

      delete resizerRef.current.parentElement.style.userSelect;
    },
    [onResize, resizerRef]
  );

  const onStartResize = useCallback(
    (e) => {
      e.stopPropagation();
      parentWidth.current = resizerRef.current.parentElement.getBoundingClientRect().width;
      startX.current = e.pageX;
      resizerRef.current.parentElement.style.userSelect = 'none';

      document.addEventListener('mousemove', onResize);
      document.addEventListener('mouseup', onEndResize);
      document.addEventListener('mouseleave', onEndResize);
    },
    [onResize, onEndResize, parentWidth, startX, resizerRef]
  );

  return (
    <div
      style={{ width: '16px', float: 'right', height: '100%', cursor: 'ew-resize' }}
      onMouseDown={onStartResize}
      ref={resizerRef}
    />
  );
};

Resizer.displayName = 'Resizer';

export { Resizer };
