import { debounce } from '@ui5/webcomponents-react-base';
import { useEffect, useRef } from 'react';

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

type useOnColumnResizeFunc = (e: {
  columnWidth: number;
  instance: Record<string, any>;
  header: Record<string, any>;
}) => void;

/**
 * Plugin Hook for firing an event when a column is resized.
 *
 * @param {event} callback Fired when the column is resized by dragging the "Resizer".
 * @param {Object=} options Additional options.
 * @param {number=} options.wait If `liveUpdate` is `true`, the resize function will fire every time the width has changed depending on the `options.wait` delay.
 * @param {boolean=} options.liveUpdate The number of milliseconds for which the calls are to be delayed. Defaults to `100`.
 */
export const useOnColumnResize = (callback: useOnColumnResizeFunc, options?: useOnColumnResizeOptions) => {
  const debouncedEvent = debounce(callback, options?.wait ?? 100);
  const useGetResizerProps = (props, { header, instance }) => {
    const updatingColumnWidth = instance.state.columnResizing?.columnWidths[header.id];
    const prevHeaderIsResizing = useRef(undefined);
    const eventParams = { columnWidth: updatingColumnWidth, instance, header };

    useEffect(() => {
      if (updatingColumnWidth && options?.liveUpdate) {
        debouncedEvent(eventParams);
      }
      return () => {
        debouncedEvent.cancel();
      };
    }, [updatingColumnWidth, options?.liveUpdate, eventParams]);

    useEffect(() => {
      if (!options?.liveUpdate) {
        if (!header.isResizing && prevHeaderIsResizing.current) {
          callback(eventParams);
          prevHeaderIsResizing.current = false;
        }
        if (header.isResizing) {
          prevHeaderIsResizing.current = true;
        }
      }
    }, [header.isResizing, options?.liveUpdate, eventParams]);

    return props;
  };

  const useOnColumnResizeHooks = (hooks) => {
    hooks.getResizerProps.push(useGetResizerProps);
  };

  useOnColumnResizeHooks.pluginName = 'useOnColumnResize';

  return useOnColumnResizeHooks;
};
