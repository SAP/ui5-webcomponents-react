import type { SyntheticEvent } from 'react';

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

// Define EnrichedEventType to extend Event with specific detail structure
type EnrichedEventType<Event, Detail> = Event & {
  //   todo check if `null` is necessary
  detail: Detail & { nativeDetail: number | null };
};

export const enrichEventWithDetails = <
  Event extends { detail?: number | Record<string, unknown> | null },
  Detail extends Record<string, unknown>
>(
  event: Event,
  payload: Detail
): EnrichedEventType<Event, Detail> => {
  // the helper accepts both SyntheticEvents and browser events
  const syntheticEventCast = event as unknown as SyntheticEvent;
  // todo: once we drop React 16 support, remove this
  if (typeof syntheticEventCast.persist === 'function') {
    // if there is a persist method, it's a SyntheticEvent so we need to persist it
    syntheticEventCast.persist();
  }

  // Determine if we need to create a new details object
  const shouldCreateNewDetails =
    event.detail === null || event.detail === undefined || typeof event.detail !== 'object';

  // native detail is always number (if available)
  const nativeDetail = typeof event.detail === 'number' ? event.detail : null;

  // Merge existing detail with payload
  if (shouldCreateNewDetails) {
    event.detail = { nativeDetail, ...payload };
  } else {
    const detail = event.detail as Record<string, unknown>;
    event.detail = { ...detail, ...payload };
  }

  // Return enriched event
  return event as EnrichedEventType<Event, Detail>;
};

export { debounce } from './debounce.js';
export { throttle } from './throttle.js';
