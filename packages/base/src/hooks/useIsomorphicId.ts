import * as React from 'react';

function getRandomId() {
  if ('randomUUID' in crypto) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return crypto.randomUUID();
  }
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}

const canUseUseId = 'useId' in React;

export function useIsomorphicId(): string {
  if (canUseUseId) {
    // TODO might be fixed by https://github.com/webpack/webpack/issues/14814
    return Reflect.get(React, 'useId')();
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const localId = React.useRef(getRandomId());
  return localId.current;
}
