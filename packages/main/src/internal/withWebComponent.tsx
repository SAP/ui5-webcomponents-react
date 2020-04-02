import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { polyfillDeprecatedEventAPI } from '@ui5/webcomponents-react-base/lib/Utils';
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

const capitalizeFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const toKebabCase = (s: string) => s.replace(/([A-Z])/g, (a, b) => `-${b.toLowerCase()}`);

export interface WithWebComponentPropTypes extends CommonProps {
  ref?: Ref<any>;
  children?: any | void;
}

export const withWebComponent = <T extends any>(
  WebComponent
): RefForwardingComponent<Ui5DomRef, T & WithWebComponentPropTypes> => {
  const getWebComponentMetadata = (): Ui5WebComponentMetadata => {
    if (WebComponent) {
      return WebComponent.getMetadata();
    }

    return {
      metadata: {
        events: {}
      },
      getProperties: () => ({}),
      getPropertiesList: () => [],
      getSlots: () => ({}),
      getEvents: () => ({})
    };
  };

  const getBooleanPropsFromMetadata = (): string[] => {
    return Object.entries(getWebComponentMetadata().getProperties())
      .filter(([key, value]) => value.type === Boolean)
      .map(([key]) => key);
  };

  const getSlotsFromMetadata = (): string[] => {
    return Object.keys(getWebComponentMetadata().getSlots());
  };

  const getEventsFromMetadata = (otherProps = {}): string[] => {
    return Object.keys(getWebComponentMetadata().getEvents() || {})
      .filter((eventName) => !eventName.startsWith('_'))
      .concat(
        Object.keys(otherProps)
          .filter((key) => key.startsWith('on'))
          .map((key) => key.replace('on', '').toLowerCase())
      );
  };

  const createEventWrapperFor = (eventIdentifier, eventHandler) => (event) => {
    polyfillDeprecatedEventAPI(event);
    return eventHandler(event);
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

    const { className, ...otherProps } = props;

    useEffect(
      () => {
        getEventsFromMetadata(otherProps).forEach((eventName) => {
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
      getEventsFromMetadata(otherProps).map((eventName) => props[`on${capitalizeFirstLetter(eventName)}`])
    );

    const propsList = getWebComponentMetadata().getPropertiesList();

    const { regularProps: passedProps, slotProps: actualSlotProps } = Object.entries(otherProps)
      .filter(([key]) => !getBooleanPropsFromMetadata().includes(key))
      .filter(
        ([key]) => !getEventsFromMetadata(otherProps).some((eventKey) => `on${capitalizeFirstLetter(eventKey)}` === key)
      )
      .reduce(
        (acc, [key, value]) => {
          if (getSlotsFromMetadata().includes(key)) {
            acc.slotProps[key] = value;
          } else if (propsList.includes(key)) {
            acc.regularProps[toKebabCase(key)] = value;
          } else {
            acc.regularProps[key] = value;
          }
          return acc;
        },
        { regularProps: {}, slotProps: {} }
      );

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
};
