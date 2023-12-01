'use client';

import { debounce } from '@ui5/webcomponents-react-base';
import { useEffect, useRef } from 'react';
import type { ReactTableHooks } from '../types/index.js';

interface useOnColumnResizeOptions {
  /**
   * If `liveUpdate` is `true`, the resize function will fire every time the width has changed depending on the `options.wait` delay.
   */
  liveUpdate?: boolean;
  /**
   * The number of milliseconds for which the calls are to be delayed. __Defaults to `100`__.
   *
   * __Note:__ If `liveUpdate` is `true`, this option has no effect.
   */
  wait?: number;
}

type useOnColumnResizeFunc = (e: { columnWidth: number; header: Record<string, any> }) => void;

/**
 * Plugin Hook that adds a callback which is fired on column resize.
 *
 * @param {event} callback Fired when the column is resized by dragging the "Resizer".
 * @param {Object=} options Additional options.
 * @param {number=} options.wait If `liveUpdate` is `true`, the resize function will fire every time the width has changed depending on the `options.wait` delay.
 * @param {boolean=} options.liveUpdate The number of milliseconds for which the calls are to be delayed. Defaults to `100`.
 */
export const useOnColumnResize = (callback: useOnColumnResizeFunc, options?: useOnColumnResizeOptions) => {
  const debouncedEvent = debounce(callback, options?.wait ?? 100);

  const useInstance = (instance) => {
    const { state, columns } = instance;
    const { columnResizing } = state;
    const { isResizingColumn, columnWidths } = columnResizing;
    const prevHeaderIsResizing = useRef(undefined);

    useEffect(() => {
      if (isResizingColumn && options?.liveUpdate) {
        const currentHeader = columns.find((item) => item.id === isResizingColumn);
        debouncedEvent({
          columnWidth: columnWidths[isResizingColumn],
          header: currentHeader
        });
      }
    }, [columnResizing, options?.liveUpdate, columns]);

    useEffect(() => {
      if (options?.liveUpdate) {
        return () => debouncedEvent.cancel();
      }
    }, [options?.liveUpdate]);

    useEffect(() => {
      if (!options?.liveUpdate) {
        const currentHeader = columns.find((item) => item.id === prevHeaderIsResizing.current);
        if (isResizingColumn) {
          prevHeaderIsResizing.current = isResizingColumn;
        }
        if (!isResizingColumn && prevHeaderIsResizing.current) {
          callback({
            columnWidth: columnWidths[prevHeaderIsResizing.current],
            header: currentHeader
          });
        }
      }
    }, [columnResizing, options?.liveUpdate, columns]);
  };

  const useOnColumnResizeHooks = (hooks: ReactTableHooks) => {
    hooks.useFinalInstance.push(useInstance);
  };

  useOnColumnResizeHooks.pluginName = 'useOnColumnResize';

  return useOnColumnResizeHooks;
};
