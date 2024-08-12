'use client';

import { getEffectiveScopingSuffixForTag } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import { useIsomorphicLayoutEffect, useSyncRef } from '@ui5/webcomponents-react-base';
import type { ComponentType, ReactElement, ReactNode, Ref } from 'react';
import { cloneElement, forwardRef, Fragment, isValidElement, useEffect, useState, version } from 'react';
import type { CommonProps, Ui5DomRef } from '../types/index.js';
import { useServerSideEffect } from './ssr.js';
import { camelToKebabCase, capitalizeFirstLetter, kebabToCamelCase } from './utils.js';

const SEMVER_REGEX =
  /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

const createEventPropName = (eventName: string) => `on${capitalizeFirstLetter(kebabToCamelCase(eventName))}`;

const isPrimitiveAttribute = (value: unknown): boolean => {
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
};

type EventHandler = (event: CustomEvent<unknown>) => void;

export interface WithWebComponentPropTypes {
  /**
   * Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.
   *
   * __Note:__ This adds a rendering cycle to your component.
   */
  waitForDefine?: boolean;
}

const definedWebComponents = new Set<ComponentType>([]);

export const withWebComponent = <Props extends Record<string, any>, RefType = Ui5DomRef>(
  tagName: string,
  regularProperties: string[],
  booleanProperties: string[],
  slotProperties: string[],
  eventProperties: string[],
  loader: () => Promise<unknown>
) => {
  const reactMajorVersion = SEMVER_REGEX.exec(version)?.groups?.major;
  const webComponentsSupported = parseInt(reactMajorVersion) >= 19;
  // displayName will be assigned in the individual files
  // eslint-disable-next-line react/display-name
  return forwardRef<RefType, Props & WithWebComponentPropTypes>((props, wcRef) => {
    const { className, children, waitForDefine, ...rest } = props;
    const [componentRef, ref] = useSyncRef<RefType>(wcRef);
    const tagNameSuffix: string = getEffectiveScopingSuffixForTag(tagName);
    const Component = (tagNameSuffix ? `${tagName}-${tagNameSuffix}` : tagName) as unknown as ComponentType<
      CommonProps & { class?: string; ref?: Ref<RefType> }
    >;

    const [isDefined, setIsDefined] = useState(definedWebComponents.has(Component));

    useServerSideEffect(() => {
      void loader();
    });

    // regular props (no booleans, no slots and no events)
    const regularProps = regularProperties.reduce((acc, name) => {
      if (rest.hasOwnProperty(name) && isPrimitiveAttribute(rest[name])) {
        return { ...acc, [camelToKebabCase(name)]: rest[name] };
      }
      return acc;
    }, {});

    // boolean properties - only attach if they are truthy
    const booleanProps = booleanProperties.reduce((acc, name) => {
      if (webComponentsSupported) {
        return { ...acc, [camelToKebabCase(name)]: rest[name] };
      } else {
        if (rest[name] === true || rest[name] === 'true') {
          return { ...acc, [camelToKebabCase(name)]: true };
        }
        return acc;
      }
    }, {});

    const slots = slotProperties.reduce((acc, name) => {
      const slotValue = rest[name] as ReactElement;

      if (!slotValue) {
        return acc;
      }

      if (rest[name]?.$$typeof === Symbol.for('react.portal')) {
        console.warn('ReactPortal is not supported for slot props.');
        return acc;
      }

      const slottedChildren = [];
      let index = 0;
      const removeFragments = (element: ReactNode) => {
        if (!isValidElement(element)) return;
        if (element.type === Fragment) {
          const elementChildren = (element as ReactElement<{ children?: ReactNode | ReactNode[] }>).props?.children;
          if (Array.isArray(elementChildren)) {
            elementChildren.forEach((item) => {
              if (Array.isArray(item)) {
                item.forEach(removeFragments);
              } else {
                removeFragments(item);
              }
            });
          } else {
            removeFragments(elementChildren);
          }
        } else {
          slottedChildren.push(
            cloneElement<Partial<HTMLElement>>(element, {
              key: element.key ?? `${name}-${index}`,
              slot: name
            })
          );
          index++;
        }
      };

      if (Array.isArray(slotValue)) {
        slotValue.forEach((item) => {
          removeFragments(item);
        });
      } else {
        removeFragments(slotValue);
      }
      return [...acc, ...slottedChildren];
    }, []);

    // event binding
    useIsomorphicLayoutEffect(() => {
      if (webComponentsSupported) {
        return () => {
          // React can handle events
        };
      }
      const localRef = ref.current;
      const eventRegistry: Record<string, EventHandler> = {};
      if (!waitForDefine || isDefined) {
        eventProperties.forEach((eventName) => {
          const eventHandler = rest[createEventPropName(eventName)] as EventHandler;
          if (typeof eventHandler === 'function') {
            eventRegistry[eventName] = eventHandler;
            // @ts-expect-error: all custom events can be passed here, so `keyof HTMLElementEventMap` isn't sufficient
            localRef?.addEventListener(eventName, eventRegistry[eventName]);
          }
        });

        return () => {
          for (const eventName in eventRegistry) {
            // @ts-expect-error: all custom events can be passed here, so `keyof HTMLElementEventMap` isn't sufficient
            localRef?.removeEventListener(eventName, eventRegistry[eventName]);
          }
        };
      }
    }, [...eventProperties.map((eventName) => rest[createEventPropName(eventName)]), isDefined, waitForDefine]);

    const eventHandlers = eventProperties.reduce((events, eventName) => {
      const eventHandlerProp = rest[createEventPropName(eventName)];
      if (webComponentsSupported && eventHandlerProp) {
        events[`on${eventName}`] = eventHandlerProp;
      }
      return events;
    }, {});

    // non web component related props, just pass them
    const nonWebComponentRelatedProps = Object.entries(rest)
      .filter(([key]) => !regularProperties.includes(key))
      .filter(([key]) => !slotProperties.includes(key))
      .filter(([key]) => !booleanProperties.includes(key))
      .filter(([key]) => !eventProperties.map((eventName) => createEventPropName(eventName)).includes(key))
      .reduce((acc, [key, val]) => {
        if (!key.startsWith('aria-') && !key.startsWith('data-') && val === false) {
          return acc;
        }
        acc[key] = val;
        return acc;
      }, {});

    useEffect(() => {
      if (waitForDefine && !isDefined) {
        customElements.whenDefined(Component as unknown as string).then(() => {
          setIsDefined(true);
          definedWebComponents.add(Component);
        });
      }
    }, [Component, waitForDefine, isDefined]);

    const propsToApply = regularProperties.map((prop) => ({ name: prop, value: props[prop] }));
    useEffect(() => {
      void customElements.whenDefined(Component as unknown as string).then(() => {
        for (const prop of propsToApply) {
          if (prop.value != null && !isPrimitiveAttribute(prop.value)) {
            if (ref.current) {
              ref.current[prop.name] = prop.value;
            }
          }
        }
      });
    }, [Component, ...propsToApply]);

    if (waitForDefine && !isDefined) {
      return null;
    }

    return (
      <Component
        ref={componentRef}
        {...booleanProps}
        {...regularProps}
        {...eventHandlers}
        {...nonWebComponentRelatedProps}
        class={className}
        suppressHydrationWarning
      >
        {slots}
        {children}
      </Component>
    );
  });
};
