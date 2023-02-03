import { EffectCallback, useEffect } from 'react';

export function useServerSideEffect(effect: EffectCallback) {
  useEffect(effect, []);
}
