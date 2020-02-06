import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import React, {
  Children,
  cloneElement,
  ReactElement,
  Ref,
  RefForwardingComponent,
  RefObject,
  useEffect,
  useRef
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

const REACT_SPECIFIC_ATTRIBUTES = ['className'];

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

  const getBooleanPropsFromMetadata = (): Array<string> => {
    return Object.entries(getWebComponentMetadata().getProperties())
      .filter(([key, value]) => value.type === Boolean)
      .map(([key]) => key);
  };

  const getSlotsFromMetadata = (): Array<string> => {
    return Object.keys(getWebComponentMetadata().getSlots());
  };

  const getEventsFromMetadata = (): Array<string> => {
    return Object.keys(getWebComponentMetadata().getEvents() || {}).filter((eventName) => !eventName.startsWith('_'));
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
    const eventRegistry = useRef({});
    const eventRegistryWrapped = useRef({});

    const CustomTag = WebComponent.getMetadata().getTag();
    const ref = useConsolidatedRef<HTMLDivElement>(wcRef);

    const getBooleanProps = () => {
      return getBooleanPropsFromMetadata().reduce((acc, key) => {
        if (props[key]) {
          acc[toKebabCase(key)] = true;
        }
        return acc;
      }, {});
    };

    useEffect(
      () => {
        getEventsFromMetadata().forEach((eventName) => {
          const eventPropName = 'on' + capitalizeFirstLetter(eventName);
          const eventHandler = props[eventPropName];

          if (typeof eventHandler === 'function' && eventRegistry.current[eventPropName] !== eventHandler) {
            if (eventRegistry.current[eventPropName]) {
              ref.current.removeEventListener(eventName, eventRegistryWrapped.current[eventPropName]);
            }
            eventRegistryWrapped.current[eventPropName] = createEventWrapperFor(eventName, eventHandler);
            ref.current.addEventListener(eventName, eventRegistryWrapped.current[eventPropName]);
            eventRegistry.current[eventPropName] = eventHandler;
          } else if (eventRegistry.current[eventPropName] && !eventHandler) {
            ref.current.removeEventListener(eventName, eventRegistryWrapped.current[eventPropName]);
          }
        });
      },
      getEventsFromMetadata().map((eventName) => props[`on${capitalizeFirstLetter(eventName)}`])
    );

    const { className, ...otherProps } = props;

    const getRegularProps = () => {
      return Object.entries(otherProps)
        .filter(([key]) => !getBooleanPropsFromMetadata().includes(key))
        .filter(([key]) => !getEventsFromMetadata().some((eventKey) => `on${capitalizeFirstLetter(eventKey)}` === key))
        .reduce(
          (acc, [key, value]) => {
            if (getSlotsFromMetadata().includes(key)) {
              acc.slotProps[key] = value;
            } else {
              acc.regularProps[REACT_SPECIFIC_ATTRIBUTES.includes(key) ? key : toKebabCase(key)] = value;
            }
            return acc;
          },
          { regularProps: {}, slotProps: {} }
        );
    };

    // render
    const { regularProps: passedProps, slotProps: actualSlotProps } = getRegularProps();

    const { children, tooltip, ...rest } = passedProps as T & WithWebComponentPropTypes;
    return (
      <CustomTag {...getBooleanProps()} ref={ref} {...rest} class={className} title={tooltip}>
        {Object.entries(actualSlotProps).map(([slotName, slotValue]) => {
          return Children.map(slotValue, (item: ReactElement<any>, index) =>
            cloneElement(item, {
              key: `${slotName}-${index}`,
              slot: slotName
            })
          );
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
