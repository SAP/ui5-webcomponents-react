'use client';

import { debounce } from '@ui5/webcomponents-react-base/utils';
import type { MouseEvent, TouchEvent } from 'react';
import { useEffect, useRef } from 'react';
import { getProjectedWidth } from '../hooks/useColumnResizing.js';
import type { AnalyticalTablePluginHookOptions, ColumnType, ReactTableHooks, TableInstance } from '../types/index.js';

interface useOnColumnResizeOptions extends AnalyticalTablePluginHookOptions {
  /**
   * If `liveUpdate` is `true`, the resize function will fire while the resizer is being dragged according to the `options.wait` delay.
   */
  liveUpdate?: boolean;
  /**
   * The number of milliseconds for which the calls are to be delayed. __Defaults to `100`__.
   *
   * __Note:__ If `liveUpdate` is `true`, this option has no effect.
   */
  wait?: number;
}

type useOnColumnResizeFunc = (e: { columnWidth: number; header: ColumnType }) => void;

/**
 * Plugin Hook that adds a callback which is fired on column resize.
 *
 * @param {event} callback Fired when the column is resized by dragging the "Resizer".
 * @param {Object=} options Additional options.
 * @param {number=} options.wait If `liveUpdate` is `true`, the resize function will fire every time the width has changed depending on the `options.wait` delay.
 * @param {boolean=} options.liveUpdate The number of milliseconds for which the calls are to be delayed. Defaults to `100`.
 * @param {boolean=} options.disabled If `true`, the hook does nothing. To toggle at runtime, re-create the hook at the same position in the (memoized) `tableHooks` array — never add or remove array entries. Defaults to `false`.
 */
export const useOnColumnResize = (callback: useOnColumnResizeFunc, options?: useOnColumnResizeOptions) => {
  const disabled = options?.disabled ?? false;
  const debouncedEvent = debounce(callback, options?.wait ?? 100);

  // for liveUpdate mousemove/touchmove listeners have to be added via getResizerProps to fire the callback. Number of calls is defined by debounce value `wait`.
  const getLiveResizerProps: ReactTableHooks['getResizerProps'][0] = (props, { instance, header }) => {
    return {
      ...props,
      onMouseDown: (e: MouseEvent<HTMLDivElement>) => {
        props.onMouseDown?.(e);
        const startClientX = e.clientX;
        const columnWidth = header.totalWidth;
        const columnId = header.id;

        const handleMouseMove = (moveEvent: globalThis.MouseEvent) => {
          const deltaX = moveEvent.clientX - startClientX;
          if (Math.abs(deltaX) < 3) {
            return;
          }
          const projectedWidth = getProjectedWidth(deltaX, columnWidth, instance.state.isRtl);
          const currentHeader = instance.columns.find((item: ColumnType) => item.id === columnId);
          debouncedEvent({ columnWidth: projectedWidth, header: currentHeader });
        };

        const handleMouseUp = () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      },
      onTouchStart: (e: TouchEvent<HTMLDivElement>) => {
        props.onTouchStart?.(e);
        if (e.touches && e.touches.length > 1) {
          return;
        }
        const startClientX = Math.round(e.touches[0].clientX);
        const columnWidth = header.totalWidth;
        const columnId = header.id;

        const handleTouchMove = (moveEvent: globalThis.TouchEvent) => {
          const deltaX = moveEvent.touches[0].clientX - startClientX;
          if (Math.abs(deltaX) < 3) {
            return;
          }
          const projectedWidth = getProjectedWidth(deltaX, columnWidth, instance.state.isRtl);
          const currentHeader = instance.columns.find((item: ColumnType) => item.id === columnId);
          debouncedEvent({ columnWidth: projectedWidth, header: currentHeader });
        };

        const handleTouchEnd = () => {
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
      },
    };
  };

  const useInstance = (instance: TableInstance) => {
    const { state, columns } = instance;
    const { columnResizing } = state;
    const { isResizingColumn, columnWidths } = columnResizing;
    const prevHeaderIsResizing = useRef<string | undefined>(undefined);

    useEffect(() => {
      if (!disabled && options?.liveUpdate) {
        return () => debouncedEvent.cancel();
      }
    }, []);

    useEffect(() => {
      if (!disabled && !options?.liveUpdate) {
        const currentHeader = columns.find((item: ColumnType) => item.id === prevHeaderIsResizing.current);
        if (isResizingColumn) {
          prevHeaderIsResizing.current = isResizingColumn;
        }
        if (!isResizingColumn && prevHeaderIsResizing.current) {
          callback({
            columnWidth: columnWidths[prevHeaderIsResizing.current],
            header: currentHeader,
          });
        }
      }
      // `disabled` changes via plugin re-registration, so it belongs in deps despite the rule's warning.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columnResizing, columns, isResizingColumn, columnWidths, disabled]);
  };

  const useOnColumnResizeHooks = (hooks: ReactTableHooks) => {
    hooks.useFinalInstance.push(useInstance);
    if (disabled) {
      return;
    }
    if (options?.liveUpdate) {
      hooks.getResizerProps.push(getLiveResizerProps);
    }
  };

  useOnColumnResizeHooks.pluginName = 'useOnColumnResize';

  return useOnColumnResizeHooks;
};
