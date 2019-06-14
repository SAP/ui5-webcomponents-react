import { Event } from '@ui5-webcomponents-react/utils';
import React, { Children, cloneElement, Component, CSSProperties, FC, ReactElement } from 'react';
import { withTheme } from 'react-jss';
import { Fiori3CommonProps } from '../interfaces/Fiori3CommonProps';
import { JSSTheme } from '../interfaces/JSSTheme';
import { Ui5DomRef } from '../interfaces/Ui5DomRef';
import { Ui5WebComponentMetadata } from '../interfaces/Ui5WebComponentMetadata';

function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function toKebabCase(s: string) {
  return s.replace(/([A-Z])/g, (a, b) => `-${b.toLowerCase()}`);
}

export interface WithWebComponentPropTypes extends Fiori3CommonProps {
  innerComponentRef?: (el: HTMLElement) => void;
  children?: any | void;
  innerStyles?: CSSProperties;
}

interface WithWebComponentInternalPropTypes extends WithWebComponentPropTypes {
  theme: JSSTheme;
}

export function withWebComponent<T>(WebComponent): FC<T> {
  class WithWebComponent extends Component<T & WithWebComponentPropTypes> {
    state = {
      updateAfterMount: false
    };

    private wcRef: Ui5DomRef;
    private shadowRootRef: HTMLElement;
    private eventRegistry = {};
    private eventRegistryWrapped = {};

    private handleInnerRef = (ref: HTMLElement) => {
      const { innerComponentRef } = this.props;
      this.wcRef = ref;
      if (innerComponentRef) {
        innerComponentRef(ref);
      }
    };

    private getWebComponentMetadata = (): Ui5WebComponentMetadata => {
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

    private getMetadataBooleans = () => {
      return Object.entries(this.getWebComponentMetadata().getProperties())
        .filter(([key, value]) => value.type === Boolean)
        .map(([key]) => key);
    };

    private createEventWrapperFor = (eventIdentifier, eventHandler) => (e) => {
      let payload = Object.keys(this.getWebComponentMetadata().getProperties()).reduce((acc, val) => {
        if (/^_/.test(val)) {
          return acc;
        }
        acc[val] = e.target[toKebabCase(val)];
        return acc;
      }, {});

      payload = Object.keys(this.getWebComponentMetadata().getEvents()[eventIdentifier]).reduce((acc, val) => {
        if (val === 'detail' && e[val]) {
          return {
            ...acc,
            ...e[val]
          };
        }
        acc[val] = (e.detail && e.detail[val]) || e[val];
        return acc;
      }, payload);
      eventHandler(Event.of(this, e, payload));
    };

    private bindEvents = () => {
      this.getMetadataEvents().forEach((eventIdentifier) => {
        const alternativeKey = 'on' + capitalizeFirstLetter(eventIdentifier);
        const eventHandler = this.props[eventIdentifier] || this.props[alternativeKey];
        if (typeof eventHandler === 'function' && this.eventRegistry[alternativeKey] !== eventHandler) {
          if (this.eventRegistry[alternativeKey]) {
            this.wcRef.removeEventListener(eventIdentifier, this.eventRegistryWrapped[alternativeKey]);
          }
          this.eventRegistryWrapped[alternativeKey] = this.createEventWrapperFor(eventIdentifier, eventHandler);
          this.wcRef.addEventListener(eventIdentifier, this.eventRegistryWrapped[alternativeKey]);
          this.eventRegistry[alternativeKey] = eventHandler;
        } else if (this.eventRegistry[alternativeKey] && !eventHandler) {
          this.wcRef.removeEventListener(eventIdentifier, this.eventRegistryWrapped[alternativeKey]);
        }
      });
    };

    private getMetadataSlots = () => {
      return Object.keys(this.getWebComponentMetadata().getSlots());
    };

    private getMetadataEvents = () => {
      return Object.keys(this.getWebComponentMetadata().getEvents());
    };

    get booleanProps() {
      return this.getMetadataBooleans().reduce((acc, key) => {
        if (this.props[key]) {
          acc[toKebabCase(key)] = true;
        }
        return acc;
      }, {});
    }

    static get propBlacklist() {
      return {
        className: true,
        innerStyles: true
      };
    }

    get shadowDomRef() {
      if (this.shadowRootRef) {
        return this.shadowRootRef;
      }
      return (this.shadowRootRef = this.wcRef && this.wcRef.getDomRef ? this.wcRef.getDomRef() : null);
    }

    get regularProps() {
      if (this.wcRef) {
        this.bindEvents();
      }

      const props = {};
      const slotProps = {};

      Object.entries(this.props)
        .filter(([key]) => !this.getMetadataBooleans().includes(key))
        .filter(
          ([key]) =>
            !this.getMetadataEvents().some(
              (eventKey) => `on${capitalizeFirstLetter(eventKey)}` === key || key === eventKey
            )
        )
        .filter(([key]) => !WithWebComponent.propBlacklist[key])
        .forEach(([key, value]) => {
          if (this.getMetadataSlots().includes(key)) {
            slotProps[key] = value;
          } else {
            props[toKebabCase(key)] = value;
          }
        });

      return { props, slotProps };
    }

    applyInnerStyles = () => {
      const { innerStyles } = this.props;
      const shadowRef = this.shadowDomRef;
      if (!shadowRef) {
        return;
      }
      if (innerStyles) {
        Object.entries(innerStyles).forEach(([key, value]) => {
          shadowRef.style[key] = value;
        });
      }
    };

    removeOldStyles = (prevStyles) => {
      if (prevStyles) {
        Object.keys(prevStyles).forEach((key) => {
          this.shadowDomRef.style[key] = '';
        });
      }
    };

    componentDidUpdate(prevProps) {
      const executionList = [];

      if (prevProps.innerStyles !== this.props.innerStyles) {
        executionList.push(() => this.removeOldStyles(prevProps.innerStyles));
        executionList.push(this.applyInnerStyles);
      }

      if (executionList.length > 0) {
        requestAnimationFrame(() => {
          executionList.forEach((exec) => exec());
        });
      }
    }

    componentDidMount() {
      if (this.wcRef) {
        this.bindEvents();
        requestAnimationFrame(() => {
          this.applyInnerStyles();
        });
      } else {
        this.setState({
          updateAfterMount: true
        });
      }
    }

    render() {
      const { className = '' } = this.props;

      const CustomTag = WebComponent.getMetadata().getTag();
      const slots = WebComponent.getMetadata().getSlots();

      const { props, slotProps } = this.regularProps;
      const { children, theme, ...regularProps } = props as T & WithWebComponentInternalPropTypes;
      return (
        <CustomTag {...this.booleanProps} ref={this.handleInnerRef} {...regularProps} class={className}>
          {Object.keys(slots).map((slot) => {
            if (slotProps[slot]) {
              return Children.map(slotProps[slot], (item: ReactElement<any>, index) =>
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
    }
  }

  return withTheme(WithWebComponent);
}
