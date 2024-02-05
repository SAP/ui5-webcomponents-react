import type { UIEvent } from 'react';

export const deprecationNotice = (component: string, message: string) => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    const value = `*** ui5-webcomponents-react Deprecation Notice - ${component} ***\n`;
    // eslint-disable-next-line no-console
    if (console && console.warn) {
      // eslint-disable-next-line no-console
      console.warn(`${value}${message}`);
    }
  }
};

export const enrichEventWithDetails = <T extends Record<string, unknown>, ReturnType = CustomEvent<T>>(
  event: UIEvent,
  payload: T | null = null
) => {
  // safeguard
  if (!event) {
    return event;
  }
  if (event.hasOwnProperty('persist')) {
    // if there is a persist method, it's an SyntheticEvent so we need to persist it
    event.persist();
  }

  const shouldCreateNewDetails =
    event.detail === null || event.detail === undefined || typeof event.detail !== 'object';
  Object.defineProperty(event, 'detail', {
    value: shouldCreateNewDetails ? {} : event.detail,
    writable: true,
    configurable: true
  });
  Object.assign(event.detail, payload);
  return event as unknown as ReturnType;
};

export { debounce } from './debounce.js';
export { throttle } from './throttle.js';
