import { MutableRefObject, Ref, RefCallback, RefObject, useRef } from 'react';

export function useSyncRef<RefType = any>(ref: Ref<RefType>): [RefCallback<RefType>, RefObject<RefType>] {
  const localRef = useRef<RefType>();

  const componentRef = (node) => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(node);
      }
      if ({}.hasOwnProperty.call(ref, 'current')) {
        (ref as MutableRefObject<RefType>).current = node;
      }
    }
    localRef.current = node;
  };

  return [componentRef, localRef];
}
