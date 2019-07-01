import { Event } from '@ui5/webcomponents-react-base';
import React, {
  Children,
  cloneElement,
  CSSProperties,
  MutableRefObject,
  ReactElement,
  Ref,
  RefForwardingComponent,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react';
import { Fiori3CommonProps } from '../interfaces/Fiori3CommonProps';
import { Ui5DomRef } from '../interfaces/Ui5DomRef';
import { Ui5WebComponentMetadata } from '../interfaces/Ui5WebComponentMetadata';

function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function toKebabCase(s: string) {
  return s.replace(/([A-Z])/g, (a, b) => `-${b.toLowerCase()}`);
}

const propBlacklist = {
  className: true,
  innerStyles: true
};

export interface WithWebComponentPropTypes extends Fiori3CommonProps {
  ref?: Ref<any>;
  children?: any | void;
  innerStyles?: CSSProperties;
}

export function withWebComponent<T>(WebComponent): RefForwardingComponent<Ui5DomRef, T & WithWebComponentPropTypes> {
  const getWebComponentMetadata = (): Ui5WebComponentMetadata => {
    if (WebComponent) {
      return WebComponent.getMetadata();
    }

    return {
      getProperties() {
        return {};
      },
      getEvents() {
        return {};
      },
      getSlots() {
        return {};
      }
    };
  };

  const getMetadataBooleans = () => {
    return Object.entries(getWebComponentMetadata().getProperties())
      .filter(([key, value]) => value.type === Boolean)
      .map(([key]) => key);
  };

  const createEventWrapperFor = (eventIdentifier, eventHandler) => (e) => {
    let payload = Object.keys(getWebComponentMetadata().getProperties()).reduce((acc, val) => {
      if (/^_/.test(val)) {
        return acc;
      }
      acc[val] = e.target[toKebabCase(val)];
      return acc;
    }, {});

    payload = Object.keys(getWebComponentMetadata().getEvents()[eventIdentifier]).reduce((acc, val) => {
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

  const getMetadataEvents = () => {
    return Object.keys(getWebComponentMetadata().getEvents());
  };

  const getMetadataSlots = () => {
    return Object.keys(getWebComponentMetadata().getSlots());
  };

  const WithWebComponent = React.forwardRef((props: T & WithWebComponentPropTypes, wcRef: RefObject<Ui5DomRef>) => {
    const { className = '' } = props;

    const [updateAfterMount, setUpdateAfterMount] = useState(false);
    const prevInnerStylesProp = useRef(null);
    const shadowRootRef: MutableRefObject<HTMLElement> = useRef();
    const eventRegistry = useRef({});
    const eventRegistryWrapped = useRef({});
    const localWcRef = useRef(null);

    const CustomTag = WebComponent.getMetadata().getTag();
    const slots = WebComponent.getMetadata().getSlots();

    const getWcRef = () => wcRef || localWcRef;

    const getBooleanProps = () => {
      return getMetadataBooleans().reduce((acc, key) => {
        if (props[key]) {
          acc[toKebabCase(key)] = true;
        }
        return acc;
      }, {});
    };

    const bindEvents = () => {
      getMetadataEvents().forEach((eventIdentifier) => {
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

    const getShadowDomRef = () => {
      if (shadowRootRef.current) {
        return shadowRootRef.current;
      }
      return (shadowRootRef.current =
        getWcRef().current && getWcRef().current.getDomRef ? getWcRef().current.getDomRef() : null);
    };

    const getRegularProps = () => {
      if (getWcRef().current) {
        bindEvents();
      }

      const regularProps = {};
      const slotProps = {};

      Object.entries(props)
        .filter(([key]) => !getMetadataBooleans().includes(key))
        .filter(
          ([key]) =>
            !getMetadataEvents().some((eventKey) => `on${capitalizeFirstLetter(eventKey)}` === key || key === eventKey)
        )
        .filter(([key]) => !propBlacklist[key])
        .forEach(([key, value]) => {
          if (getMetadataSlots().includes(key)) {
            slotProps[key] = value;
          } else {
            regularProps[toKebabCase(key)] = value;
          }
        });

      return { regularProps, slotProps };
    };

    const applyInnerStyles = () => {
      const { innerStyles } = props;
      const shadowRef = getShadowDomRef();
      if (!shadowRef) {
        return;
      }
      if (innerStyles) {
        Object.entries(innerStyles).forEach(([key, value]) => {
          shadowRef.style[key] = value;
        });
      }
    };

    const removeOldStyles = (prevStyles) => {
      if (prevStyles) {
        Object.keys(prevStyles).forEach((key) => {
          getShadowDomRef().style[key] = '';
        });
      }
    };

    // effects
    useEffect(() => {
      requestAnimationFrame(() => {
        removeOldStyles(prevInnerStylesProp.current);
        applyInnerStyles();
      });

      prevInnerStylesProp.current = props.innerStyles;
    }, [props.innerStyles]);

    useEffect(() => {
      if (getWcRef().current) {
        bindEvents();
        requestAnimationFrame(() => {
          applyInnerStyles();
        });
      } else {
        setUpdateAfterMount(true);
      }
    }, []);

    // render
    const { regularProps: passedProps, slotProps: actualSlotProps } = getRegularProps();

    const { children, ...rest } = passedProps as T & WithWebComponentPropTypes;
    return (
      <CustomTag {...getBooleanProps()} ref={getWcRef()} {...rest} class={className}>
        {Object.keys(slots).map((slot) => {
          if (actualSlotProps[slot]) {
            return Children.map(actualSlotProps[slot], (item: ReactElement<any>, index) =>
              cloneElement(item, {
                key: `${slot}-${index}`,
                'data-ui5-slot': slot
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
