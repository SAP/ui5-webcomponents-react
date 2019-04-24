import { mount as enzymeMount, ReactWrapper } from 'enzyme';
import { cloneElement, ReactElement } from 'react';

export const mount = <P>(component: ReactElement<P>): ReactWrapper<P> => {
  // @ts-ignore
  return enzymeMount(cloneElement(component, { classes: {}, theme: {} }));
};

export const DummyStyleWrapper = (props) => cloneElement(props.children, { classes: {}, theme: {} });
