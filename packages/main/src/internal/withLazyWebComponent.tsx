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
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
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

class ComponentImplementations {
  private static implementations = new Map();

  static setImplementation(name, impl) {
    ComponentImplementations.implementations.set(name, impl);
  }

  static getImplementation(name) {
    return ComponentImplementations.implementations.get(name);
  }

  static getMetadataFor(name): Ui5WebComponentMetadata {
    if (ComponentImplementations.implementations.has(name)) {
      return ComponentImplementations.getImplementation(name).getMetadata();
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
      },
      getTag(): string {
        return `ui5-${name.toLowerCase()}`;
      }
    };
  }

  static getAllPropertiesFor(name) {
    return ComponentImplementations.getMetadataFor(name).getProperties();
  }

  static getBooleansFor(name) {
    return Object.entries(ComponentImplementations.getMetadataFor(name).getProperties())
      .filter(([key, value]) => value.type === Boolean)
      .map(([key]) => key);
  }

  static getSlotsFor(name) {
    return Object.keys(ComponentImplementations.getMetadataFor(name).getSlots());
  }

  static getEventsFor(name) {
    return Object.keys(ComponentImplementations.getMetadataFor(name).getEvents() || {});
  }
}

const createEventWrapperFor = (WebComponentName, eventIdentifier, eventHandler) => (e) => {
  let payload = Object.keys(ComponentImplementations.getAllPropertiesFor(WebComponentName)).reduce((acc, val) => {
    if (/^_/.test(val)) {
      return acc;
    }
    acc[val] = e.target[toKebabCase(val)];
    return acc;
  }, {});

  const eventMeta = ComponentImplementations.getMetadataFor(WebComponentName).getEvents()[eventIdentifier] || {};

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

export function withLazyWebComponent<T>(
  WebComponentName,
  importer
): RefForwardingComponent<Ui5DomRef, T & WithWebComponentPropTypes> {
  if (typeof window !== 'undefined') {
    importer().then((impl: any) => {
      ComponentImplementations.setImplementation(WebComponentName, impl.default);
    });
  }

  const WithWebComponent = React.forwardRef((props: T & WithWebComponentPropTypes, wcRef: RefObject<Ui5DomRef>) => {
    const { className = '' } = props;

    const [isDefined, setIsDefined] = useState(typeof window !== 'undefined');
    const eventRegistry = useRef({});
    const eventRegistryWrapped = useRef({});
    const localWcRef = useConsolidatedRef<HTMLElement>(wcRef);

    const CustomTag = ComponentImplementations.getMetadataFor(WebComponentName).getTag();

    const getBooleanProps = () => {
      return ComponentImplementations.getBooleansFor(WebComponentName).reduce((acc, key) => {
        if (props[key]) {
          acc[toKebabCase(key)] = true;
        }
        return acc;
      }, {});
    };

    const bindEvents = () => {
      const knownEvents = ComponentImplementations.getEventsFor(WebComponentName);
      knownEvents.forEach((eventIdentifier) => {
        const alternativeKey = 'on' + capitalizeFirstLetter(eventIdentifier);
        const eventHandler = props[eventIdentifier] || props[alternativeKey];
        if (typeof eventHandler === 'function' && eventRegistry.current[alternativeKey] !== eventHandler) {
          if (eventRegistry.current[alternativeKey]) {
            localWcRef.current.removeEventListener(eventIdentifier, eventRegistryWrapped.current[alternativeKey]);
          }
          eventRegistryWrapped.current[alternativeKey] = createEventWrapperFor(
            WebComponentName,
            eventIdentifier,
            eventHandler
          );
          localWcRef.current.addEventListener(eventIdentifier, eventRegistryWrapped.current[alternativeKey]);
          eventRegistry.current[alternativeKey] = eventHandler;
        } else if (eventRegistry.current[alternativeKey] && !eventHandler) {
          localWcRef.current.removeEventListener(eventIdentifier, eventRegistryWrapped.current[alternativeKey]);
        }
      });
    };

    const getRegularProps = () => {
      if (localWcRef.current) {
        bindEvents();
      }

      const regularProps = {};
      const slotProps = {};

      Object.entries(props)
        .filter(([key]) => !ComponentImplementations.getBooleansFor(WebComponentName).includes(key))
        .filter(
          ([key]) =>
            !ComponentImplementations.getEventsFor(WebComponentName).some(
              (eventKey) => `on${capitalizeFirstLetter(eventKey)}` === key || key === eventKey
            )
        )
        .filter(([key]) => !propBlacklist[key])
        .forEach(([key, value]) => {
          if (ComponentImplementations.getSlotsFor(WebComponentName).includes(key)) {
            slotProps[key] = value;
          } else {
            regularProps[toKebabCase(key)] = value;
          }
        });

      return { regularProps, slotProps };
    };

    useEffect(() => {
      if (typeof window === 'undefined') {
        importer().then((impl: any) => {
          ComponentImplementations.setImplementation(WebComponentName, impl.default);
          setIsDefined(true);
        });
      }
    }, []);

    useEffect(() => {
      if (localWcRef.current && isDefined) {
        bindEvents();
      }
    }, [isDefined]);
    // render
    const { regularProps: passedProps, slotProps: actualSlotProps } = getRegularProps();

    const { children, tooltip, ...rest } = passedProps as T & WithWebComponentPropTypes;
    return (
      <CustomTag {...getBooleanProps()} ref={localWcRef} {...rest} title={tooltip} class={className}>
        {ComponentImplementations.getSlotsFor(WebComponentName).map((slot) => {
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

  if (ComponentImplementations.getImplementation(WebComponentName)) {
    WithWebComponent.displayName = `WithWebComponent(${
      ComponentImplementations.getImplementation(WebComponentName).name
    })`;
  }

  return WithWebComponent as RefForwardingComponent<Ui5DomRef, T & WithWebComponentPropTypes>;
}
