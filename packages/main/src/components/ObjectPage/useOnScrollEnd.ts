import type { Dispatch, RefObject, SetStateAction, UIEventHandler } from 'react';
import { useCallback, useEffect, useRef } from 'react';

const isScrollEndAvailable = 'onscrollend' in document.createElement('div');

interface UseOnScrollEndProps {
  objectPageRef: RefObject<HTMLDivElement>;
  setTabSelectId: Dispatch<SetStateAction<string | null>>;
}

export function useOnScrollEnd(props: UseOnScrollEndProps) {
  const { objectPageRef, setTabSelectId } = props;

  const scrollEndTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Native scrollend listener
  useEffect(() => {
    const objectPage = objectPageRef.current;
    if (!objectPage || !isScrollEndAvailable) return;

    const onNativeScrollEnd = () => {
      setTabSelectId(null);
    };

    objectPage.addEventListener('scrollend', onNativeScrollEnd);
    return () => {
      objectPage.removeEventListener('scrollend', onNativeScrollEnd);
    };
  }, [objectPageRef]);

  // Fallback in onScroll
  const onObjectPageScroll: UIEventHandler<HTMLDivElement> = useCallback(() => {
    if (!isScrollEndAvailable) {
      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current);
      }
      scrollEndTimeout.current = setTimeout(() => {
        setTabSelectId(null);
      }, 100);
    }
  }, [setTabSelectId]);

  return onObjectPageScroll;
}
