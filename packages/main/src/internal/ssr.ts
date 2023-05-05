import type { EffectCallback } from 'react';
import { useEffect, useState } from 'react';

export function useServerSideEffect(effect: EffectCallback) {
  useEffect(effect, []);
}

export function useCanRenderPortal() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(true);
  }, []);

  return allowed;
}
