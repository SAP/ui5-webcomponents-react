import { getEffectiveScopingSuffixForTag } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import { deprecationNotice, useSyncRef } from '@ui5/webcomponents-react-base';
import React, {
  Children,
  cloneElement,
  ComponentType,
  forwardRef,
  ReactElement,
  Ref,
  useEffect,
  useRef,
  useState
} from 'react';
import { CommonProps } from '../interfaces/CommonProps';
import { Ui5DomRef } from '../interfaces/Ui5DomRef';

const capitalizeFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const camelToKebabCase = (s: string) => s.replace(/([A-Z])/g, (a, b: string) => `-${b.toLowerCase()}`);
const kebabToCamelCase = (str: string) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());

const createEventPropName = (eventName) => `on${capitalizeFirstLetter(kebabToCamelCase(eventName))}`;

type EventHandler = (event: CustomEvent<unknown>) => void;

export interface WithWebComponentPropTypes {
  /**
   * Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.
   *
   * __Note:__ This adds a rendering cycle to your component.
   */
  waitForDefine?: boolean;
}

const definedWebComponents = new Set([]);

export const withWebComponent = <Props extends Record<string, any>, RefType = Ui5DomRef>(
  tagName: string,
  regularProperties: string[],
  booleanProperties: string[],
  slotProperties: string[],
  eventProperties: string[]
) => {
  // displayName will be assigned in the individual files
  // eslint-disable-next-line react/display-name
  const WithWebComponent = forwardRef((props: Props & WithWebComponentPropTypes, wcRef: Ref<RefType>) => {
    const { className, children, waitForDefine, ...rest } = props;
    //@ts-ignore
    const [componentRef, ref] = useSyncRef<HTMLElement>(wcRef);
    const eventRegistry = useRef<Record<string, EventHandler>>({});
    const tagNameSuffix: string = getEffectiveScopingSuffixForTag(tagName);
    const Component = (tagNameSuffix ? `${tagName}-${tagNameSuffix}` : tagName) as unknown as ComponentType<
      CommonProps & { class: string }
    >;

    const [isDefined, setIsDefined] = useState(definedWebComponents.has(Component));

    // regular props (no booleans, no slots and no events)
    const regularProps = regularProperties.reduce((acc, name) => {
      if (rest.hasOwnProperty(name)) {
        return { ...acc, [camelToKebabCase(name)]: rest[name] };
      }
      return acc;
    }, {});

    // boolean properties - only attach if they are truthy
    const booleanProps = booleanProperties.reduce((acc, name) => {
      if (rest[name] === true || rest[name] === 'true') {
        return { ...acc, [camelToKebabCase(name)]: true };
      }
      return acc;
    }, {});

    const slots = slotProperties.reduce((acc, name) => {
      const slotValue = rest[name] as ReactElement;

      if (!slotValue) return acc;

      const slottedChildren = [];
      let index = 0;
      const removeFragments = (element) => {
        if (!element) return;
        if (element.type === React.Fragment) {
          Children.toArray(element.props?.children)
            .filter(Boolean)
            .forEach((item) => {
              removeFragments(item);
            });
        } else {
          slottedChildren.push(
            cloneElement(element, {
              key: `${name}-${index}`,
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
    useEffect(() => {
      if (!waitForDefine || isDefined) {
        eventProperties.forEach((eventName) => {
          const eventHandler = rest[createEventPropName(eventName)] as EventHandler;
          if (typeof eventHandler === 'function') {
            eventRegistry.current[eventName] = eventHandler;
            ref.current?.addEventListener(eventName, eventRegistry.current[eventName]);
          }
        });

        return () => {
          // eslint-disable-next-line guard-for-in
          for (const eventName in eventRegistry.current) {
            ref.current?.removeEventListener(eventName, eventRegistry.current[eventName]);
          }
        };
      }
    }, [...eventProperties.map((eventName) => rest[createEventPropName(eventName)]), isDefined, waitForDefine]);

    // non web component related props, just pass them
    const nonWebComponentRelatedProps = Object.entries(rest)
      .filter(([key]) => !regularProperties.includes(key))
      .filter(([key]) => !slotProperties.includes(key))
      .filter(([key]) => !booleanProperties.includes(key))
      .filter(([key]) => !eventProperties.map((eventName) => createEventPropName(eventName)).includes(key))
      .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});

    useEffect(() => {
      if (waitForDefine && !isDefined) {
        customElements.whenDefined(Component as unknown as string).then(() => {
          setIsDefined(true);
          definedWebComponents.add(Component);
        });
      }
    }, [Component, waitForDefine, isDefined]);
    if (waitForDefine && !isDefined) {
      return null;
    }

    return (
      <Component
        ref={componentRef}
        {...booleanProps}
        {...regularProps}
        {...nonWebComponentRelatedProps}
        class={className}
      >
        {slots}
        {children}
      </Component>
    );
  });

  return WithWebComponent;
};
