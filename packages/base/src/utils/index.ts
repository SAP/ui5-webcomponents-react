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
  detail: Detail & { nativeDetail?: number };
};

export const enrichEventWithDetails = <
  Event extends { detail?: number | Record<string, unknown> | null },
  Detail extends Record<string, unknown>
>(
  event: Event,
  payload: Detail
): EnrichedEventType<Event, Detail> => {
  // Determine if we need to create a new details object
  const shouldCreateNewDetails =
    event.detail === null || event.detail === undefined || typeof event.detail !== 'object';

  // native detail is always number (if available)
  const nativeDetail = typeof event.detail === 'number' ? event.detail : null;

  // defineProperty is necessary here as event.detail needs to be editable
  Object.defineProperty<Event>(event, 'detail', {
    value: shouldCreateNewDetails ? {} : event.detail,
    writable: true,
    configurable: true
  });

  if (nativeDetail) {
    Object.assign(event.detail!, { nativeDetail });
  }
  Object.assign(event.detail!, payload);

  return event as EnrichedEventType<Event, Detail>;
};

export { debounce } from './debounce.js';
export { throttle } from './throttle.js';
