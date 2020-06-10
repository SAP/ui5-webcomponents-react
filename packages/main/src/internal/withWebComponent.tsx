import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import React, {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  Ref,
  RefForwardingComponent,
  RefObject,
  useEffect,
  useMemo,
  useRef
} from 'react';
import { CommonProps } from '../interfaces/CommonProps';
import { Ui5DomRef } from '../interfaces/Ui5DomRef';

const capitalizeFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const toKebabCase = (s: string) => s.replace(/([A-Z])/g, (a, b) => `-${b.toLowerCase()}`);
const snakeToCamel = (str) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());

export interface WithWebComponentPropTypes extends CommonProps, HTMLAttributes<HTMLElement> {
  ref?: Ref<any>;
  children?: any | void;
}

const createEventWrapperFor = (eventIdentifier, eventHandler) => (event) => {
  return eventHandler(event);
};

export const withWebComponent = <T extends {}>(
  TagName: string,
  regularProperties: string[],
  booleanProperties: string[],
  slotProperties: string[],
  eventProperties: string[]
) => {
  const WithWebComponent = forwardRef((props: T & WithWebComponentPropTypes, wcRef: RefObject<Ui5DomRef>) => {
    const { className, tooltip, children, ...rest } = props;

    const ref = useConsolidatedRef<HTMLElement>(wcRef);
    const eventRegistry = useRef({});
    const eventRegistryWrapped = useRef({});

    // regular props (no booleans, no slots and no events)
    const regularProps = useMemo(
      () => {
        return regularProperties.reduce((acc, val) => {
          if (rest.hasOwnProperty(val)) {
            return { ...acc, [toKebabCase(val)]: rest[val] };
          }
          return acc;
        }, {});
      },
      regularProperties.map((name) => rest[name])
    );

    // boolean properties - only attach if they are truthy
    const booleanProps = useMemo(
      () => {
        return booleanProperties.reduce((acc, val) => {
          if (rest[val] === true || rest[val] === 'true') {
            return { ...acc, [toKebabCase(val)]: true };
          }
          return acc;
        }, {});
      },
      booleanProperties.map((name) => rest[name])
    );

    const slots = useMemo(
      () => {
        return Object.entries(rest)
          .filter(([slotName]) => slotProperties.includes(slotName))
          .map(([slotName, slotValue]) => {
            return Children.map(
              slotValue?.type === React.Fragment ? slotValue.props.children : slotValue,
              (item: ReactElement, index) =>
                cloneElement(item, {
                  key: `${slotName}-${index}`,
                  slot: slotName
                })
            );
          });
      },
      slotProperties.map((name) => rest[name])
    );

    // event binding
    useEffect(
      () => {
        eventProperties.forEach((eventName) => {
          const eventHandler = rest[`on${capitalizeFirstLetter(snakeToCamel(eventName))}`];
          if (typeof eventHandler === 'function' && eventRegistry.current[eventName] !== eventHandler) {
            if (eventRegistry.current[eventName]) {
              ref.current.removeEventListener(eventName, eventRegistryWrapped.current[eventName]);
            }
            eventRegistryWrapped.current[eventName] = createEventWrapperFor(eventName, eventHandler);
            ref.current.addEventListener(eventName, eventRegistryWrapped.current[eventName]);
            eventRegistry.current[eventName] = eventHandler;
          } else if (eventRegistry.current[eventName] && !eventHandler) {
            ref.current.removeEventListener(eventName, eventRegistryWrapped.current[eventName]);
          }
        });
      },
      eventProperties.map((eventName) => rest[`on${capitalizeFirstLetter(snakeToCamel(eventName))}`])
    );

    // non web component related props, just pass them
    const nonWebComponentRelatedProps = Object.entries(rest)
      .filter(([key]) => !regularProperties.includes(key))
      .filter(([key]) => !slotProperties.includes(key))
      .filter(([key]) => !booleanProperties.includes(key))
      .filter(([key]) => !eventProperties.map((val) => `on${capitalizeFirstLetter(snakeToCamel(val))}`).includes(key))
      .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});

    return (
      // @ts-ignore
      <TagName
        ref={ref}
        {...booleanProps}
        {...regularProps}
        {...nonWebComponentRelatedProps}
        class={className}
        title={tooltip}
      >
        {slots}
        {children}
      </TagName>
    );
  });

  WithWebComponent.displayName = `WithWebComponent(${TagName})`;

  return (WithWebComponent as unknown) as RefForwardingComponent<Ui5DomRef, T & WithWebComponentPropTypes>;
};
