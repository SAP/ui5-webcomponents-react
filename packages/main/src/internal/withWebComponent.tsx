import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, {
  Children,
  cloneElement,
  ReactElement,
  Ref,
  RefForwardingComponent,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react';
import { CommonProps } from '../interfaces/CommonProps';
import { Ui5DomRef } from '../interfaces/Ui5DomRef';
import { Ui5WebComponentMetadata } from '../interfaces/Ui5WebComponentMetadata';

function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function toKebabCase(s: string) {
  return s.replace(/([A-Z])/g, (a, b) => `-${b.toLowerCase()}`);
}

const propBlacklist = {
  className: true
};

export interface WithWebComponentPropTypes extends CommonProps {
  ref?: Ref<any>;
  children?: any | void;
}

export function withWebComponent<T>(WebComponent): RefForwardingComponent<Ui5DomRef, T & WithWebComponentPropTypes> {
  const getWebComponentMetadata = (): Ui5WebComponentMetadata => {
    if (WebComponent) {
      return WebComponent.getMetadata();
    }

    return {
      metadata: {
        events: {}
      },
      getProperties() {
        return {};
      },
      getSlots() {
        return {};
      },
      getEvents() {
        return {};
      }
    };
  };

  const getBooleanPropsFromMetadata = () => {
    return Object.entries(getWebComponentMetadata().getProperties())
      .filter(([key, value]) => value.type === Boolean)
      .map(([key]) => key);
  };

  const getSlotsFromMetadata = () => {
    return Object.keys(getWebComponentMetadata().getSlots());
  };

  const getEventsFromMetadata = () => {
    return Object.keys(getWebComponentMetadata().getEvents() || {});
  };

  const createEventWrapperFor = (eventIdentifier, eventHandler) => (e) => {
    let payload = Object.keys(getWebComponentMetadata().getProperties()).reduce((acc, val) => {
      if (/^_/.test(val)) {
        return acc;
      }
      acc[val] = e.target[toKebabCase(val)];
      return acc;
    }, {});

    const eventMeta = getWebComponentMetadata().getEvents()[eventIdentifier] || {};

    payload = Object.keys(eventMeta).reduce((acc, val) => {
      if (val === 'detail' && e[val]) {
        return {
          ...acc,
          ...e[val]
        };
      }
      acc[val] = (e.detail && e.detail[val]) || e[val];
      return acc;
    }, payload);
    // TODO: Pass Web Component Ref in here?
    eventHandler(Event.of(null, e, payload));
  };

  const WithWebComponent = React.forwardRef((props: T & WithWebComponentPropTypes, wcRef: RefObject<Ui5DomRef>) => {
    const { className = '' } = props;

    const [_, setUpdateAfterMount] = useState(false);
    const eventRegistry = useRef({});
    const eventRegistryWrapped = useRef({});
    const localWcRef = useRef(null);

    const CustomTag = WebComponent.getMetadata().getTag();

    const getWcRef = () => wcRef || localWcRef;

    const getBooleanProps = () => {
      return getBooleanPropsFromMetadata().reduce((acc, key) => {
        if (props[key]) {
          acc[toKebabCase(key)] = true;
        }
        return acc;
      }, {});
    };

    const bindEvents = () => {
      const knownEvents = getEventsFromMetadata();
      knownEvents.forEach((eventIdentifier) => {
        const alternativeKey = 'on' + capitalizeFirstLetter(eventIdentifier);
        const eventHandler = props[eventIdentifier] || props[alternativeKey];
        if (typeof eventHandler === 'function' && eventRegistry.current[alternativeKey] !== eventHandler) {
          if (eventRegistry.current[alternativeKey]) {
            getWcRef().current.removeEventListener(eventIdentifier, eventRegistryWrapped.current[alternativeKey]);
          }
          eventRegistryWrapped.current[alternativeKey] = createEventWrapperFor(eventIdentifier, eventHandler);
          getWcRef().current.addEventListener(eventIdentifier, eventRegistryWrapped.current[alternativeKey]);
          eventRegistry.current[alternativeKey] = eventHandler;
        } else if (eventRegistry.current[alternativeKey] && !eventHandler) {
          getWcRef().current.removeEventListener(eventIdentifier, eventRegistryWrapped.current[alternativeKey]);
        }
      });
    };

    const getRegularProps = () => {
      if (getWcRef().current) {
        bindEvents();
      }

      const regularProps = {};
      const slotProps = {};

      Object.entries(props)
        .filter(([key]) => !getBooleanPropsFromMetadata().includes(key))
        .filter(
          ([key]) =>
            !getEventsFromMetadata().some(
              (eventKey) => `on${capitalizeFirstLetter(eventKey)}` === key || key === eventKey
            )
        )
        .filter(([key]) => !propBlacklist[key])
        .forEach(([key, value]) => {
          if (getSlotsFromMetadata().includes(key)) {
            slotProps[key] = value;
          } else {
            regularProps[toKebabCase(key)] = value;
          }
        });

      return { regularProps, slotProps };
    };

    useEffect(() => {
      if (getWcRef().current) {
        bindEvents();
      } else {
        setUpdateAfterMount(true);
      }
    }, []);

    // render
    const { regularProps: passedProps, slotProps: actualSlotProps } = getRegularProps();

    const { children, tooltip, ...rest } = passedProps as T & WithWebComponentPropTypes;
    return (
      <CustomTag {...getBooleanProps()} ref={getWcRef()} {...rest} title={tooltip} class={className}>
        {getSlotsFromMetadata().map((slot) => {
          if (actualSlotProps[slot]) {
            return Children.map(actualSlotProps[slot], (item: ReactElement<any>, index) =>
              cloneElement(item, {
                key: `${slot}-${index}`,
                slot: slot
              })
            );
          }
          return null;
        })}
        {children}
      </CustomTag>
    );
  });

  if (WebComponent) {
    WithWebComponent.displayName = `WithWebComponent(${WebComponent.name})`;
  }

  return WithWebComponent as RefForwardingComponent<Ui5DomRef, T & WithWebComponentPropTypes>;
}
