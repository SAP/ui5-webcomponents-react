'use client';

import type { MutableRefObject, Ref, RefCallback } from 'react';
import { useCallback, useRef } from 'react';

export function useSyncRef<RefType = never>(
  ref: Ref<RefType>
): [RefCallback<RefType>, MutableRefObject<RefType | null>] {
  const localRef = useRef<RefType | null>(null);

  const componentRef = useCallback(
    (node) => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(node);
        }
        if ({}.hasOwnProperty.call(ref, 'current')) {
          (ref as MutableRefObject<RefType>).current = node;
        }
      }
      localRef.current = node;
    },
    [ref]
  );

  return [componentRef, localRef];
}
