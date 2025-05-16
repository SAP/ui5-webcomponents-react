'use client';

import type { RefObject, Ref, RefCallback } from 'react';
import { useCallback, useRef } from 'react';

/**
 * A React hook that synchronizes an external ref (callback or object ref) with an internal ref.
 *
 * @example
 * ```tsx
 * const MyComponent = forwardRef<HTMLDivElement, PropTypes>((props, ref) => {
 *   const [componentRef, localRef] = useSyncRef<HTMLDivElement>(ref);
 *
 *   useEffect(() => {
 *     // `localRef.current` is always the latest DOM node (or `null`)
 *     console.log('current node:', localRef.current);
 *   }, []);
 *
 *   return <div ref={componentRef}>Hello World!</div>;
 * });
 * ```
 *
 * @returns [componentRef, localRef]
 * A tuple containing:
 *   - `componentRef`: a stable callback ref to attach to React elements. When the node
 *      updates, it will forward the node to the external `ref` and update the internal one.
 *   - `localRef`: an internal, ref object that always holds the latest node for synchronous reads.
 */
export function useSyncRef<RefType = never>(ref: Ref<RefType>): [RefCallback<RefType>, RefObject<RefType | null>] {
  const localRef = useRef<RefType | null>(null);

  const componentRef = useCallback(
    (node) => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(node);
        }
        if ({}.hasOwnProperty.call(ref, 'current')) {
          (ref as RefObject<RefType>).current = node;
        }
      }
      localRef.current = node;
    },
    [ref],
  );

  return [componentRef, localRef];
}
