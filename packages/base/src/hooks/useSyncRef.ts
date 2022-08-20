import { MutableRefObject, Ref, RefCallback, useCallback, useRef } from 'react';

export function useSyncRef<RefType = any>(ref: Ref<RefType>): [RefCallback<RefType>, MutableRefObject<RefType>] {
  const localRef = useRef<RefType>(null);

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
