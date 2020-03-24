import { UIEvent } from 'react';

export const deprecationNotice = (component: string, message: string) => {
  const value = `*** ui5-webcomponents-react Deprecation Notice - ${component} ***\n`;
  // eslint-disable-next-line no-console
  console.warn(`${value}${message}`);
};

export const getScrollBarWidth = () => {
  const inner = document.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '200px';

  const outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '200px';
  outer.style.height = '150px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);

  document.body.appendChild(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  let w2 = inner.offsetWidth;

  if (w1 === w2) {
    w2 = outer.clientWidth;
  }

  document.body.removeChild(outer);
  return w1 - w2;
};

export const polyfillDeprecatedEventAPI = (event: any) => {
  event.getOriginalEvent = () => {
    deprecationNotice(
      'Event',
      "'event.getOriginalEvent' is deprecated and will be removed in the next major release. Please use the event object itself instead."
    );
    return event;
  };
  event.getParameters = () => {
    deprecationNotice(
      'Event',
      "'event.getParameters' is deprecated and will be removed in the next major release. Please use 'event.detail' instead."
    );
    return event.detail;
  };
  event.getParameter = (parameter: keyof typeof event.detail) => {
    deprecationNotice(
      'Event',
      "'event.getParameter' is deprecated and will be removed in the next major release. Please use 'event.detail[parameter]' instead."
    );
    return event.detail[parameter];
  };
  event.getHtmlSourceElement = () => {
    deprecationNotice(
      'Event',
      "'event.getHtmlSourceElement' is deprecated and will be removed in the next major release. Please use 'event.target' instead."
    );
    return event.target;
  };

  event.parameters = new Proxy(
    {},
    {
      get: (obj, prop) => {
        deprecationNotice(
          'Event',
          "'event.parameters' is deprecated and will be removed in the next major release. Please use 'event.detail' instead."
        );
        return event.detail[prop];
      }
    }
  );

  return event;
};

export const enrichEventWithDetails = <T = {}>(event: UIEvent, payload: T = {} as any) => {
  if (event.hasOwnProperty('persist')) {
    // if there is a persist method, it's an SyntheticEvent so we need to persist it
    event.persist();
  }
  if (!event.hasOwnProperty('detail')) {
    Object.defineProperty(event, 'detail', { value: {}, writable: true });
  }
  Object.assign(event.detail, payload);
  // "polyfill" old features
  polyfillDeprecatedEventAPI(event);
  return (event as unknown) as CustomEvent<T>;
};
