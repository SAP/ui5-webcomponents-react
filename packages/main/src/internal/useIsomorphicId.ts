import * as React from 'react';
import { getRandomId } from './getRandomId';

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
