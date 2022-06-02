import * as React from 'react';
import { getRandomId } from './getRandomId';

export function useIsomorphicId(): string {
  if ('useId' in React) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return React.useId();
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const localId = React.useRef(getRandomId());
  return localId.current;
}
